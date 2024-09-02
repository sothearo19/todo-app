import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  newTodoTitle: string = '';

  @Output() add = new EventEmitter<string>();

  onSubmit(): void {
    if (this.newTodoTitle.trim()) {
      this.add.emit(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }
}
