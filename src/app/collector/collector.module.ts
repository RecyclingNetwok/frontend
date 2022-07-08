import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectorBoardComponent } from './collector-board/collector-board.component';
import { CollectorComponent } from '../collector/collector.component';



@NgModule({
  declarations: [
    CollectorBoardComponent,
    CollectorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CollectorModule { }
