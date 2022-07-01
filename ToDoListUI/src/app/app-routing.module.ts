import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import {ToDoListsComponent} from './to-do-lists/to-do-lists.component';
import {AddItemComponent} from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { OverviewItemComponent } from './overview-item/overview-item.component';
import { AddListComponent } from './add-list/add-list.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { ListsItemComponent } from './lists-item/lists-item.component';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '',component: MainPageComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard],children: [
      {path: 'to-do-lists', component: ToDoListsComponent},
      {path: 'to-do-item', component: ToDoItemComponent},
      {path: 'add-item', component: AddItemComponent},
      {path: 'add-list', component: AddListComponent},
      {path: 'edit-item/:id', component: EditItemComponent},
      {path: 'edit-list/:id', component: EditListComponent},
      {path: 'list-item/:id', component: ListsItemComponent},
      {path: 'overview-item/:id', component: OverviewItemComponent},
      {path: 'to-do-lists', component: ToDoListsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 