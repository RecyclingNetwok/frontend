import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from '../organization/organization.component';
import { OrganizationBoardComponent } from './organization-board/organization-board.component';



@NgModule({
  declarations: [
    OrganizationComponent,
    OrganizationBoardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrganizationModule { }
