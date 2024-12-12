import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TodoRestService} from './service/todo-rest.service';
import {CreateTaskComponent} from './component/create-task/create-task.component';
import {Task} from './model/task';
import {TaskElementComponent} from './component/task-element/task-element.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateTaskComponent, TaskElementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: Task[] = [];

  constructor(public dataService: TodoRestService) {
  }

  ngOnInit() {
    this.dataService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(tasks);
    });
  }
}
