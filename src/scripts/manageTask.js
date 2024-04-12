import { Project, Task, projectList, findProject } from "./manageProject";
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
    const taskName = document.querySelector("#task-title");
    const taskNotes = document.querySelector("#task-notes");
    const taskDd = document.querySelector("#task-dd");
    const taskPriority = document.querySelector("#task-priority");

    const newTask = new Task(
        taskName.value,
        taskNotes.value,
        taskDd.value,
        taskPriority.value
    );

    const currentProject = projectList.filter((project) => {
        project;
    });
    console.log(projectList);
    console.log(currentProject);

    taskModal.close();
    console.log(newTask);
    projectList[0].addTask(newTask);
    console.log(projectList[0]);

    displayTask();

    taskName.value = null;
    taskNotes.value = null;
    taskDd.value = null;
    taskPriority.value = null;
}

export function displayTask() {
    const projectContent = document.querySelector("#project-content");

    const taskName = document.querySelector("#task-title");
    const taskNotes = document.querySelector("#task-notes");
    const taskDd = document.querySelector("#task-dd");
    const taskPriority = document.querySelector("#task-priority");

    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("id", "task-div");

    const name = document.createElement("h3");
    const notes = document.createElement("div");
    const date = document.createElement("div");
    const priority = document.createElement("div");

    name.textContent = taskName.value;
    notes.textContent = taskNotes.value;
    date.textContent = `Due: ${taskDd.value}`;
    priority.textContent = `Priority: ${taskPriority.value}`;

    taskDiv.append(name, notes, date, priority);
    projectContent.append(taskDiv);
}
