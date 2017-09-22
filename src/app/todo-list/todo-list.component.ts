import { Component } from '@angular/core';
import { TodoService } from "../services/todo.service";
import { Todo } from "../services/todo.model";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AssigneeService } from "../services/assignee.service";
import { TaskService } from "../services/task.service";
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
   todos: Todo[];
   assignees: Observable<string[]>;
   tasks: Observable<string[]>;
   filterOption: string;
   addTaskForm: FormGroup;
   assigneeName: string;
   taskName: string;
   
   constructor(private todoService: TodoService, private assigneeService: AssigneeService, private taskService: TaskService, private formBuilder: FormBuilder) {
      this.todos = this.todoService.all();
      this.assignees = this.assigneeService.assignees$;
      this.tasks = this.taskService.tasks$;
      this.filterOption = 'All';
      this.addTaskForm = this.initForm2();
   }
   
   initForm1() {
    this.assigneeName = '';
   return this.formBuilder.group({
     name: ['']
   });
  }
  selectAssignee(name: string) {
     this.assigneeName = name;
  }

  initForm2() {
    this.taskName = '';
   return this.formBuilder.group({
     name: ['']
   });
  }
  selectTask(name: string) {
     this.taskName = name;
  }



   add (taskName: string, assigneeName: string) {
    this.todoService.addByName(taskName, assigneeName);
    this.addTaskForm = this.initForm1(),this.initForm2();
  }

   complete(item:Todo) {
      this.todoService.complete(item);
   }

   remove (item:Todo) {
      this.todoService.remove(item);
   }
}
