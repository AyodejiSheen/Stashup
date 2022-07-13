import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
// import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashComponent } from './userdash/userdash.component';
import { WithdrawfundComponent } from './withdrawfund/withdrawfund.component';
import { JoingroupComponent } from './joingroup/joingroup.component';
import { ProfileComponent } from './profile/profile.component';
import { CreatestashComponent } from './createstash/createstash.component';
import { DetailsComponent } from './details/details.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { GroupcodeComponent } from './groupcode/groupcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { ProcessingComponent } from './processing/processing.component';
import { AddfundComponent } from './addfund/addfund.component';
import { JoinedComponent } from './joined/joined.component';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    UserdashComponent,
    WithdrawfundComponent,
    JoingroupComponent,
    ProfileComponent,
    CreatestashComponent,
    DetailsComponent,
    NotificationsComponent,
    GroupcodeComponent,
    LoadingComponent,
    ProcessingComponent,
    AddfundComponent,
    JoinedComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
