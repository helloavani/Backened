import { Routes } from '@angular/router';

import { TodoListComponent } from './Todos/Components/todo-list/todo-list.component';
import { TodoFormComponent } from './Todos/Components/todo-form/todo-form.component';
import { SignupComponent } from './signup/signup.component';

export const AppRoutes: Routes = [
  { path: 'todo', component: TodoListComponent },
  { path: 'create', component: TodoFormComponent },
  { path: 'signup', component: SignupComponent },
];
