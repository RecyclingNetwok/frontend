import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-banner',
  templateUrl: './search-banner.component.html',
  styleUrls: ['./search-banner.component.scss']
})
export class SearchBannerComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
