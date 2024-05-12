import "../styles.css";
import {
    displayActiveProject,
    displayImportedProjects,
    displayNewestProject,
} from "./displayProject";
import {
    createProject,
    openProjectModal,
    closeProjectModal,
    projectList,
} from "../scripts/manageProject";
import {
    closeTaskModal,
    createTask,
    openTaskModal,
    clearTaskModal,
} from "../scripts/manageTask";
import { clearAllTasks, displayAllTasks } from "./displayTask";

const newProject = document.querySelector("#add-project");
const submitProject = document.querySelector("#submit-project");
const closeProject = document.querySelector("#close-project-modal");
const closeTask = document.querySelector("#close-task-modal");
const newTaskBtn = document.querySelector("#add-task-btn");
const submitTask = document.querySelector("#submit-task");

newProject.addEventListener("click", () => {
    openProjectModal();
});

submitProject.addEventListener("click", (e) => {
    const form = document.querySelector("#project-form");
    e.preventDefault();
    if (form.checkValidity() === false) {
        form.reportValidity();
    } else {
        createProject();
    }
});

const form = document.querySelector("#project-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

closeProject.addEventListener("click", () => {
    closeProjectModal();
});

newTaskBtn.addEventListener("click", () => {
    if (projectList.allProjects.length === 0) {
        alert("Create a project first!");
        openProjectModal();
    } else {
        openTaskModal();
    }
});

submitTask.addEventListener("click", (e) => {
    const form = document.querySelector("#task-form");
    e.preventDefault();
    if (form.checkValidity() === false) {
        form.reportValidity();
    } else {
        createTask();
    }
});

closeTask.addEventListener("click", () => {
    clearTaskModal();
    closeTaskModal();
});

closeProjectModal();
closeTaskModal();

displayImportedProjects();
displayNewestProject();
clearAllTasks();
displayAllTasks();
