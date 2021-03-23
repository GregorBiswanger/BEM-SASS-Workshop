import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TodosComponent } from './todos/todos.component';
import { BemGuideComponent } from './bem-guide/bem-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TodosComponent,
    BemGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
