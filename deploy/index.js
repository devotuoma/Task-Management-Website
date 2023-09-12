class Task {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = "To Do"; // Default status
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const taskTitleInput = document.getElementById("task-title");
    const taskDescriptionInput = document.getElementById("task-description");
    const taskDueDateInput = document.getElementById("task-due-date");
    const addTaskButton = document.getElementById("add-task");

    addTaskButton.addEventListener("click", function () {
        const title = taskTitleInput.value.trim();
        const description = taskDescriptionInput.value.trim();
        const dueDate = taskDueDateInput.value;

        if (title !== "" && dueDate !== "") {
            const task = new Task(title, description, dueDate);
            createTaskElement(task);
            clearTaskInputs();
        } else {
            alert("Please fill in both task title and due date.");
        }
    });

    function createTaskElement(task) {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        const titleElement = document.createElement("h3");
        titleElement.textContent = task.title;
        taskItem.appendChild(titleElement);

        if (task.description) {
            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = task.description;
            taskItem.appendChild(descriptionElement);
        }

        const dueDateElement = document.createElement("p");
        dueDateElement.textContent = `Due Date: ${task.dueDate}`;
        taskItem.appendChild(dueDateElement);

        const statusElement = document.createElement("p");
        statusElement.textContent = `Status: ${task.status}`;
        statusElement.classList.add("task-status");
        taskItem.appendChild(statusElement);

        // Add event listeners for changing task status
        statusElement.addEventListener("click", function () {
            changeTaskStatus(task, statusElement);
        });

        taskList.appendChild(taskItem);
    }

    function changeTaskStatus(task, statusElement) {
        switch (task.status) {
            case "To Do":
                task.status = "In Progress";
                break;
            case "In Progress":
                task.status = "Completed";
                break;
            case "Completed":
                task.status = "To Do";
                break;
            default:
                break;
        }
        statusElement.textContent = `Status: ${task.status}`;
    }

    function clearTaskInputs() {
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
        taskDueDateInput.value = "";
    }
});
