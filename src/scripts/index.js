import "../styles.css";
import { displayProject, showAllTasks } from "./displayProject";
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
    activeProject,
} from "../scripts/manageTask";

const newProject = document.querySelector("#add-project");
const submitProject = document.querySelector("#project-form");
const closeProject = document.querySelector("#close-project-modal");
const closeTask = document.querySelector("#close-task-modal");
const newTaskBtn = document.querySelector("#add-task-btn");
const submitTask = document.querySelector("#submit-task");
const projectContent = document.querySelector("#project-content");

newProject.addEventListener("click", () => {
    openProjectModal();
});

submitProject.addEventListener("submit", (e) => {
    e.preventDefault();
    createProject();
});

closeProject.addEventListener("click", () => {
    clearProjectModal();
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
const projects = document.querySelectorAll(".project-name");

projects.forEach((project) => {
    project.addEventListener("click", () => {
        if (project.classList.value.includes("active")) {
            return;
        }
        if (!project.classList.value.includes("active")) {
            projects.forEach((project) => {
                if (project.classList.value.includes("active")) {
                    project.classList.remove("active");
                }
            });
            project.classList.add("active");
            showAllTasks();
        }
    });
});

closeProjectModal();

console.log(activeProject());
