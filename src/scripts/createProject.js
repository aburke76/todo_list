import "../styles/sidebar.css";

class Project {
    constructor(name) {
        this.name = name;
        this.list = [];
    }

    addToDont(task) {
        this.list.push(task);
    }

    remove(task) {
        const index = this.list.indexOf(task);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }
}

class Task {
    constructor(name, notes, dueDate, priority) {
        this.name = name;
        this.notes = notes;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const projectModal = document.querySelector("#project-modal");

export function addProject() {
    projectModal.showModal();
}
