import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'float-frn',
  templateUrl: './float-frn.component.html',
  styleUrls: ['./float-frn.component.scss']
})
export class FloatFrnComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void { }

}
