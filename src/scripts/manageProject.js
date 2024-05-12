import { v4 as uuidv4 } from "uuid";
import {
    displayNewestProject,
    displayProject,
    displayActiveProject,
} from "./displayProject";
import { addToLocalStorage, importProjectsFromLocalStorage } from "./storage";

class ProjectManager {
    allProjects = importProjectsFromLocalStorage();
    addProject(project) {
        this.allProjects.push(project);
        addToLocalStorage(project);
    }

    removeProject(id) {
        this.allProjects = this.allProjects.filter((el) => {
            return el.id !== id;
        });
    }
}

export class Project {
    constructor(name, active = false, id = uuidv4()) {
        this.name = name;
        this.taskList = [];
        this.active = active;
        this.id = id;
    }

    addTask(task) {
        task.projectId = this.id;
        this.taskList.push(task);
    }

    removeTask(id) {
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].taskId === id) {
                this.taskList.splice(i, 1);
            }
        }
    }
}

export class Task {
    constructor(name, notes, dueDate, priority, taskId = uuidv4()) {
        this.name = name;
        this.notes = notes;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskId = taskId;
    }
}
export const projectList = new ProjectManager();

if (localStorage.length == 0) {
    const defaultProject = new Project("Default", true);
    projectList.addProject(defaultProject);
}

export function openProjectModal() {
    const modal = document.querySelector("#project-modal");
    modal.showModal();
}

export function closeProjectModal() {
    const modal = document.querySelector("#project-modal");
    modal.close();
}

export function clearProjectModal() {
    const userInput = document.querySelector("#project-title");
    userInput.value = null;
}

export function createProject() {
    const userInput = document.querySelector("#project-title");
    const newProject = new Project(userInput.value);
    projectList.addProject(newProject);
    addToLocalStorage(newProject);
    clearProjectModal();
    closeProjectModal();
    displayNewestProject();
    displayProject();
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
    displayActiveProject();
}

export function allProjectsInactive() {
    projectList.allProjects.forEach((project) => {
        project.active = false;
    });
}
