import { projectList, Project } from "./manageProject";
import { Task } from "./manageProject";

export function addToLocalStorage(project) {
    const index = projectList.allProjects.length;
    const projectIndex = projectList.allProjects.indexOf(project);
    localStorage.setItem(
        projectList.allProjects[projectIndex].id,
        JSON.stringify(projectList.allProjects[projectIndex])
    );
}

export function importProjectsFromLocalStorage() {
    let allProjects = [];
    for (let i = 0; i < localStorage.length; i++) {
        allProjects.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    if (!allProjects) {
        return [];
    }
    allProjects = allProjects.map((obj) => {
        const project = new Project(obj.name, obj.active, obj.id);
        project.taskList = obj.taskList.map((task) => {
            const projectTask = new Task(
                task.name,
                task.notes,
                task.dueDate,
                task.priority,
                task.taskId
            );
            return projectTask;
        });
        return project;
    });
    return allProjects;
}

export function removeFromLocalStorage(key) {
    for (let i = 0; i < localStorage.length; i++) {
        if (key === JSON.parse(localStorage.getItem(localStorage.key(i))));
        {
            localStorage.removeItem(key);
        }
    }
}
