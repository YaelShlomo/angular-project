import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input()
  task!: Task 

  constructor() { }

  @Output()
  onSaveTask: EventEmitter<Task> = new EventEmitter();

  saveTask() {
    this.task.name = "new task name from details"
    this.onSaveTask.emit(this.task);
  }

  ngOnInit(): void {
  }

}
