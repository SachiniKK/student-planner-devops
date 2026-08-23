from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

from models import db, Task

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = (
    f"mysql+pymysql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}"
    f"@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
)

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

# Home route
@app.route("/")
def home():
    return "Student Planner API Running"

# Create Task (CREATE in CRUD)
@app.route("/tasks", methods=["POST"])
def create_task():
    data = request.json

    task = Task(title=data["title"])

    db.session.add(task)
    db.session.commit()

    return jsonify({"message": "Task created"}), 201

# Read Tasks (READ in CRUD)
@app.route("/tasks", methods=["GET"])
def get_tasks():
    tasks = Task.query.all()

    result = []

    for task in tasks:
        result.append({
            "id": task.id,
            "title": task.title,
            "completed": task.completed
        })

    return jsonify(result)

# Update Task (UPDATE in CRUD)
@app.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):
    task = Task.query.get_or_404(id)

    data = request.json

    task.title = data["title"]
    task.completed = data["completed"]

    db.session.commit()

    return jsonify({"message": "Task updated"})

# Delete Task (DELETE in CRUD)
@app.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):
    task = Task.query.get_or_404(id)

    db.session.delete(task)
    db.session.commit()

    return jsonify({"message": "Task deleted"})

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)