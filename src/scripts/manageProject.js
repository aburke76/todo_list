import { v4 as uuidv4 } from "uuid";
import { displayProject, showAllTasks } from "./displayProject";
import { createTask, findTaskList } from "./manageTask";

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
    constructor(name, active, id = uuidv4()) {
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

const defaultProject = new Project("Default", true);
projectList.addProject(defaultProject);

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
    displayProject();
    const userInputString = userInput.value;
    const newProjectString = JSON.stringify(newProject);
    localStorage.setItem(userInputString, newProjectString);
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
}

export function changeProjectTasksDisplay() {
    const projects = document.querySelectorAll(".project-name");
    const projectContent = document.querySelector("#project-content");
    projects.forEach((project) => {
        project.addEventListener("click", () => {
            //get rid of ACTIVE class and go by h3.id
        });
        while (projectContent.lastElementChild) {
            projectContent.removeChild(projectContent.lastElementChild);
        }
        showAllTasks();
    });
}

// export const importProjectsFromLocalStorage = (key) => {
//   const allProjects = JSON.parse(localStorage.getItem(key));
//   if(!allProjects){
//     // if there is nothing stored in localStorage,
//     return [];
//   }
//   // here, we have an array of generic objects.
//   //  we likely want to .map() over that array, and tell
//   //  them that they are `Project` objects instead
//   allProjects = allProjects.map( (genericObject) =>{
//     const project = /* can we create a Project, using data from that `genericOject`? */
//     project.tasks = /* can we create an array of Task objects from those generic objects in .tasks? */
//     return project;
//   })
//   // if we did that map right, we have an array of Project things!
//   return allProjects;
// }

// export const exportProjectsToLocalStorage = (key, thingToSave) =>
//     localStorage.setItem(key, JSON.stringify(thingToSave));
