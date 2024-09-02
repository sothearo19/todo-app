// src/app/components/todo-list-item/todo-list-item.component.ts
import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements AfterViewChecked {
  @ViewChild('editableParagraph') editableParagraph!: ElementRef;
  @Input() todo!: { id: number; title: string; completed: boolean };
  @Output() update = new EventEmitter<{ id: number; newTitle: string }>();
  @Output() delete = new EventEmitter<number>();

  editable = false;

  ngAfterViewChecked() {
    if (this.editable) {
      this.focusParagraph();
    }
  }

  focusParagraph() {
    const element = this.editableParagraph.nativeElement;
    element.focus();

    // Move the caret to the end of the text
    const selection = window.getSelection();
    const range = document.createRange();

    range.selectNodeContents(element); // Selects the contents of the element
    range.collapse(false); // Collapses the range to the end of the content

    selection?.removeAllRanges(); // Clears existing selections
    selection?.addRange(range); // Applies the new range
  }

  onCheckboxChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.todo.completed = input.checked;
  }

  onUpdate(): void {
    this.editable = !this.editable;
    if (this.editable) {
      this.update.emit({
        id: this.todo.id,
        newTitle: this.editableParagraph.nativeElement.textContent,
      });
    }
  }

  onDelete(): void {
    this.delete.emit(this.todo.id);
  }
}
