import {Component} from '@angular/core';
import {MatFabButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {TodoRestService} from '../../service/todo-rest.service';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-create-task',
  imports: [
    MatFabButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatError,
    ReactiveFormsModule,
    MatIcon
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  titleFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  descriptionFormControl = new FormControl('');
  matcher = new TitleErrorStateMatcher();

  constructor(public todoRestService: TodoRestService) {
  }

  async createTask() {
    const title: string = this.titleFormControl.value || '';
    const description: string | undefined = this.descriptionFormControl.value || undefined;
    await this.todoRestService.createTask(title, description);
  }
}

export class TitleErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
