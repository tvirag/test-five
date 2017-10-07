      
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ModalModule, Modal } from 'ng-bootstrap-modal';
import { ScheduleModalComponent } from "./schedule-modal.component";
import { TasksModalComponent } from './tasks-modal.component.';
import { AssigneesModalComponent } from './assignees-modal.component';
import { FilterPipe } from './services/filter.pipe';
import { TodoService } from "./services/todo.service";
import { ReactiveFormsModule } from '@angular/forms';



const modals: Modal[] = [
  { name: 'schedule', component: ScheduleModalComponent},
  { name: 'tasks', component: TasksModalComponent},
  { name: 'assignees', component: AssigneesModalComponent}
];

@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    ModalModule.forRoot(modals)
  ],
  declarations: [ AppComponent, TasksModalComponent, AssigneesModalComponent, ScheduleModalComponent, FilterPipe ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]

})
export class AppModule { }