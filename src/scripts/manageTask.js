import { projectList, Task, Project } from "./manageProject";
import { displayTask } from "./displayTask";

export function openTaskModal() {
    const modal = document.querySelector("#task-modal");
    modal.showModal();
}

export function closeTaskModal() {
    const modal = document.querySelector("#task-modal");
    modal.close();
}

export function createTask() {
    Project;
    const name = document.querySelector("#task-name");
    const notes = document.querySelector("#task-notes");
    const date = document.querySelector("#task-dd");
    const priority = document.querySelector("#task-priority");
    const projectDivs = document.querySelectorAll(".project-div");

    const newTask = new Task(
        name.value,
        notes.value,
        date.value,
        priority.value
    );

    projectDivs.forEach((el) => {
        let elId;
        if (el.classList.contains("active")) {
            elId = el.id;
        }
        console.log(projectList.allProjects);

        for (let i = 0; i < projectList.allProjects.length; i++) {
            let selectedProject;
            if (projectList.allProjects[i].id === elId) {
                selectedProject = i;
                projectList.allProjects[i].addTask(newTask);
            }
        }

        console.log(projectList.allProjects);
    });

    closeTaskModal();
    clearTaskModal();
    displayTask();
}

function clearTaskModal() {
    const name = document.querySelector("#task-name");
    const notes = document.querySelector("#task-notes");
    const date = document.querySelector("#task-dd");
    const priority = document.querySelector("#task-priority");
    name.value = null;
    notes.value = null;
    date.value = null;
    priority.value = null;
}
