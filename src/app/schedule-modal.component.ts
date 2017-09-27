
import { Component } from '@angular/core';
import { TodoService } from "./services/todo.service";
import { Todo } from "./services/todo.model";
import { FormGroup, FormBuilder } from "@angular/forms"; 
import { AssigneeService } from "./services/assignee.service";
import { TaskService } from "./services/task.service";
import { Observable } from "rxjs/Observable";


@Component({
    selector: 'todo-list',
    templateUrl: './schedule-modal.component.html'
})

export class ScheduleModalComponent {

    nextid: number;
    todos: Todo[];
    assignees: Observable<string[]>;
    tasks: Observable<string[]>;
    filterOption: string;
    addTaskForm: FormGroup;
    assigneeName: string;
    taskName: string;

    constructor() { 
        this.todos = [];

   
          this.todos.push({
              id: 1,
              name: "Take out garbage",
              dateCreated: new Date('2017-05-01'),
              dateComplete: null,
              daysToComplete: null,
              assignee: "Me",
              done: false
          });
          this.todos.push({
              id: 2,
              name: "Do dishes",
              dateCreated: new Date('2017-07-11'),
              dateComplete: null,
              daysToComplete: null,
              assignee: "Me",
              done: false
          });
          this.todos.push({
              id: 3,
              name: "Make bed",
              dateCreated: new Date('2017-08-20'),
              dateComplete: null,
              daysToComplete: null,
              assignee: "Me",
              done: false
          });
  
    }

    complete (todo: Todo) {
        todo.dateComplete = new Date();
        todo.done = true;
        todo.daysToComplete = Math.floor(((todo.dateComplete.getTime() - todo.dateCreated.getTime()) / (1000 * 60 * 60 * 24) ));
    }

    remove(todo: Todo) {
        let index = this.todos.findIndex(t=>t.id === todo.id);
        if (index >= 0) {
            this.todos.splice(index, 1);
        }
    }

    all(): Todo[] {
        return this.todos;
    }

    find(id:number): Todo {
        return this.todos.find(t=>t.id == id);
    }

}