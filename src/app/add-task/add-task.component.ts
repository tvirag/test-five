import { Component, OnInit } from '@angular/core';
import { TaskService } from "../services/task.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: 'add-task',
    templateUrl: 'add-task.component.html'
})

export class AddTaskComponent implements OnInit {
    tasks: string[];
    addTaskForm: FormGroup;
    constructor(private taskService: TaskService, private formBuilder:FormBuilder) {
        this.tasks = this.taskService.tasks;
        this.addTaskForm = this.initForm();
     }

     initForm() {
         return this.formBuilder.group({
            name: ['']
         });
     }

     add(name:string) {
         this.taskService.add(name);
         this.addTaskForm = this.initForm();

     }

    ngOnInit() { }
}