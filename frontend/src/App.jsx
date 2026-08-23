import { useEffect, useState } from "react";
import "./App.css";
import { PinkFlowerStem, LavenderStem, LeafSprig, SmallFlowerCluster, MiniLavender } from "./components/BotanicalDecorations";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // "all", "active", "completed"

  const API_URL = "http://127.0.0.1:5000/tasks";

  const fetchTasks = () => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Backend not available, using fallback mode:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = (e) => {
    if (e) e.preventDefault();
    if (!title.trim()) return;

    const newTitle = title.trim();
    setTitle("");

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    })
      .then((res) => res.json())
      .then(() => fetchTasks())
      .catch(() => {
        // Local state fallback if backend connection fails
        setTasks((prev) => [
          ...prev,
          { id: Date.now(), title: newTitle, completed: false },
        ]);
      });
  };

  const deleteTask = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchTasks())
      .catch(() => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
      });
  };

  const toggleComplete = (task) => {
    const updatedCompleted = !task.completed;

    // Optimistic UI update
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, completed: updatedCompleted } : t))
    );

    fetch(`${API_URL}/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: task.title,
        completed: updatedCompleted,
      }),
    })
      .then(() => fetchTasks())
      .catch(() => {
        // Kept optimistic update
      });
  };

  // Calculations for Habit Progress
  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  // Pastel Card Background Color Mapping
  const cardColorClasses = [
    "card-mint",
    "card-rose",
    "card-lavender",
    "card-peach",
    "card-sky",
  ];

  return (
    <div className="page-wrapper">
      {/* Background Floral Accents */}
      <PinkFlowerStem className="bg-botanical bg-flower-left" />
      <LavenderStem className="bg-botanical bg-lavender-left" />
      <LavenderStem className="bg-botanical bg-lavender-right" flip={true} />
      <LeafSprig className="bg-botanical bg-leaf-top-right" />
      
      {/* Small Flowers and Leaves in Blank Background Spaces */}
      <SmallFlowerCluster className="bg-botanical bg-small-flower-top-left" />
      <SmallFlowerCluster className="bg-botanical bg-small-flower-mid-right" />
      <MiniLavender className="bg-botanical bg-mini-lavender-top-center" />
      <MiniLavender className="bg-botanical bg-mini-lavender-bottom-center" />
      <LeafSprig className="bg-botanical bg-leaf-bottom-left" />

      {/* Main Glass Card Container */}
      <div className="planner-card">
        {/* Header Section */}
        <header className="planner-header">
          <h1 className="planner-title">Student Planner</h1>
          <p className="planner-subtitle">Plan your day, gently</p>

          {/* Progress Card (like reference image top stats) */}
          <div className="progress-section">
            <div className="progress-info">
              <span className="progress-label">Daily Progress</span>
              <span className="progress-count">
                {completedCount} of {totalCount} completed ({progressPercent}%)
              </span>
            </div>
            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </header>

        {/* Input Form */}
        <form className="task-input-form" onSubmit={addTask}>
          <input
            type="text"
            className="task-input"
            placeholder="Add a new goal or task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="add-task-btn">
            <svg
              className="btn-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Add</span>
          </button>
        </form>

        {/* Filter Pills */}
        <div className="task-filters">
          <button
            className={`filter-tab ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All ({totalCount})
          </button>
          <button
            className={`filter-tab ${filter === "active" ? "active" : ""}`}
            onClick={() => setFilter("active")}
          >
            Active ({totalCount - completedCount})
          </button>
          <button
            className={`filter-tab ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Done ({completedCount})
          </button>
        </div>

        {/* Task List */}
        <div className="task-list">
          {filteredTasks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🌿</div>
              <p className="empty-title">
                {tasks.length === 0
                  ? "No tasks yet today"
                  : filter === "completed"
                  ? "No completed tasks yet"
                  : "All tasks completed!"}
              </p>
              <p className="empty-sub">
                {tasks.length === 0
                  ? "Type your first task above and bloom your day!"
                  : "Keep going, you're doing great! 🌸"}
              </p>
            </div>
          ) : (
            filteredTasks.map((task, index) => {
              const colorClass = cardColorClasses[index % cardColorClasses.length];
              return (
                <div
                  key={task.id}
                  className={`task-card ${colorClass} ${
                    task.completed ? "task-completed" : ""
                  }`}
                >
                  <div className="task-content">
                    <span className="task-title">{task.title}</span>
                  </div>

                  {/* Prominent Action Buttons (Tick and Delete) */}
                  <div className="task-actions">
                    {/* Tick / Complete Button */}
                    <button
                      type="button"
                      className={`action-btn tick-btn ${
                        task.completed ? "is-completed" : ""
                      }`}
                      onClick={() => toggleComplete(task)}
                      title={
                        task.completed
                          ? "Mark as incomplete"
                          : "Mark as completed"
                      }
                      aria-label={
                        task.completed
                          ? "Mark task incomplete"
                          : "Mark task completed"
                      }
                    >
                      <svg
                        className="tick-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </button>

                    {/* Delete Button */}
                    <button
                      type="button"
                      className="action-btn delete-btn"
                      onClick={() => deleteTask(task.id)}
                      title="Delete task"
                      aria-label="Delete task"
                    >
                      <svg
                        className="trash-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;