// Todo Item Interface
interface TodoItem {
    id: number;
    task: string;
    isEditing: boolean;
}

class TodoApp {
    private todoList: TodoItem[] = [];
    private todoInput: HTMLInputElement = document.getElementById('todo-input') as HTMLInputElement;
    private todoListElement: HTMLUListElement = document.getElementById('todo-list') as HTMLUListElement;
    private addButton: HTMLButtonElement = document.getElementById('add-button') as HTMLButtonElement;
    private nextId: number = 1;

    constructor() {
        // Add event listener to the Add button
        this.addButton.addEventListener('click', () => this.addTodo());
        this.render();
    }

    // Add new Todo
    addTodo() {
        const task = this.todoInput.value.trim();  // Get the value from the input box
        if (task) {
            this.todoList.push({ id: this.nextId++, task: task, isEditing: false });
            this.todoInput.value = '';  // Clear the input field
            this.render();  // Render the updated list
        }
    }

    // Edit Todo
    editTodo(id: number) {
        this.todoList = this.todoList.map(todo =>
            todo.id === id ? { ...todo, isEditing: true } : todo
        );
        this.render();  // Re-render after editing
    }

    // Save the edited Todo
    saveTodo(id: number) {
        const input = document.getElementById(`edit-input-${id}`) as HTMLInputElement;
        const updatedTask = input.value.trim();
        if (updatedTask) {
            this.todoList = this.todoList.map(todo =>
                todo.id === id ? { ...todo, task: updatedTask, isEditing: false } : todo
            );
            this.render();  // Re-render after saving
        }
    }

    // Delete Todo
    deleteTodo(id: number) {
        this.todoList = this.todoList.filter(todo => todo.id !== id);
        this.render();  // Re-render after deleting
    }

    // Render Todo List
    render() {
        this.todoListElement.innerHTML = ''; // Clear the current list

        this.todoList.forEach(todo => {
            const li = document.createElement('li');
            li.id = `todo-${todo.id}`;

            if (todo.isEditing) {
                li.innerHTML = `
                    <input type="text" id="edit-input-${todo.id}" value="${todo.task}" />
                    <button onclick="todoApp.saveTodo(${todo.id})">Save</button>
                    <button onclick="todoApp.deleteTodo(${todo.id})">Delete</button>
                `;
            } else {
                li.innerHTML = `
                    ${todo.task}
                    <button onclick="todoApp.editTodo(${todo.id})">Edit</button>
                    <button onclick="todoApp.deleteTodo(${todo.id})">Delete</button>
                `;
            }

            this.todoListElement.appendChild(li);
        });
    }
}

// Initialize the app
const todoApp = new TodoApp();
