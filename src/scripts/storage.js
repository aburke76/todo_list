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

export function importProjectsFromLocalStorage(project) {
    let allProjects = [];
    allProjects.push(JSON.parse(localStorage.getItem(project)));
    if (!allProjects) {
        return [];
    }

    allProjects = allProjects.map((obj) => {
        const project = new Project(obj.name);
        console.log(project);
        project.taskList = obj.taskList.map((task) => {
            const taskInProject = new Task(
                task.name,
                task.notes,
                task.dueDate,
                task.priority,
                task.taskId
            );
            return taskInProject;
        });
        return project;
    });
    return allProjects;
}
