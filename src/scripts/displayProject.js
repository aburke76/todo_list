import {
    projectList,
    deleteProject,
    allProjectsInactive,
} from "./manageProject";
import { clearAllTasks, displayAllTasks } from "./displayTask";
import { removeFromLocalStorage } from "./storage";

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
    if (projectList.allProjects[currentProject].name !== "Default") {
        delBtn.classList.add("delBtn");
        delBtn.setAttribute("id", currentProjectId);
        const i = document.createElement("i");
        i.classList.add("fa-solid", "fa-minus", "fa-2xl");
        delBtn.append(i);
        projectDiv.append(delBtn);
    }

    projectDiv.addEventListener("click", (target) => {
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
        clearAllTasks();
        deleteProject(currentProjectId);
        removeFromLocalStorage(currentProjectId);
    });

    sidebarContent.append(projectDiv);
    displayAllTasks();
}

export function displayNewestProject() {
    const projectH3 = document.querySelector("#project-h3");

    allProjectsInactive();

    const newestProjectIndex = projectList.allProjects.length - 1;
    projectList.allProjects[newestProjectIndex].active = true;
    projectList.allProjects.forEach((project) => {
        if (project.id === projectList.allProjects[newestProjectIndex].id) {
            clearAllTasks();
            displayAllTasks();
            projectH3.textContent =
                projectList.allProjects[newestProjectIndex].name;
        }
    });
}

export function displayActiveProject() {
    const projectH3 = document.querySelector("#project-h3");
    if (projectList.allProjects.length === 0) {
        projectH3.textContent = "";
    } else {
        allProjectsInactive();
        projectList.allProjects[0].active = true;
        clearAllTasks();
        projectList.allProjects.forEach((project) => {
            if (project.id === projectList.allProjects[0].id) {
                displayAllTasks();
                projectH3.textContent = projectList.allProjects[0].name;
            }
        });
    }
}

export function displayImportedProjects() {
    const sidebarContent = document.querySelector("#sidebar-content");
    const projectH3 = document.querySelector("#project-h3");

    projectList.allProjects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-div");
        projectDiv.setAttribute("id", project.id);
        const projectName = document.createElement("h3");
        projectName.textContent = project.name;
        projectName.setAttribute("id", project.id);
        projectName.classList.add("project-name");
        projectDiv.append(projectName);

        const delBtn = document.createElement("button");
        if (project.name !== "Default") {
            delBtn.classList.add("delBtn");
            delBtn.setAttribute("id", project.id);
            const i = document.createElement("i");
            i.classList.add("fa-solid", "fa-minus", "fa-2xl");
            delBtn.append(i);
            projectDiv.append(delBtn);
        }

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
            clearAllTasks();
            deleteProject(project.id);
        });

        sidebarContent.append(projectDiv);
        displayAllTasks();
    });
}
