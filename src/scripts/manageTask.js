import { v4 as uuidv4 } from "uuid";
import { projectList } from "./manageProject";

export function openTaskModal() {
    const modal = document.querySelector("#task-modal");
    modal.showModal();
}

export function createTask() {
    const name = document.querySelector("#task-name");
    const notes = document.querySelector("#task-notes");
    const date = document.querySelector("#task-dd");
    const priority = document.querySelector("#task-priority");

    const newTask = new Task(
        name.value,
        notes.value,
        date.value,
        priority.value
    );
}
