import "../styles.css";
import {
    addProject,
    listNewProject,
    displayProject,
    closeProjectModal,
    findProjectAndTask,
    projectList,
} from "../scripts/manageProject";
import {
    createTask,
    listTask,
    closeTaskModal,
    displayTask,
} from "../scripts/manageTask";

const newProject = document.querySelector("#add-project");
const submitBtn = document.querySelector("#submit-project");
const newTaskBtn = document.querySelector("#add-task-btn");
const submitTask = document.querySelector("#submit-task");

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

submitTask.addEventListener("click", (e) => {
    e.preventDefault();
    listTask();
});

closeProjectModal();
closeTaskModal();
