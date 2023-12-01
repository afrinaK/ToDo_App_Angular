import { Component, OnInit } from '@angular/core';
import {Task} from '@app/task';
import {MockTask} from '@app/mock-task';
import {TaskService} from '@app/task.service';


@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  // private addElement: any;

  constructor(private taskService: TaskService) { }

  addElement = '';
  tasks: Task[] ;

  ngOnInit() {
    this.tasks = this.taskService.tasks.filter(task => !task.completed);
  }
  toggleTaskStatus(task: Task) {
    task.completed = !task.completed; // Toggle the 'completed' property
  }
  addFunction() {

  }


  openAddDialog() {

    if (this.addElement.trim() !== '') {
      // Creating a new task object
      const newTask: Task = {
        id: this.tasks.length + 1,
        name: this.addElement,
        completed: false
      };

      // Adding to the task array
      this.tasks.push(newTask);
      this.taskService.tasks = this.tasks;

      // Clear the input field
      this.addElement = '';
    }
  }




}
