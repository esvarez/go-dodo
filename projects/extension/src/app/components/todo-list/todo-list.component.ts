import { Component, signal, computed, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageService, Task } from '../../services/storage.service';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoList implements OnInit {
  tasks = signal<Task[]>([]);
  newTaskTitle = signal('');
  nextId = 1;

  // Computed signal for remaining tasks count
  remainingTasksCount = computed(() => {
    return this.tasks().filter(task => task.completed === false).length;
  });

  constructor(private storageService: StorageService) {
    // Auto-save tasks whenever they change
    effect(() => {
      const currentTasks = this.tasks();
      if (currentTasks.length > 0 || this.nextId > 1) {
        this.storageService.saveTasks(currentTasks);
      }
    });
  }

  async ngOnInit() {
    // Load tasks from storage on component initialization
    const savedTasks = await this.storageService.getTasks();
    if (savedTasks.length > 0) {
      this.tasks.set(savedTasks);
      // Set nextId to be one more than the highest existing ID
      const maxId = Math.max(...savedTasks.map(task => task.id), 0);
      this.nextId = maxId + 1;
    }
  }

  addTask() {
    const title = this.newTaskTitle().trim();
    if (title) {
      this.tasks.update(tasks => [
        ...tasks,
        {
          id: this.nextId++,
          title,
          completed: false,
          createdAt: new Date()
        }
      ]);
      this.newTaskTitle.set('');
    }
  }

  toggleTask(taskId: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  deleteTask(taskId: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== taskId));
  }
}
