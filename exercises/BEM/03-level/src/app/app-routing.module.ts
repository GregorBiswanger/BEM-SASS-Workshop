import { BemGuideComponent } from './bem-guide/bem-guide.component';
import { TodosComponent } from './todos/todos.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'bem-gruide', component: BemGuideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
