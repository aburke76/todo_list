import { v4 as uuidv4 } from "uuid";
import { displayProject } from "./displayProject";

class ProjectManager {
    allProjects = [];
    addProject(project) {
        this.allProjects.push(project);
    }

    removeProject(id) {
        this.allProjects = this.allProjects.filter((el) => {
            return el.id !== id;
        });
    }
}

export class Project {
    constructor(name, id = uuidv4()) {
        this.name = name;
        this.taskList = [];
        this.id = id;
    }

    get getProjectId() {
        return this.id; //returns project instance id
    }

    addTask(task) {
        this.taskList.push(task);
    }
}

export class Task {
    constructor(name, notes, dueDate, priority, id = uuidv4()) {
        this.name = name;
        this.notes = notes;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id;
    }
}

export const projectList = new ProjectManager();

const defaultProject = new Project("Default");
projectList.addProject(defaultProject);
defaultProject.addTask("Don't Cry", "keep it together, man", "01/01/1999");
console.log(projectList.allProjects);

export function openProjectModal() {
    const modal = document.querySelector("#project-modal");
    modal.showModal();
}

export function closeProjectModal() {
    const modal = document.querySelector("#project-modal");
    modal.close();
}

export function createProject() {
    const userInput = document.querySelector("#project-title");
    const newProject = new Project(userInput.value);
    projectList.addProject(newProject);
    displayProject();
    closeProjectModal();
    userInput.value = null;
    console.log(projectList.allProjects);
}

export function deleteProject(projectId) {
    const projectDivs = document.querySelectorAll(".project-div");
    projectList.allProjects.forEach((project) => {
        if (projectId === project.id) {
            projectList.removeProject(project.id);
        }
    });
    projectDivs.forEach((element) => {
        if (projectId === element.id) {
            element.remove();
        }
    });
    //console.log(projectList.allProjects);
}
