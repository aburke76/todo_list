import "../styles.css";
import {
    addProject,
    listNewProject,
    displayProject,
} from "../scripts/manageProject";
import { createTask } from "../scripts/manageTask";

const newProject = document.querySelector("#add-project");
const submitBtn = document.querySelector("#submit-project");
const newTaskBtn = document.querySelector("#add-task-btn");

displayProject();

newProject.addEventListener("click", () => {
    addProject();
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    listNewProject();
});

newTaskBtn.addEventListener("click", () => {
    createTask();
});
