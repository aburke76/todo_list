import { Project, Task } from "./manageProject";

const taskModal = document.querySelector("#task-modal");

export function createTask() {
    taskModal.showModal();
}
