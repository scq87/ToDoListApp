import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ToDoListsComponent } from './to-do-lists/to-do-lists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthService } from './services/auth.service';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { AddItemComponent } from './add-item/add-item.component';
import { AddListComponent } from './add-list/add-list.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { OverviewItemComponent } from './overview-item/overview-item.component';
import { TokenInterceptor } from './guard/token.interceptor';
import { EditListComponent } from './edit-list/edit-list.component';
import { ListsItemComponent } from './lists-item/lists-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ToDoListsComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    MainPageComponent,
    AddItemComponent,
    AddListComponent,
    EditItemComponent,
    OverviewItemComponent,
    EditListComponent,
    ListsItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  },
    AuthService,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
