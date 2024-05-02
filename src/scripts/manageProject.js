import { v4 as uuidv4 } from "uuid";
import {
    displayNewestProject,
    displayProject,
    displayActiveProject,
} from "./displayProject";
import { parse, format, parseISO } from "date-fns";
import { formatRelative } from "date-fns/formatRelative";

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
const today = new Date().toISOString().slice(0, 10);

export class Task {
    constructor(name, notes, dueDate = today, priority, taskId = uuidv4()) {
        this.name = name;
        this.notes = notes;
        this.dueDate = formatDate(dueDate);
        this.priority = priority;
        this.taskId = taskId;
    }
}

function formatDate(date) {
    return (date = format(parseISO(date), "MM/dd/yyyy"));
}

export const projectList = new ProjectManager();

const defaultProject = new Project("Default", true);
projectList.addProject(defaultProject);
// addToLocalStorage(defaultProject);

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
    clearProjectModal();
    closeProjectModal();
    // addToLocalStorage(newProject);
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

// export function addToLocalStorage(project) {
//     const index = projectList.allProjects.length;
//     const projectIndex = projectList.allProjects.indexOf(project);
//     localStorage.setItem(
//         `project_${index}`,
//         JSON.stringify(projectList.allProjects[projectIndex])
//     );
// }

// export function importFromLocalStorage() {

// }
