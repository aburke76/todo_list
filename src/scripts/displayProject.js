import { selectAllTasks, deleteTask } from "./manageTask";
import {
    projectList,
    deleteProject,
    changeProjectTasksDisplay,
} from "./manageProject";

export function displayProject() {
    const sidebarContent = document.querySelector("#sidebar-content");

    const currentProject = projectList.allProjects.length - 1;
    const currentProjectId = projectList.allProjects[currentProject].id;

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    projectDiv.setAttribute("id", currentProjectId);
    const projectName = document.createElement("h3");
    projectName.textContent = projectList.allProjects[currentProject].name;
    if (projectName.textContent === "Default") {
        projectName.classList.add("active");
    }
    projectName.setAttribute("id", currentProjectId);
    projectName.classList.add("project-name");
    projectDiv.append(projectName);

    const delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.setAttribute("id", currentProjectId);
    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-minus", "fa-2xl");
    delBtn.append(i);
    projectDiv.append(delBtn);

    delBtn.addEventListener("click", () => {
        deleteProject(currentProjectId);
    });

    sidebarContent.append(projectDiv);
    changeProjectTasksDisplay();
}

export function showAllTasks() {
    const taskList = selectAllTasks();
    console.log(taskList);
    const projectContent = document.querySelector("#project-content");
    taskList.forEach((task) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");
        const taskName = document.createElement("h3");
        const taskNotes = document.createElement("div");
        const taskDate = document.createElement("div");
        const taskPriority = document.createElement("div");
        const delBtn = document.createElement("button");
        delBtn.classList.add("task-del-btn");
        const i = document.createElement("i");
        i.classList.add("fa-solid", "fa-minus", "fa-2xl");
        delBtn.append(i);
        delBtn.setAttribute("id", task.taskId);

        taskName.textContent = task.name;
        taskNotes.textContent = task.notes;
        taskDate.textContent = task.dueDate;
        taskPriority.textContent = task.priority;

        taskDiv.append(taskName, taskNotes, taskDate, taskPriority, delBtn);
        projectContent.append(taskDiv);

        delBtn.addEventListener("click", () => {
            deleteTask(currentTask.taskId);
        });
    });
}
