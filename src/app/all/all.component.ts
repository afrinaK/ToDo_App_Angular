import { Component, OnInit } from '@angular/core';
import {Hero} from '@app/hero';
import {Task} from '@app/task';
import {MockTask} from '@app/mock-task';
import {TaskService} from '@app/task.service';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  addElement = '';
  tasks: Task[] = [];


  ngOnInit() {
    // this.taskService.tasks$.subscribe(tasks => {
    //   this.tasks = tasks;
    // });
    this.tasks = this.taskService.tasks;
  }

  toggleTaskStatus(task: Task) {
    task.completed = !task.completed; // Toggle the 'completed' property
  }
  addFunction() {

  }


  openAddDialog() {

    if (this.addElement.trim() !== '') {
      // Create a new task object
      const newTask: Task = {
        id: this.tasks.length + 1,
        name: this.addElement,
        completed: false
      };

      this.tasks.push(newTask);
      this.taskService.tasks = this.tasks;

      this.addElement = '';
    }
  }

}
