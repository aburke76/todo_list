import { findTask, deleteTask, selectAllTasks } from "./manageTask";

export function displayTask() {
    const projectContent = document.querySelector("#project-content");

    const currentTask = findTask();
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    taskDiv.setAttribute("id", currentTask.taskId);

    const taskName = document.createElement("h3");
    const taskNotes = document.createElement("div");
    taskNotes.classList.add("notes");
    const taskDate = document.createElement("div");
    const taskPriority = document.createElement("div");

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fa-solid", "fa-check", "fa-2xl");
    checkBtn.append(checkIcon);
    checkBtn.setAttribute("id", currentTask.taskId);

    const delBtn = document.createElement("button");
    delBtn.classList.add("task-del-btn");
    const delIcon = document.createElement("i");
    delIcon.classList.add("fa-solid", "fa-minus", "fa-2xl");
    delBtn.append(delIcon);
    delBtn.setAttribute("id", currentTask.taskId);

    const btns = document.createElement("div");
    btns.classList.add("btns");

    taskName.textContent = currentTask.name;
    taskNotes.textContent = currentTask.notes;
    taskDate.textContent = currentTask.dueDate;
    taskPriority.textContent = currentTask.priority;

    taskPriority.setAttribute("id", taskPriority.textContent.toLowerCase());
    taskPriority.classList.add("priority");

    btns.append(checkBtn, delBtn);
    taskDiv.append(taskName, taskNotes, taskDate, taskPriority, btns);
    projectContent.append(taskDiv);

    checkBtn.addEventListener("click", () => {
        completeTask(taskDiv);
    });

    delBtn.addEventListener("click", () => {
        deleteTask(currentTask.taskId);
    });
}

export function displayAllTasks() {
    const currentTask = findTask();
    const taskList = selectAllTasks();
    const projectContent = document.querySelector("#project-content");
    taskList.forEach((task) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");
        taskDiv.setAttribute("id", task.taskId);
        const taskName = document.createElement("h3");
        const taskNotes = document.createElement("div");
        taskNotes.classList.add("notes");
        const taskDate = document.createElement("div");
        const taskPriority = document.createElement("div");

        const checkBtn = document.createElement("button");
        checkBtn.classList.add("check-btn");
        const checkIcon = document.createElement("i");
        checkIcon.classList.add("fa-solid", "fa-check", "fa-2xl");
        checkBtn.append(checkIcon);
        checkBtn.setAttribute("id", task.taskId);

        const delBtn = document.createElement("button");
        delBtn.classList.add("task-del-btn");
        const delIcon = document.createElement("i");
        delIcon.classList.add("fa-solid", "fa-minus", "fa-2xl");
        delBtn.append(delIcon);
        delBtn.setAttribute("id", task.taskId);

        const btns = document.createElement("div");
        btns.classList.add("btns");

        taskName.textContent = task.name;
        taskNotes.textContent = task.notes;
        taskDate.textContent = task.dueDate;
        taskPriority.textContent = task.priority;

        taskPriority.setAttribute("id", taskPriority.textContent.toLowerCase());
        taskPriority.classList.add("priority");

        btns.append(checkBtn, delBtn);
        taskDiv.append(taskName, taskNotes, taskDate, taskPriority, btns);
        projectContent.append(taskDiv);

        checkBtn.addEventListener("click", () => {
            completeTask(taskDiv);
        });

        delBtn.addEventListener("click", () => {
            deleteTask(task.taskId);
        });
    });
}

export function clearAllTasks() {
    const taskDivs = document.querySelectorAll(".task-div");
    taskDivs.forEach((el) => {
        el.remove();
    });
}

function completeTask(element) {
    if (element.classList.contains("task-complete")) {
        element.classList.remove("task-complete");
    } else {
        element.classList.add("task-complete");
    }
}
