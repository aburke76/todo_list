import "../styles.css";
import {
    createProject,
    displayProject,
    openProjectModal,
    closeProjectModal,
} from "../scripts/manageProject";
import {
    createTask,
    listTask,
    closeTaskModal,
    displayTask,
} from "../scripts/manageTask";

const newProject = document.querySelector("#add-project");
const submitProject = document.querySelector("#project-form");
const closeProject = document.querySelector("#close-project-modal");
const newTaskBtn = document.querySelector("#add-task-btn");
const submitTask = document.querySelector("#submit-task");

newProject.addEventListener("click", () => {
    openProjectModal();
});

submitProject.addEventListener("submit", (e) => {
    e.preventDefault();
    createProject();
    closeProjectModal();
});

closeProject.addEventListener("click", () => {
    closeProjectModal();
});

// newTaskBtn.addEventListener("click", () => {
//     createTask();
// });

// submitTask.addEventListener("click", (e) => {
//     e.preventDefault();
//     listTask();
// });

displayProject();
closeProjectModal();
