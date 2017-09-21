import { Component } from '@angular/core';
import { ModalService } from "ng-bootstrap-modal";


@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private modalService:ModalService) {
    
  }
  open(name: string) {
    this.modalService.open(name);
  }
}