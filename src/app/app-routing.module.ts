import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfundComponent } from './addfund/addfund.component';
import { CreatestashComponent } from './createstash/createstash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGuard } from './gaurd/dashboard.guard';
import { GroupcodeComponent } from './groupcode/groupcode.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { JoinedComponent } from './joined/joined.component';
import { JoingroupComponent } from './joingroup/joingroup.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProcessingComponent } from './processing/processing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashComponent } from './userdash/userdash.component';
import { WithdrawfundComponent } from './withdrawfund/withdrawfund.component';

const routes: Routes = [

  {path:'', component:HomeComponent},

  {path:'login', component:LoginComponent},

  {path:'registration', component:SignupComponent},

  {path:'processing', component:ProcessingComponent},

  {path:'loading', component:LoadingComponent},

  {path:'dashboard', canActivate:[DashboardGuard], component:DashboardComponent, children:[
    {path:'', component:UserdashComponent},
    {path:'add-fund', component:AddfundComponent},
    {path:'withdraw-fund', component:WithdrawfundComponent},
    {path:'join-group', component:JoingroupComponent},
    {path:'profile', component:ProfileComponent},
    {path:'create-group', component:CreatestashComponent},
    {path:'group-code', component:GroupcodeComponent},
    {path:'notifications', component:NotificationsComponent},
    {path:'groups', component:GroupsComponent},
    {path:'processing', component:ProcessingComponent},
    {path:'joined', component:JoinedComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
