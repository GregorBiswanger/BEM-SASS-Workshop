import { LocalStorageService } from './../local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoText = '';
  todos: string[] = [];

  constructor(private LocalStorageService: LocalStorageService) { }

  ngOnInit() {
    this.todos = this.LocalStorageService.loadTodos();
  }

  addTodo() {
    this.todos.push(this.todoText);
    this.todoText = '';

    this.LocalStorageService.saveTodos(this.todos);
  }

  removeTodo(todoIndex: number) {
    this.todos.splice(todoIndex, 1);

    this.LocalStorageService.saveTodos(this.todos);
  }

  clearAllTodos() {
    this.todos = [];

    this.LocalStorageService.saveTodos(this.todos);
  }
}