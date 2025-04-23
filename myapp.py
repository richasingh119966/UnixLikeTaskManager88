from flask import Flask, request, jsonify, render_template
from taskmanager import TaskManager

app = Flask(__name__)
task_manager = TaskManager()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(task_manager.get_all_tasks())

@app.route('/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    name = data.get('name')
    if not name:
        return jsonify({'error': 'Task name required'}), 400
    task = task_manager.create_task(name)
    return jsonify(task), 201

if __name__ == '__main__':
    app.run(debug=True)
