var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var TodoApp = /** @class */ (function () {
    function TodoApp() {
        var _this = this;
        this.todoList = [];
        this.todoInput = document.getElementById('todo-input');
        this.todoListElement = document.getElementById('todo-list');
        this.addButton = document.getElementById('add-button');
        this.nextId = 1;
        // Add event listener to the Add button
        this.addButton.addEventListener('click', function () { return _this.addTodo(); });
        this.render();
    }
    // Add new Todo
    TodoApp.prototype.addTodo = function () {
        var task = this.todoInput.value.trim();
        if (task) {
            this.todoList.push({ id: this.nextId++, task: task, isEditing: false });
            this.todoInput.value = '';
            this.render();
        }
    };
    // Edit Todo
    TodoApp.prototype.editTodo = function (id) {
        this.todoList = this.todoList.map(function (todo) {
            return todo.id === id ? __assign(__assign({}, todo), { isEditing: true }) : todo;
        });
        this.render();
    };
    // Save the edited Todo
    TodoApp.prototype.saveTodo = function (id) {
        var input = document.getElementById("edit-input-".concat(id));
        var updatedTask = input.value.trim();
        if (updatedTask) {
            this.todoList = this.todoList.map(function (todo) {
                return todo.id === id ? __assign(__assign({}, todo), { task: updatedTask, isEditing: false }) : todo;
            });
            this.render();
        }
    };
    // Delete Todo
    TodoApp.prototype.deleteTodo = function (id) {
        this.todoList = this.todoList.filter(function (todo) { return todo.id !== id; });
        this.render();
    };
    // Render Todo List
    TodoApp.prototype.render = function () {
        var _this = this;
        this.todoListElement.innerHTML = '';
        this.todoList.forEach(function (todo) {
            var li = document.createElement('li');
            li.id = "todo-".concat(todo.id);
            if (todo.isEditing) {
                li.innerHTML = "\n                    <input type=\"text\" id=\"edit-input-".concat(todo.id, "\" value=\"").concat(todo.task, "\" />\n                    <button onclick=\"todoApp.saveTodo(").concat(todo.id, ")\">Save</button>\n                    <button onclick=\"todoApp.deleteTodo(").concat(todo.id, ")\">Delete</button>\n                ");
            }
            else {
                li.innerHTML = "\n                    ".concat(todo.task, "\n                    <button onclick=\"todoApp.editTodo(").concat(todo.id, ")\">Edit</button>\n                    <button onclick=\"todoApp.deleteTodo(").concat(todo.id, ")\">Delete</button>\n                ");
            }
            _this.todoListElement.appendChild(li);
        });
    };
    return TodoApp;
}());
// Initialize the app
var todoApp = new TodoApp();
//# sourceMappingURL=TodoList.js.map