import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'

import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button'

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './user/home/home.component';
import { OtpLoginComponent } from './component/otp-login/otp-login.component';
import { OtpVerfyComponent } from './component/otp-login/otp-verfy/otp-verfy.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatGridListModule} from '@angular/material/grid-list';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ModalComponent } from './user/home/modal/modal.component';
import { GroupsListViewComponent } from './user/groups-list-view/groups-list-view.component';
import { GroupEnterViewComponent } from './user/group-enter-view/group-enter-view.component';
import { LlComponent } from './ll/ll.component';
import { CommentComponent } from './user/group-enter-view/comment/comment.component';
import { SubCommentComponent } from './user/group-enter-view/comment/sub-comment/sub-comment.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    OtpLoginComponent,
    OtpVerfyComponent,
    ModalComponent,
    GroupsListViewComponent,
    GroupEnterViewComponent,
    LlComponent,
    CommentComponent,
    SubCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatButtonToggleModule,
    NgxMatFileInputModule,
    MatGridListModule
    
    ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
