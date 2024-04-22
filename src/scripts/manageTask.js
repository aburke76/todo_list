import { projectList, Task, Project, deleteProject } from "./manageProject";
import { displayTask, removeTask } from "./displayTask";

export function openTaskModal() {
    const modal = document.querySelector("#task-modal");
    modal.showModal();
}

export function closeTaskModal() {
    const modal = document.querySelector("#task-modal");
    modal.close();
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

    activeProjectId();
    addTask(newTask);

    closeTaskModal();
    clearTaskModal();
    displayTask(newTask);
    console.log(newTask.taskId);
}

export function activeProjectId() {
    const projectDivs = document.querySelectorAll(".project-div");
    let divId;
    projectDivs.forEach((div) => {
        if (div.classList.value.includes("active")) {
            divId = div.id;
        }
    });
    return divId;
}

function addTask(task) {
    const elId = activeProjectId();
    for (let i = 0; i < projectList.allProjects.length; i++) {
        if (projectList.allProjects[i].id === elId) {
            projectList.allProjects[i].addTask(task);
        }
    }
}

export function findTaskList() {
    const projectId = activeProjectId();
    let selectedProject;
    let currentTaskList;
    for (let i = 0; i < projectList.allProjects.length; i++) {
        if (projectList.allProjects[i].id === projectId) {
            selectedProject = i;
        }
    }
    currentTaskList = projectList.allProjects[selectedProject].taskList;
    return currentTaskList;
}

export function findTask() {
    const projectId = activeProjectId();
    let selectedProject;
    let currentTask;
    for (let i = 0; i < projectList.allProjects.length; i++) {
        if (projectList.allProjects[i].id === projectId) {
            selectedProject = i;
        }
    }
    for (
        let i = 0;
        i < projectList.allProjects[selectedProject].taskList.length;
        i++
    ) {
        if (
            projectList.allProjects[selectedProject].taskList[i].projectId ===
            projectId
        ) {
            currentTask = projectList.allProjects[selectedProject].taskList[i];
        }
    }
    return currentTask;
}

export function findProject() {
    const projectId = activeProjectId();
    let currentProject;
    for (let i = 0; i < projectList.allProjects.length; i++) {
        if (projectList.allProjects[i].id === projectId) {
            currentProject = i;
        }
    }
    return projectList.allProjects[currentProject];
}

export function deleteTask(taskId) {
    //TAKING OUT NEWEST TASK
    const currentProject = findProject();
    const taskList = findTaskList();
    let selectedTaskId;

    taskList.forEach((task) => {
        if (task.taskId === taskId) {
            selectedTaskId = taskId;
        }
    });
    const delBtns = document.querySelectorAll(".task-del-btn");
    delBtns.forEach((btn) => {
        if (btn.id === selectedTaskId) {
            currentProject.removeTask(taskId);
        }
    });

    const taskDivs = document.querySelectorAll(".task-div");
    taskDivs.forEach((div) => {
        if (div.id === selectedTaskId) {
            div.remove();
        }
    });
    console.log(taskList);
}

function clearTaskModal() {
    const name = document.querySelector("#task-name");
    const notes = document.querySelector("#task-notes");
    const date = document.querySelector("#task-dd");
    const priority = document.querySelector("#task-priority");
    name.value = null;
    notes.value = null;
    date.value = null;
    priority.value = null;
}
