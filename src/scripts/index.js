import "../styles/frame.css";
import { addProject, listNewProject } from "../scripts/createProject";

const newProject = document.querySelector("#add-project");
const submitBtn = document.querySelector("#submit-project");

newProject.addEventListener("click", () => {
    addProject();
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
});
