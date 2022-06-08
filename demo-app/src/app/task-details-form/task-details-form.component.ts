import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-details-form',
  templateUrl: './task-details-form.component.html',
  styleUrls: ['./task-details-form.component.css']
})
export class TaskDetailsFormComponent implements OnInit {

  private _task!: Task;

  get task(): Task {
    return this._task;
  }

  @Input()
  set task(value: Task) {
    this._task = value;
    if(this.task) {
      this.taskForm.controls["id"].setValue(this.task.id);
      this.taskForm.controls["name"].setValue(this.task.name);
      this.taskForm.controls["done"].setValue(this.task.done);
    }
  }
  @Output()
  onSaveTask: EventEmitter<Task> = new EventEmitter();

  taskForm: FormGroup = new FormGroup({
    "id": new FormControl("", Validators.required),
    "name": new FormControl("", [Validators.required, Validators.minLength(2)]),
    "done": new FormControl(""),
    "address": new FormGroup({
      "cityId": new FormControl()
    })
  })

  saveTask() {
    this.task = this.taskForm.value;
    // this.task.name = this.taskForm.constructor['name'].value;
    this.onSaveTask.emit(this.task);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
