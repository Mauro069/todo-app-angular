import { Component, inject } from '@angular/core';
import { Todo } from './interfaces/todos.interfaces';
import { TodosService } from './services/todos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos?: Todo[];
  private todosService = inject(TodosService);
  private todosSubscription: Subscription;

  constructor() {
    this.todosSubscription = this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(todos)
    });
  }

  ngDestroy() {
    this.todosSubscription.unsubscribe();
  }
}
