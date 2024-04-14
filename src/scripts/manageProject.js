import { v4 as uuidv4 } from "uuid";

class ProjectManager {
    list = [];
    add(project) {
        this.list.push(project);
    }

    // remove(projectName) {
    //     let index =
    // }
}

export class Project {
    constructor(name, id) {
        this.name = name;
        this.taskList = [];
        this.id = id;
    }

    add(task) {
        this.taskList.push(task);
    }
}

const projectList = new ProjectManager();

const defaultProject = new Project("Default", uuidv4());
projectList.add(defaultProject);

const menardsProject = new Project("Menards", uuidv4());
projectList.add(menardsProject);
console.log(projectList);

export class Task {
    constructor(name, notes, dueDate, priority) {
        this.name = name;
        this.notes = notes;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const defaultTask = new Task(
    "Don't Cry",
    "keep it together, man",
    "04/09/2024",
    "High"
);
defaultProject.add(defaultTask);

const projectModal = document.querySelector("#project-modal");

// const closeBtn = document.querySelector("#closeProjectModal");
// export function closeProjectModal() {
//     closeBtn.addEventListener("click", () => {
//         projectModal.close();
//     });
// }

// export function addProject() {
//     projectModal.showModal();
// }

// export function displayProject() {
//     const content = document.querySelector("#sidebar-content");

//     const newestProject = projectList[projectList.length - 1];

//     const projectDiv = document.createElement("div");
//     const delBtn = document.createElement("button");
//     projectDiv.classList.add("project-div");
//     content.append(projectDiv);
//     const name = document.createElement("h3");
//     name.setAttribute("id", "project-name");
//     name.textContent = newestProject.name;
//     projectDiv.append(name);
//     delBtn.textContent = "-";
//     projectDiv.append(delBtn);

//     delBtn.addEventListener("click", () => {
//         newestProject.deleteProject();
//         projectDiv.remove();
//     });
// }

export function listNewProject() {
    const userInput = document.querySelector("#project-title");
    const newProject = new Project(userInput.value);
    newProject.addProject();
    // displayProject();
    // projectModal.close();
    // userInput.value = null;
}
