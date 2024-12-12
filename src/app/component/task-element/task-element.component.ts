import {Component, Input} from '@angular/core';
import {MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {Task} from '../../model/task';
import {TodoRestService} from '../../service/todo-rest.service';

@Component({
  selector: 'app-task-element',
  imports: [
    MatFabButton,
    MatIcon
  ],
  templateUrl: './task-element.component.html',
  styleUrl: './task-element.component.css'
})
export class TaskElementComponent {

  @Input() task: Task | undefined;

  constructor(public todoRestService: TodoRestService) {
  }

  async deleteTask() {
    if (this.task && this.task.id) {
      await this.todoRestService.deleteTask(this.task.id);
    }
  }
}
