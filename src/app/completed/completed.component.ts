import { Component, OnInit } from '@angular/core';

import {Hero} from '@app/hero';
import {Task} from '@app/task';
import {MockTask} from '@app/mock-task';
import {TaskService} from '@app/task.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  addElement = '';
  tasks: Task[] ;

  ngOnInit() {
    this.tasks = this.taskService.tasks.filter(task => task.completed);
    // new array with filter elements from task array
  }

  toggleTaskStatus(task: Task) {
    task.completed = !task.completed; // Toggle the 'completed' property
  }
  // deleteTask(task: Task) {
  //   // Filter out the selected task and update the tasks list
  //   this.tasks = this.tasks.filter(t => t !== task);
  // }


  // deleteTask(task: Task) {
  //   this.tasks = this.tasks.filter(t => t.id !== task.id);
  // }

  deleteTask(task: Task) {

    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);

    }

  }

  // deleteTask(task: Task) {
  //   this.taskService.deleteTaskById(task.id);
  // }




  // clear(task: Task) {
  //   // this.tasks = this.tasks.filter(task => !task.completed);
  //   // this.tasks = [];
  //   this.tasks = this.tasks.filter(t => t !== task);
  // }

  clear(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  // clear(task: Task) {
  //   const index = this.tasks.findIndex(t => t.id === task.id);
  //   if (index !== -1) {
  //     this.tasks.splice(index, 1);
  //     // Update the tasks array to trigger Angular change detection
  //     this.tasks = [...this.tasks];
  //   }
  // }



}
