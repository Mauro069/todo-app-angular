import { Component, inject } from '@angular/core';
import { orderOptions } from 'src/app/config/options';
import { Orders } from 'src/app/interfaces/todos.interfaces';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-orders',
  templateUrl: './todo-orders.component.html',
  styleUrls: ['./todo-orders.component.scss'],
})
export class TodoOrdersComponent {
  private todosService = inject(TodosService);

  public selectedOrder: { value: Orders; name: string } = orderOptions[0];
  public orderOptions = orderOptions;

  orderByDate(selectedOrder: { value: Orders; name: string }) {
    this.selectedOrder = selectedOrder;
    this.todosService.orderByDate(selectedOrder.value);
  }
}
