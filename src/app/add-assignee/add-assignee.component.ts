import { Component, OnInit } from '@angular/core';
import { AssigneeService } from "../services/assignee.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: 'add-assignee',
    templateUrl: 'add-assignee.component.html'
})

export class AddAssigneeComponent implements OnInit {
    assignees: string[];
    addAssigneeForm: FormGroup;
    constructor(private assigneeService: AssigneeService, private formBuilder:FormBuilder) {
        this.assignees = this.assigneeService.assignees;
        this.addAssigneeForm = this.initForm();
     }

     initForm() {
         return this.formBuilder.group({
            name: ['']
         });
     }

     add(name:string) {
         this.assigneeService.add(name);
         this.addAssigneeForm = this.initForm();

     }

    ngOnInit() { }
}