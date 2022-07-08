import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBoardComponent } from './header-board/header-board.component';
import { FooterBoardComponent } from './footer-board/footer-board.component';

import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderBoardComponent,
    FooterBoardComponent
  ],
  exports:[
    HeaderBoardComponent,
    FooterBoardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    AppRoutingModule, 
    MatMenuModule
  ]
})
export class SharedBoardModule { }
