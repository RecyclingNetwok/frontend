import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { TricksComponent } from './views/tricks/tricks.component';
import { LoginComponent } from './views/login/login.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { LayoutModule } from '@angular/cdk/layout';
import { ContactComponent } from './views/contact/contact.component';
import { MainBannerComponent } from './views/home/main-banner/main-banner.component';
import { MembersComponent } from './views/home/members/members.component';
import { PartnershipComponent } from './views/home/partnership/partnership.component';
import { LatestTricksComponent } from './views/home/latest-tricks/latest-tricks.component';
import { TeamComponent } from './views/home/team/team.component';
import { LoginFormComponent } from './views/login/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './views/tricks/banner/banner.component';
import { MainLayoutComponent } from './views/tricks/main-layout/main-layout.component';
import { SidenavComponent } from './views/tricks/sidenav/sidenav.component';
import { PricingComponent } from './views/pricing/pricing.component';
import { ViewMembersComponent } from './views/view-members/view-members.component';
import { SignupFormComponent } from './views/sign-up/signup-form/signup-form.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { FloatFrnComponent } from './shared/float-frn/float-frn.component';
import { 
  PerfectScrollbarConfigInterface, 
  PerfectScrollbarModule, 
  PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SearchBannerComponent } from './shared/search-banner/search-banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

//Material modules
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { AdminModule } from './admin/admin.module';
import { CompanyModule } from './company/company.module';
import { SharedBoardModule } from './shared-board/shared-board.module';
import { HouseholdModule } from './household/household.module';
import { OrganizationModule } from './organization/organization.module';
import { CollectorModule } from './collector/collector.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TricksComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    MainBannerComponent,
    MembersComponent,
    PartnershipComponent,
    PricingComponent,
    LatestTricksComponent,
    TeamComponent,
    LoginFormComponent,
    BannerComponent,
    MainLayoutComponent,
    SidenavComponent,
    ViewMembersComponent,
    SignupFormComponent,
    FloatFrnComponent,
    SearchBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatButtonModule,
    LayoutModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AdminModule,
    CollectorModule,
    CompanyModule,
    HouseholdModule,
    OrganizationModule,
    SharedBoardModule
  ],
  providers: [
    authInterceptorProviders,
    {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
