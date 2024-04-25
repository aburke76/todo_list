import "../styles.css";
import { displayProject } from "./displayProject";
import { displayTask, removeTask, displayAllTasks } from "./displayTask";
import {
    createProject,
    openProjectModal,
    closeProjectModal,
    clearProjectModal,
    defaultTask,
    projectList,
    changeProjectTasksDisplay,
    allProjectsInactive,
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
    selectAllTasks,
    findProject,
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
    console.table(projectList.allProjects);
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
const projectNames = document.querySelectorAll(".project-name");
console.log(projectNames);

projectNames.forEach((name) => {
    name.addEventListener("click", () => {
        // allProjectsInactive();
    });
    console.table(projectList.allProjects);
});

// displayAllTasks();
closeProjectModal();
