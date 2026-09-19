# Student Planner

A full-stack Student Planner application developed as part of the IEEE Elevate Local Program
(Young Protégé 2026), with a focus on DevOps, containerization, CI/CD, and cloud deployment.

The application lets students create, view, update, complete, and delete tasks. Tasks are stored
persistently in a MySQL database, and the whole system is deployed on Microsoft Azure.

## Live Application

🔗 https://jolly-flower-07aa2b100.3.azurestaticapps.net/

## Technologies Used

### Frontend
- React
- Vite
- JavaScript

### Backend
- Python
- Flask
- Flask-SQLAlchemy
- PyMySQL
- Flask-CORS
- Gunicorn

### Database
- MySQL 8.0

### DevOps & Cloud
- Git & GitHub
- Docker
- Docker Compose
- GitHub Actions
- Azure Container Registry
- Azure Container Apps
- Azure Database for MySQL – Flexible Server
- Azure Static Web Apps

### Project Management & Documentation
- Jira
- Confluence

## Features

- Create tasks
- View tasks
- Update tasks
- Mark tasks as completed or incomplete
- Delete tasks
- Filter tasks (All / Active / Done)
- Daily progress indicator
- Persistent database storage

## API Endpoints

| Method | Endpoint      | Description     |
|--------|---------------|-----------------|
| GET    | `/tasks`      | Retrieve tasks  |
| POST   | `/tasks`      | Create a task   |
| PUT    | `/tasks/<id>` | Update a task   |
| DELETE | `/tasks/<id>` | Delete a task   |

## Project Architecture

```
User
  ↓
Azure Static Web Apps   (React + Vite)
  ↓  REST API
Azure Container Apps    (Flask + Gunicorn)
  ↓
Azure MySQL Flexible Server
```

The backend Docker image is stored in Azure Container Registry (ACR) before it is deployed to
Azure Container Apps.

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/SachiniKK/student-planner-devops.git
cd student-planner-devops
```

### 2. Backend setup

```bash
cd app
pip install -r requirements.txt
python app.py
```

The backend runs on `http://localhost:5000`.

### 3. Frontend setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173`.

### 4. Docker setup

From the project root:

```bash
docker compose up --build
```

To stop the containers:

```bash
docker compose down
```

## Environment Variables

### Backend

The backend requires the following variables:

```
DB_HOST
DB_PORT
DB_NAME
DB_USER
DB_PASSWORD
```

### Frontend

The frontend requires:

```
VITE_API_URL
```

`VITE_API_URL` must be the URL of the backend API. For the deployed frontend it is set as an
environment variable in the GitHub Actions build-and-deploy step.

> **Do not commit `.env` files or passwords to GitHub.**

## Cloud Deployment

| Component          | Hosted on                                   |
|--------------------|---------------------------------------------|
| Frontend           | Azure Static Web Apps                       |
| Backend            | Azure Container Apps (Docker + Gunicorn)    |
| Database           | Azure Database for MySQL – Flexible Server  |
| Container images   | Azure Container Registry (ACR)              |

### Backend (manual deployment)

The Flask backend is containerized using Docker. The image is built, pushed to Azure Container
Registry, and then deployed to Azure Container Apps. **Backend deployment is currently performed
manually** – there is no automated backend CI/CD pipeline yet.

### Database

The application uses Azure Database for MySQL – Flexible Server for persistent data storage.

### Frontend

The React frontend is deployed to Azure Static Web Apps.

## CI/CD

CI/CD is currently implemented for the **frontend only**. GitHub Actions automatically builds and
deploys the frontend whenever changes are pushed to the `main` branch.

```
GitHub → GitHub Actions → Vite Build → Azure Static Web Apps
```

Automated backend testing and backend CI/CD are planned as future improvements.

## Documentation

Detailed deployment, configuration, verification, and troubleshooting instructions are available in
the project's Confluence runbook.

## Author

**Sachini Kapurubandara** – IEEE Elevate Local Program, Young Protégé 2026 (DevOps)
Mentor: Mr. Ashan Waduge
