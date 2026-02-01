import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { TodoFormComponent } from './todo-form/todo-form';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NzCardModule, TodoFormComponent],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class TodoComponent {}
