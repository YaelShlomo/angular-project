import { Injectable } from '@angular/core';
import { Task } from '../app/models/task.model'

//@Injectable()
export class TaskService {

    private taskList: Task[] = [
        { id: 1, name: "task1",done: false }, 
        { id: 2, name: "task2",done: false }, 
        { id: 3, name: "task3",done: false }, 
    ];
    
    getTask(): Task[] {
        return this.taskList
    }

}