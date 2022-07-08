import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AnalyticsComponent } from './admin/analytics/analytics.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AccountComponent } from './admin/users/account/account.component';
import { AddComponent } from './admin/users/add/add.component';
import { BrowseComponent } from './admin/users/browse/browse.component';
import { UsersComponent } from './admin/users/users.component';
import { CollectorBoardComponent } from './collector/collector-board/collector-board.component';
import { CollectorModule } from './collector/collector.module';
import { CompanyBoardComponent } from './company/company-board/company-board.component';
import { CompanyComponent } from './company/company.component';
import { HouseholdBoardComponent } from './household/household-board/household-board.component';
import { HouseholdComponent } from './household/household.component';
import { OrganizationBoardComponent } from './organization/organization-board/organization-board.component';
import { OrganizationModule } from './organization/organization.module';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PricingComponent } from './views/pricing/pricing.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { TricksComponent } from './views/tricks/tricks.component';
import { ViewMembersComponent } from './views/view-members/view-members.component';

const routes: Routes = [
  {path:'',component: HomeComponent,},
  {path:'pricing',component: PricingComponent,},
  {path:'tricks',component: TricksComponent,},
  {path:'login',component: LoginComponent,},
  {path:'signup',component: SignUpComponent,},
  {path:'view-members',component: ViewMembersComponent,},
  {path:'contact',component: ContactComponent,},

  {path:'admin',component: AdminComponent, children:[
    {path: 'dashboard', component:DashboardComponent},
    {path: 'analytics', component:AnalyticsComponent},
    {path: 'users', component:UsersComponent, children:[
      {path: 'list', component: BrowseComponent},
      {path: 'account', component: AccountComponent},
      {path: 'add', component: AddComponent}
    ]},
  ]},

  {path:'company',component: CompanyComponent, children:[
    {path: 'dashboard', component:CompanyBoardComponent}
  ]},

  {path:'household',component: HouseholdComponent, children:[
    {path: 'dashboard', component:HouseholdBoardComponent}
  ]},

  {path:'collector',component: CollectorModule, children:[
    {path: 'dashboard', component:CollectorBoardComponent}
  ]},

  {path:'organization',component: OrganizationModule, children:[
    {path: 'dashboard', component:OrganizationBoardComponent}
  ]},

  {path:'**',redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
