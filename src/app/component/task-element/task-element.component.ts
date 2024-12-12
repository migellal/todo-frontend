import {Component, Input} from '@angular/core';
import {MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import { Task } from '../../model/task';

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

}
