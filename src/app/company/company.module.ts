import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from '../company/company.component';
import { CompanyBoardComponent } from './company-board/company-board.component';
import { SharedBoardModule } from '../shared-board/shared-board.module';
import { AppRoutingModule } from '../app-routing.module';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';



@NgModule({
  declarations: [
    CompanyComponent,
    CompanyBoardComponent,
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
export class CompanyModule { }
