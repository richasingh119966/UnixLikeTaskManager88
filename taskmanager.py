import json
import os
from datetime import datetime

FILE = 'tasks.json'

class TaskManager:
    def __init__(self):
        if not os.path.exists(FILE):
            with open(FILE, 'w') as f:
                json.dump([], f)

    def get_all_tasks(self):
        with open(FILE) as f:
            return json.load(f)

    def create_task(self, name):
        tasks = self.get_all_tasks()
        task = {
            "id": len(tasks) + 1,
            "name": name,
            "status": "running",
            "created_at": datetime.now().isoformat()
        }
        tasks.append(task)
        with open(FILE, 'w') as f:
            json.dump(tasks, f, indent=2)
        return task
