import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  user: User = new User;
  status = 'Please fill in the form to register';
  hide = true;
  isSuccessful = false;
  errorMessage = '';
  roles!: any[];
 
  constructor(private authService: AuthService, 
              private router: Router) {}

  ngOnInit(): void {
    this.authService.getAllRoles().subscribe(
      (data : any)=>{
        data.forEach((obj: { selected: any; }) => obj.selected = false);
        this.roles = data;
      }
    )
  }

  onSubmit(form: NgForm): void {
    var x = this.roles.filter(x => x.selected).map(y => y.name);
    console.log(form.value, x);
    var x = this.roles.filter(x => x.selected).map(y => y.name);
    this.authService.register(form.value, x).subscribe(
      (data : any) => {
        console.log(data);
        this.isSuccessful = true;
        this.router.navigate(['login']);
      }
    );
  }

  updateSelectedRoles(index: any) {
    this.roles[index].selected = !this.roles[index].selected;
  }
}
