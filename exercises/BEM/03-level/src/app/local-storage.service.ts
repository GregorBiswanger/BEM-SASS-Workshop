import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  loadTodos(): string[] {
    const result = '["Layout in BEM", "Homepage in BEM", "Todos in BEM", "BEM Guide in BEM"]';
    return JSON.parse(localStorage.getItem('todos') || result);
  }

  saveTodos(todos: string[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
