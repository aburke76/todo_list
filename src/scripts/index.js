import "../styles/frame.css";
import {
    addProject,
    listNewProject,
    displayProject,
} from "../scripts/manageProject";

const newProject = document.querySelector("#add-project");
const submitBtn = document.querySelector("#submit-project");

displayProject();

newProject.addEventListener("click", () => {
    addProject();
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    listNewProject();
});
