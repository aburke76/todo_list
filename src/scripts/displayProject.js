import { selectAllTasks, deleteTask } from "./manageTask";
import {
    projectList,
    deleteProject,
    changeProjectTasksDisplay,
} from "./manageProject";

export function displayProject() {
    const sidebarContent = document.querySelector("#sidebar-content");

    const currentProject = projectList.allProjects.length - 1;
    const currentProjectId = projectList.allProjects[currentProject].id;

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    projectDiv.setAttribute("id", currentProjectId);
    const projectName = document.createElement("h3");
    projectName.textContent = projectList.allProjects[currentProject].name;
    projectName.setAttribute("id", currentProjectId);
    projectName.classList.add("project-name");
    projectDiv.append(projectName);

    const delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.setAttribute("id", currentProjectId);
    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-minus", "fa-2xl");
    delBtn.append(i);
    projectDiv.append(delBtn);

    delBtn.addEventListener("click", () => {
        deleteProject(currentProjectId);
    });

    sidebarContent.append(projectDiv);
    // changeProjectTasksDisplay();
}
