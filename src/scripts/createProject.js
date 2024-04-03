class Project {
    constructor(name) {
        this.name = name;
    }
}

export function addProject() {
    const projectModal = document.querySelector("#project-modal");
    projectModal.showModal();
}
