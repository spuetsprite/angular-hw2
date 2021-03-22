import { Component } from '@angular/core'

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
///ต้องเขียน function ใน class
export class TodoListComponent{
    tasks: string[] = ['Coffee','Tea'];
    task!: string;

    addTask(){
        this.tasks.push(this.task)
    }

}
