import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseholdComponent } from '../household/household.component';
import { HouseholdBoardComponent } from './household-board/household-board.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { AppRoutingModule } from '../app-routing.module';
import { SharedBoardModule } from '../shared-board/shared-board.module';



@NgModule({
  declarations: [
    HouseholdComponent,
    HouseholdBoardComponent
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
  ]
})
export class HouseholdModule { }
