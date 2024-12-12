import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom, Observable} from 'rxjs';
import {Task} from '../model/task';

@Injectable({
  providedIn: 'root',
})

export class TodoRestService {
  private apiUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  async createTask(title: string, description: string | undefined) {
    const task = new Task(-1, title, description);
    await firstValueFrom(this.http.post(this.apiUrl, task));
  }

  async deleteTask(id: number) {
    await firstValueFrom(this.http.delete(`${this.apiUrl}/${id}`));
  }
}
