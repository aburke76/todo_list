import { v4 as uuidv4 } from "uuid";
import { displayProject } from "./displayProject";
import { createTask } from "./manageTask";

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

// const defaultTask = new Task("A", "B", "01/01/1998", "High");

export const projectList = new ProjectManager();

const defaultProject = new Project("Default");
projectList.addProject(defaultProject);
// defaultProject.addTask(defaultTask);

export function openProjectModal() {
    const modal = document.querySelector("#project-modal");
    modal.showModal();
}

export function closeProjectModal() {
    const modal = document.querySelector("#project-modal");
    modal.close();
}

function clearProjectModal() {
    const userInput = document.querySelector("#project-title");
    userInput.value = null;
}

export function createProject() {
    const userInput = document.querySelector("#project-title");
    const newProject = new Project(userInput.value);
    projectList.addProject(newProject);
    displayProject();
    clearProjectModal();
    closeProjectModal();
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
