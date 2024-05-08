import { displayProject } from "./displayProject";
import { projectList, Project } from "./manageProject";
import { Task } from "./manageProject";
import { displayAllTasks } from "./displayTask";

export function addProjectToLocalStorage(project) {
    const index = projectList.allProjects.length;
    const projectIndex = projectList.allProjects.indexOf(project);
    localStorage.setItem(
        `project_${index}`,
        JSON.stringify(projectList.allProjects[projectIndex])
    );
}

export function importProjectsFromLocalStorage() {
    let allProjects = [];
    for (let i = 0; i < localStorage.length; i++) {
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    if (!allProjects) {
        return [];
    }

    console.log(allProjects);

    allProjects = allProjects.map((obj) => {
        const project = new Project(obj.name);
        console.log(project);
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
