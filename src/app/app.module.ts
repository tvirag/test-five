      
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ModalModule, Modal } from 'ng-bootstrap-modal';
import { ScheduleModalComponent } from "./schedule-modal.component";
import { TasksModalComponent } from './tasks-modal.component.';
import { AssigneesModalComponent } from './assignees-modal.component';


const modals: Modal[] = [
  { name: 'schedule', component: ScheduleModalComponent},
  { name: 'tasks', component: TasksModalComponent},
  { name: 'assignees', component: AssigneesModalComponent}
];

@NgModule({
  imports: [ 
    BrowserModule,
    ModalModule.forRoot(modals)
  ],
  declarations: [ AppComponent, TasksModalComponent, AssigneesModalComponent, ScheduleModalComponent ],
  bootstrap: [AppComponent]

})
export class AppModule { }