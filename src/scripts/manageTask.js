import { Project, Task, projectList } from "./manageProject";
Project;

const taskModal = document.querySelector("#task-modal");

export function createTask() {
    taskModal.showModal();
}

const closeBtn = document.querySelector("#closeTaskModal");
export function closeTaskModal() {
    closeBtn.addEventListener("click", () => {
        taskModal.close();
    });
}

export function listTask() {
    const taskName = document.querySelector("#project-title");
    const taskNotes = document.querySelector("#task-notes");
    const taskDd = document.querySelector("#task-dd");
    const taskPriority = document.querySelector("#task-priority");
    const currentProjectTitle =
        document.querySelector("#project-h3").textContent;

    const newTask = new Task(
        taskName.value,
        taskNotes.value,
        taskDd.value,
        taskPriority.value
    );

    const currentProject = projectList.indexOf(currentProjectTitle);
    console.log(projectList);
    console.log(currentProject);

    taskModal.close();
    console.log(newTask);
    projectList[0].addTask(newTask);
    console.log(projectList[0]);
}
