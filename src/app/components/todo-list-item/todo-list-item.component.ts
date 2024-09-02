// src/app/components/todo-list-item/todo-list-item.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
  editable = false;

  @Input() todo!: { id: number; title: string; completed: boolean };
  @Output() update = new EventEmitter<{ id: number; newTitle: string }>();
  @Output() delete = new EventEmitter<number>();

  onCheckboxChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.todo.completed = input.checked;
  }

  onUpdate(): void {
    this.update.emit({ id: this.todo.id, newTitle: this.todo.title });
    this.editable = false;
  }

  onDelete(): void {
    this.delete.emit(this.todo.id);
  }
}
