import {
    projectList,
    deleteProject,
    allProjectsInactive,
} from "./manageProject";
import { clearAllTasks, displayAllTasks } from "./displayTask";

export function displayProject() {
    const sidebarContent = document.querySelector("#sidebar-content");
    const projectH3 = document.querySelector("#project-h3");

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

    projectName.addEventListener("click", (target) => {
        const clickedProject = target.target;
        allProjectsInactive();
        projectList.allProjects.forEach((project) => {
            if (project.id === clickedProject.id) {
                project.active = true;
                clearAllTasks();
                displayAllTasks();
                projectH3.textContent = clickedProject.textContent;
            }
        });
    });

    delBtn.addEventListener("click", () => {
        deleteProject(currentProjectId);
    });

    sidebarContent.append(projectDiv);
    displayAllTasks();
}

//MAKE IT SO THE NEWEST PROJECT IS DISPLAYED
