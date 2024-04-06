class Project {
    constructor(name) {
        this.name = name;
    }
}

const projectModal = document.querySelector("#project-modal");

export function addProject() {
    projectModal.showModal();
}

export function listNewProject() {
    const projectTitle = document.querySelector("#project-title");
    const sidebarContent = document.querySelector("#sidebar-content");
    const projectDiv = document.createElement("div");
    const h3 = document.createElement("h3");
    const newProject = new Project(projectTitle.value);

    sidebarContent.append(projectDiv);
    h3.textContent = newProject.name;
    projectDiv.append(h3);

    projectModal.close();
    console.log(newProject);

    projectTitle.value = "";
}
