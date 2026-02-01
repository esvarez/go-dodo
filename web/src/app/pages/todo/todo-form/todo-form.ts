import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzSelectModule,
    NzButtonModule,
  ],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoFormComponent {
  projects = [
    { id: 1, name: 'Personal' },
    { id: 2, name: 'Work' },
    { id: 3, name: 'Side Project' },
  ];

  todoForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    effort: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    dueDate: new FormControl<Date | null>(null),
    projectId: new FormControl<number | null>(null),
  });

  onSubmit(): void {
    if (this.todoForm.valid) {
      console.log('Form submitted:', this.todoForm.value);
    } else {
      Object.values(this.todoForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity();
        }
      });
    }
  }
}
