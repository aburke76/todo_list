import { v4 as uuidv4 } from "uuid";

export class TaskManager {
    projectTaskList = [];
    addTask(task) {
        this.projectTaskList.push(task);
    }
}

export class Task {
    constructor(name, notes, dueDate, priority, id = uuidv4()) {
        this.name = name;
        this.notes = notes;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id;
    }
}

const defaultTask = new Task(
    "Don't Cry",
    "keep it together, man",
    "04/09/2024",
    "High"
);
