import { Component} from '@angular/core';
import { Todo } from './model/Todo';
import { TodomscService } from './todomsc.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todos!: Todo[];

  // constructor( 
   // private todomscService: TodomscService,

    //@Inject('EvalAngular') public title: string
  //) {
 //   this.todos = TodomscService.getTodo();
 //// }
///}


}