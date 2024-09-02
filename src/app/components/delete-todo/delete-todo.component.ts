import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-todo',
  standalone: true,
  imports: [],
  templateUrl: './delete-todo.component.html',
  styleUrl: './delete-todo.component.scss',
})
export class DeleteTodoComponent {
  @Input() length: number = 0;
  @Output() delete = new EventEmitter();

  onDelete(): void {
    this.delete.emit();
  }
}
