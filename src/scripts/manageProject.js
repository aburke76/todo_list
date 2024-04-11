export const projectList = [];

export class Project {
    constructor(name) {
        this.name = name;
        this.taskList = [];
    }

    addProject() {
        projectList.push(this);
    }

    deleteProject() {
        const index = projectList.indexOf(this);
        if (index > -1) {
            projectList.splice(index, 1);
        }
    }

    addTask(task) {
        this.taskList.push(task);
    }

    deleteTask() {
        const index = this.taskList.indexOf(this);
        if (index > -1) {
            this.taskList.splice(index, 1);
        }
    }
}

export class Task {
    constructor(name, notes, dueDate, priority) {
        this.name = name;
        this.notes = notes;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const defaultProject = new Project("Default");

const defaultTask = new Task(
    "Don't Cry",
    "keep it together, man",
    "04/09/2024",
    "High"
);

defaultProject.addProject();
defaultProject.addTask(defaultTask);
console.log(projectList);

const projectModal = document.querySelector("#project-modal");

const closeBtn = document.querySelector("#closeProjectModal");
export function closeProjectModal() {
    closeBtn.addEventListener("click", () => {
        projectModal.close();
    });
}

export function addProject() {
    projectModal.showModal();
}

export function displayProject() {
    const content = document.querySelector("#sidebar-content");

    const newestProject = projectList[projectList.length - 1];

    const projectDiv = document.createElement("div");
    const delBtn = document.createElement("button");
    projectDiv.classList.add("project-div");
    content.append(projectDiv);
    const name = document.createElement("h3");
    name.setAttribute("id", "project-name");
    name.textContent = newestProject.name;
    projectDiv.append(name);
    delBtn.textContent = "-";
    projectDiv.append(delBtn);

    delBtn.addEventListener("click", () => {
        newestProject.deleteProject();
        projectDiv.remove();
    });
}

export function listNewProject() {
    const userInput = document.querySelector("#project-title");
    const newProject = new Project(userInput.value);
    newProject.addProject();
    displayProject();
    projectModal.close();
    userInput.value = null;
}

//task handler

// const taskModal = document.querySelector("#task-modal");

// export function createTask() {
//     taskModal.showModal();
// }

// export function listTask() {
//     const taskName = document.querySelector("#project-title");
//     const taskNotes = document.querySelector("#task-notes");
//     const taskDd = document.querySelector("#task-dd");
//     const taskPriority = document.querySelector("#task-priority");
//     const currentProjectTitle =
//         document.querySelector("#project-h3").textContent;

//     const newTask = new Task(
//         taskName.value,
//         taskNotes.value,
//         taskDd.value,
//         taskPriority.value
//     );

//     const currentProject = projectList.indexOf(currentProjectTitle);
//     console.log(projectList);
//     console.log(currentProject);

//     taskModal.close();
//     console.log(newTask);
//     projectList[0].addTask(newTask);
//     console.log(projectList[0]);
// }
