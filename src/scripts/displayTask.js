import { projectList } from "./manageProject";
import { findTask, deleteTask } from "./manageTask";

export function displayTask() {
    const projectContent = document.querySelector("#project-content");

    const currentTask = findTask();
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    taskDiv.setAttribute("id", currentTask.taskId);

    const taskName = document.createElement("h3");
    const taskNotes = document.createElement("div");
    const taskDate = document.createElement("div");
    const taskPriority = document.createElement("div");
    const delBtn = document.createElement("button");
    delBtn.classList.add("task-del-btn");
    delBtn.setAttribute("id", currentTask.taskId);
    delBtn.innerHTML = "<i class='fa-solid fa-minus fa-2xl'></i>";

    taskName.textContent = currentTask.name;
    taskNotes.textContent = currentTask.notes;
    taskDate.textContent = currentTask.dueDate;
    taskPriority.textContent = currentTask.priority;

    taskDiv.append(taskName, taskNotes, taskDate, taskPriority, delBtn);
    projectContent.append(taskDiv);

    delBtn.addEventListener("click", () => {
        deleteTask(currentTask.taskId);
    });
}

// export function removeTask() {
//     const taskDivs = document.querySelectorAll(".task-div");
//     const currentTask = findTask();
//     taskDivs.forEach((el) => {
//         if (currentTask.taskId === el.id) {
//             el.remove();
//         }
//     });
// }
