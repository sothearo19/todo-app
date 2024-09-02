import { Component } from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { DeleteTodoComponent } from '../delete-todo/delete-todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListItemComponent, AddTodoComponent, DeleteTodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todos = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build a Todo App', completed: false },
    { id: 3, title: 'Write Documentation', completed: true },
  ];

  get completedTodoCount(): number {
    return this.todos.filter((todo) => todo.completed).length;
  }

  addTodo(title: string): void {
    this.todos.push({ id: this.todos.length + 1, title, completed: false });
  }

  deleteTodo(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  updateTodo({ id, newTitle }: { id: number; newTitle: string }): void {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, newTitle };
      }
      return todo;
    });
  }
}
