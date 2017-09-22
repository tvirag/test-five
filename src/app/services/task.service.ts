import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class TaskService {
    tasks$: Observable<string[]>;
    tasksSubject: BehaviorSubject<string[]>;
    tasks: string[];
    constructor() { 
        this.tasks = [];
        this.tasks.push('Sweep');
        this.tasks.push('Cook');
        this.tasks.push('Clean');
        this.tasks.push('Wash');

        this.tasksSubject = new BehaviorSubject(this.tasks);
        this.tasks$ = this.tasksSubject.asObservable();
    }

    all() {
        return this.tasks;
    }

    add(name: string) {
        this.tasks.push(name);
        this.tasksSubject.next(this.tasks);
    }
}