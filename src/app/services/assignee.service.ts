import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AssigneeService {
    assignees$: Observable<string[]>;
    assigneesSubject: BehaviorSubject<string[]>;
    assignees: string[];
    constructor() { 
        this.assignees = [];
        this.assignees.push('Me');

        this.assigneesSubject = new BehaviorSubject(this.assignees);
        this.assignees$ = this.assigneesSubject.asObservable();
    }

    all() {
        return this.assignees;
    }

    add(name: string) {
        this.assignees.push(name);
        this.assigneesSubject.next(this.assignees);
    }
}