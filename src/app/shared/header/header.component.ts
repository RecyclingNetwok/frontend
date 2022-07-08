import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'fastrn';
  private roles: string[] = [];
  isLoggedIn = false;
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
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
