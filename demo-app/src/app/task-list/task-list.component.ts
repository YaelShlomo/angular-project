import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private _taskService: TaskService) { }

  //taskService: TaskService = new TaskService();

  //taskList: Task[] = this.taskService.getTask();

  title: string = 'Task List title';

  changeTaskListTitle() {
    return "title changed";
  }

  deleteTask(id: number) {
    var item = this.taskList.filter(x => x.id == id)[0];
    var indexToDelete = this.taskList.indexOf(item);
    this.taskList.splice(indexToDelete, 1);
  }

  selectedTask!: Task;

  editTask(taskToEdit: Task) {
    this.selectedTask = taskToEdit;
  }

  addNewTask() {
    this.selectedTask = new Task()
  }

  addTaskToList(taskToSave: Task) {
    this.taskList.push(taskToSave);
  }

  ngOnInit(): void {
  }

}
