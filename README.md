
# 🧠 Unix-Inspired Task Manager API

A simple Flask-based task manager that mimics Unix-style commands like `ls` (list) and `fork` (create task). Tasks are created, listed, and deleted using RESTful API endpoints — plus a clean HTML UI for interaction.

---

## 🚀 Features

- Create a new task (like `fork`)
- List all tasks (like `ls`)
- Delete tasks
- Simple HTML interface with buttons
- JSON-based backend storage

---

## 🛠️ Tech Stack

- Python 3
- Flask
- JSON for storage (no database)
- HTML (for frontend)

---

## 📂 Project Structure

```
task-manager/
├── myapp.py             # Main Flask app
├── taskmanager.py       # Task manager logic
├── tasks.json           # JSON file to store tasks
├── templates/
│   └── index.html       # HTML UI
```

---

## 🔧 How to Run

### 1. Install Flask (if not already)
```bash
pip install flask
```

### 2. Run the App
```bash
python myapp.py
```

Open your browser at:  
[http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 📬 API Endpoints

### ✅ List All Tasks
```http
GET /tasks
```

### ➕ Create a Task
```http
POST /tasks
Content-Type: application/json

{
  "name": "My New Task"
}
```

### ❌ Delete a Task
```http
DELETE /tasks/<id>
```

---

## ✨ Example Usage

- Visit homepage: [http://localhost:5000](http://localhost:5000)
- Use buttons to list or create tasks
- Test endpoints via Postman or curl

---

## 📌 Notes

- Tasks are stored in a local `tasks.json` file
- App is for demonstration only — not production ready
- Simple and readable code for learning purposes

---

## 🧑‍💻 Author

Built with ❤️ for a take-home challenge.
