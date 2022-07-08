import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';

import { Router } from "@angular/router";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  status = 'Veuillez vous connecter à votre compte';
  form: any = {};
  hide = true;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService,
                private tokenStorage: TokenStorageService,
                private router: Router) {}

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
        }
    }

    onSubmit(): void {
        this.authService.login(this.form).subscribe(data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);

            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.router.navigate(['home']).then(() => {
                 window.location.reload();
            });
        })
    }
}
