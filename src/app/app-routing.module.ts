import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './user/home/home.component';
import { OtpLoginComponent } from './component/otp-login/otp-login.component';
import { OtpVerfyComponent } from './component/otp-login/otp-verfy/otp-verfy.component';
import { LoginGuard } from './login.guard';
import {LoGuard} from './lo.guard';
import { GroupsListViewComponent } from './user/groups-list-view/groups-list-view.component';
import { GroupEnterViewComponent } from './user/group-enter-view/group-enter-view.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[LoginGuard]},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent,canActivate:[LoGuard]},
  {path:'otp_login',component:OtpLoginComponent},
  {path:'otp_verify',component:OtpVerfyComponent},
  {path:'group-list-view-doc',component:GroupsListViewComponent},
  {path:'group-enter-view',component:GroupEnterViewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
