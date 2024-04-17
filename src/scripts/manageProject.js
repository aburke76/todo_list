import { v4 as uuidv4 } from "uuid";

class ProjectManager {
    allProjects = [];
    addProject(project) {
        this.allProjects.push(project);
    }

    // remove(project) {
    //    code here
    // }
}

export class Project {
    constructor(name, id = uuidv4()) {
        this.name = name;
        this.taskList = [];
        this.id = id;
    }

    getId() {
        return this.id; //returns project instance id
    }

    addProjectTask(task) {
        this.taskList.push(task);
    }
}

const projectList = new ProjectManager();

const defaultProject = new Project("Default");
projectList.addProject(defaultProject);
console.log(projectList);

export function openProjectModal() {
    const modal = document.querySelector("#project-modal");
    modal.showModal();
}

export function closeProjectModal() {
    const modal = document.querySelector("#project-modal");
    if (modal.open) {
        window.addEventListener("click", (e) => {
            if (e.target.id !== modal) {
                modal.close();
            }
        });
    }
    modal.close();
}

export function createProject() {
    const userInput = document.querySelector("#project-title");
    const newProject = new Project(userInput.value);
    projectList.addProject(newProject);
    displayProject();
}

export function displayProject() {
    const sidebarContent = document.querySelector("#sidebar-content");

    const currentProject = projectList.allProjects.length - 1;

    const projectDiv = document.createElement("div");
    const projectName = document.createElement("h3");
    projectName.textContent = projectList.allProjects[currentProject].name;
    projectDiv.append(projectName);

    const delBtn = document.createElement("button");
    delBtn.textContent = "-";
    projectDiv.append(delBtn);

    sidebarContent.append(projectDiv);
}
