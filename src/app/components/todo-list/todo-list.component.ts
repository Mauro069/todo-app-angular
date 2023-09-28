import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/todos.interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() todoList?: Todo[] | null;
}
