import "../styles/frame.css";
import { addProject } from "../scripts/createProject";
import { listNewProject } from "../scripts/createProject";

const newProject = document.querySelector("#add-project");
const submitBtn = document.querySelector("#submit-project");

newProject.addEventListener("click", () => {
    addProject();
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    listNewProject();
});
