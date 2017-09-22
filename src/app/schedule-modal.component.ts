
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

    todos: Todo[];
    assignees: Observable<string[]>;
    tasks: Observable<string[]>;
    filterOption: string;
    addTaskForm: FormGroup;
    assigneeName: string;
    taskName: string;


    }


}