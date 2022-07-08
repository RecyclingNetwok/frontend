import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'header-board',
  templateUrl: './header-board.component.html',
  styleUrls: ['./header-board.component.scss']
})
export class HeaderBoardComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showHhdContent = false;
  showCollContent = false;
  showOrgContent = false;
  showCompContent = false;
  showAdminContent = false;
  username!: string;
  email!: string;
  userType!: string;
  
  routesClosed:any[]=[
    {childrenPath: '/dashboard'},
  ];
  
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(public router: Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.username = user.username;
      this.email = user.email;
      this.userType = user.userType;

      this.showAdminContent = this.roles.includes('Administrateur');
      this.showHhdContent= this.roles.includes('Menage');
      this.showCollContent= this.roles.includes('Collecteur');
      this.showOrgContent = this.roles.includes('Organisation');
      this.showCompContent = this.roles.includes('Company');
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
