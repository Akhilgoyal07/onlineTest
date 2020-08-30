import { ResultComponent } from './result/result.component';
import { ValidationComponent } from './validation/validation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignUpComponent},
  {path:"start", component:StartComponent},
  {path:"test/:qId", component:TestComponent},
  {path:"result", component:ResultComponent},
  {path:"validation", component:ValidationComponent},
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
