import "../styles/frame.css";
import { addProject, displayProjects } from "../scripts/createProject";

const newProject = document.querySelector("#add-project");
const submitBtn = document.querySelector("#submit-project");

displayProjects();

newProject.addEventListener("click", () => {
    addProject();
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
});
