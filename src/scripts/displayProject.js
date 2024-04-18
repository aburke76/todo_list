import { projectList } from "./manageProject";

export function displayProject() {
    const sidebarContent = document.querySelector("#sidebar-content");

    const currentProject = projectList.allProjects.length - 1;
    const currentProjectId = projectList.allProjects[currentProject].id;

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    projectDiv.setAttribute("id", currentProjectId);
    const projectName = document.createElement("h3");
    projectName.textContent = projectList.allProjects[currentProject].name;
    projectDiv.append(projectName);

    const delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.setAttribute("id", currentProjectId);
    delBtn.innerHTML = "<i class='fa-solid fa-minus fa-2xl'></i>";
    projectDiv.append(delBtn);

    delBtn.addEventListener("click", () => {
        deleteProject(delBtn, projectDiv);
    });

    sidebarContent.append(projectDiv);
}

function deleteProject(btn, div) {
    projectList.allProjects.forEach((project) => {
        if (btn.id === project.id) {
            projectList.removeProject(project.id);
        }
    });
    console.log(projectList.allProjects);
    const projectDivs = document.querySelectorAll(".project-div");
    projectDivs.forEach((element) => {
        if (div.id === element.id) {
            element.remove();
        }
    });
}
