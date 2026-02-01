import { Component } from '@angular/core';
import { TodoFormComponent } from './todo-form/todo-form';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoFormComponent],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class TodoComponent {}
