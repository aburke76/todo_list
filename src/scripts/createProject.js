import "../styles/sidebar.css";

class Project {
    constructor(name) {
        this.name = name;
    }
}

const projectModal = document.querySelector("#project-modal");

export function addProject() {
    projectModal.showModal();
}
