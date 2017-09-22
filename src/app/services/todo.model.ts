export interface Todo {
    id: number;
    name: string;
    done: boolean;
    dateCreated: Date;
    dateComplete: Date;
    daysToComplete: number;
    assignee: string;
}