import { Injectable } from '@angular/core';
import {Task} from '@app/task';
import {MockTask} from '@app/mock-task';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  // public tasks$: Observable<Task[]> = this.tasksSubject.asObservable();
  tasks: Task[] = [];

  constructor() {}

  // setTasks(tasks: Task[]): void {
  //   this.tasksSubject.next(tasks);
  // }
  //
  // clearCompletedAndCheckedTasks(): void {
  //   const currentTasks = this.tasksSubject.value;
  //   const updatedTasks = currentTasks.filter(task => !(task.completed || task.checked));
  //   this.tasksSubject.next(updatedTasks);
  // }

  deleteTaskById(taskId: number) {
    const index = this.tasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

}
