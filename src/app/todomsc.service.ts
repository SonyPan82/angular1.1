import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodosComponent } from './todoapp/todos/todos.component';
import { Todo } from './model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodomscService {
  static getTodo: any;

  constructor() { }
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL = 'http://localhost:8080/rest/';

  constructor(private http: HttpClient) {}

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL + 'todos').pipe(
      map((Todo) => {
        return Todo.map((Todo) => {
          return new (Todo.content,Todo.completed);
        });
      })
    );
  }
}
