import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly STORAGE_KEY = 'tasks';

  // Check if Chrome extension API is available
  private get isExtension(): boolean {
    return typeof chrome !== 'undefined' && !!chrome.storage?.local;
  }

  async getTasks(): Promise<Task[]> {
    if (this.isExtension) {
      return new Promise((resolve) => {
        chrome.storage.local.get([this.STORAGE_KEY], (result) => {
          const tasks = (result[this.STORAGE_KEY] as Task[]) || [];
          // Convert date strings back to Date objects
          const parsedTasks = tasks.map((task: any) => ({
            ...task,
            createdAt: new Date(task.createdAt)
          }));
          resolve(parsedTasks);
        });
      });
    } else {
      // Fallback to localStorage for development
      const tasksJson = localStorage.getItem(this.STORAGE_KEY);
      if (tasksJson) {
        const tasks = JSON.parse(tasksJson) as any[];
        return tasks.map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt)
        }));
      }
      return [];
    }
  }

  async saveTasks(tasks: Task[]): Promise<void> {
    if (this.isExtension) {
      return new Promise((resolve) => {
        chrome.storage.local.set({ [this.STORAGE_KEY]: tasks }, () => {
          resolve();
        });
      });
    } else {
      // Fallback to localStorage for development
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
    }
  }

  async clearTasks(): Promise<void> {
    if (this.isExtension) {
      return new Promise((resolve) => {
        chrome.storage.local.remove([this.STORAGE_KEY], () => {
          resolve();
        });
      });
    } else {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }
}
