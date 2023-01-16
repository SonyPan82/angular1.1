import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TodomscService } from 'src/app/todomsc.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  todos!: Todo[];
  sortKey: keyof Todo = 'content';
  inputTodo:string="";
  constructor(
    
  ) {}

  ngOnInit(): void {
    this.todos = []
  }

  deletTodo (id: number) {
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
  })
  this.inputTodo = "";
}

  

}
