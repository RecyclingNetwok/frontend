import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin/admin.component';
import { AppRoutingModule } from '../app-routing.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { UsersComponent } from './users/users.component';

import {MatTreeModule} from '@angular/material/tree';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SharedBoardModule } from '../shared-board/shared-board.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './users/account/account.component';
import { BrowseComponent } from './users/browse/browse.component';
import { AddComponent } from './users/add/add.component';





@NgModule({
  declarations: [
    AdminComponent,
    AnalyticsComponent,
    UsersComponent,
    DashboardComponent,
    AccountComponent,
    BrowseComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedBoardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule, 
    MatRippleModule,
    MatButtonToggleModule,
    MatTreeModule 
  ],
})
export class AdminModule { }
