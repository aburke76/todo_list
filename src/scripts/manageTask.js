import { projectList, Task } from "./manageProject";
import { displayTask } from "./displayTask";
import {
    addProjectToLocalStorage,
    addTaskToLocalStorage,
    addToLocalStorage,
    importProjectsFromLocalStorage,
} from "./storage";
import { displayImportedProjects } from "./displayProject";

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
    const dueDate = document.querySelector("#task-dd");
    const priority = document.querySelector("#task-priority");

    const newTask = new Task(
        name.value,
        notes.value,
        dueDate.value,
        priority.value
    );
    activeProject();
    addTask(newTask);
    addToLocalStorage(activeProject());
    clearTaskModal();
    closeTaskModal();
    displayTask(newTask);
}

export function activeProject() {
    let activeProject;
    for (let i = 0; i < projectList.allProjects.length; i++) {
        if (projectList.allProjects[i].active === true) {
            activeProject = projectList.allProjects[i];
        }
    }
    return activeProject;
}

function addTask(task) {
    for (let i = 0; i < projectList.allProjects.length; i++) {
        if (projectList.allProjects[i].id === activeProject().id) {
            projectList.allProjects[i].addTask(task);
        }
    }
}

export function findTaskList() {
    let selectedProject;
    let currentTaskList;
    for (let i = 0; i < projectList.allProjects.length; i++) {
        if (projectList.allProjects[i].id === activeProject().id) {
            selectedProject = i;
        }
    }
    currentTaskList = projectList.allProjects[selectedProject].taskList;
    return currentTaskList;
}

export function findTask() {
    let selectedProject;
    let currentTask;
    for (let i = 0; i < projectList.allProjects.length; i++) {
        if (projectList.allProjects[i].id === activeProject().id) {
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
            activeProject().id
        ) {
            currentTask = projectList.allProjects[selectedProject].taskList[i];
        }
    }
    return currentTask;
}

export function findProject() {
    let currentProject;
    for (let i = 0; i < projectList.allProjects.length; i++) {
        if (projectList.allProjects[i].id === activeProject().id) {
            currentProject = i;
        }
    }
    return projectList.allProjects[currentProject];
}

export function deleteTask(taskId) {
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
    addToLocalStorage(currentProject);
    importProjectsFromLocalStorage();
}

export function selectAllTasks() {
    const currentProject = activeProject();
    const projectTasks = currentProject.taskList;
    return projectTasks;
}

export function clearTaskModal() {
    const name = document.querySelector("#task-name");
    const notes = document.querySelector("#task-notes");
    const date = document.querySelector("#task-dd");

    name.value = null;
    notes.value = null;
    date.value = null;
}
