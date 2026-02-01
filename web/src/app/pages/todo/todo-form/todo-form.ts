import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzRadioModule,
    NzCardModule,
  ],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoFormComponent {
  cancel = output<void>();

  expectedTimeOptions = [
    { value: 10, label: '10 min' },
    { value: 15, label: '15 min' },
    { value: 45, label: '>45 min' },
  ];

  effortOptions = [
    { value: 1, label: '🟢 Baja' },
    { value: 2, label: '🟡 Media' },
    { value: 3, label: '🔴 Alta' },
  ];

  todoForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    effort: new FormControl<number>(2),
    expectedTime: new FormControl<number>(15),
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

  onCancel(): void {
    this.todoForm.reset({
      name: '',
      effort: 2,
      expectedTime: 15,
    });
    this.cancel.emit();
  }
}
