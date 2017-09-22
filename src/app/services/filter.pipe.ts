import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from "./todo.model";

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(value: Todo[], arg: string): any {
        return value.filter (t=> {
            if (!arg || arg === 'All')
                return true;
            if (arg === 'Complete')
                return t.done === true;
            if (arg === 'Incomplete')
                return t.done === false;
        });
    }
}