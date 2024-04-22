import "../styles.css";
import { displayProject } from "./displayProject";
import { displayTask, removeTask } from "./displayTask";
import {
    createProject,
    openProjectModal,
    closeProjectModal,
    clearProjectModal,
    defaultTask,
    projectList,
} from "../scripts/manageProject";
import {
    closeTaskModal,
    createTask,
    openTaskModal,
    clearTaskModal,
    findTask,
    activeProjectId,
    deleteTask,
    findTaskList,
} from "../scripts/manageTask";

const newProject = document.querySelector("#add-project");
const submitProject = document.querySelector("#project-form");
const closeProject = document.querySelector("#close-project-modal");
const closeTask = document.querySelector("#close-task-modal");
const newTaskBtn = document.querySelector("#add-task-btn");
const submitTask = document.querySelector("#submit-task");

newProject.addEventListener("click", () => {
    openProjectModal();
});

submitProject.addEventListener("submit", (e) => {
    e.preventDefault();
    createProject();
});

closeProject.addEventListener("click", () => {
    clearProjectModal();
    closeProjectModal();
});

newTaskBtn.addEventListener("click", () => {
    openTaskModal();
});

submitTask.addEventListener("click", (e) => {
    e.preventDefault();
    createTask();
});

closeTask.addEventListener("click", () => {
    clearTaskModal();
    closeTaskModal();
});

displayProject();
closeProjectModal();
