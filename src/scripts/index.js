import "../styles/frame.css";
import { addProject } from "../scripts/createProject";

const newProject = document.querySelector("#add-project");

newProject.addEventListener("click", () => {
    addProject();
});
