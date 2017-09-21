      
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ModalModule, Modal } from 'ng-bootstrap-modal';
import { FirstModalComponent } from "./first-modal.component";
import { SecondModalComponent } from './second-modal.component.';
import { ThirdModalComponent } from './third-modal.component';


const modals: Modal[] = [
  { name: 'first', component: FirstModalComponent},
  { name: 'second', component: SecondModalComponent},
  { name: 'third', component: ThirdModalComponent}
];

@NgModule({
  imports: [ 
    BrowserModule,
    ModalModule.forRoot(modals)
  ],
  declarations: [ AppComponent, FirstModalComponent, SecondModalComponent, ThirdModalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }