import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'latest-tricks',
  templateUrl: './latest-tricks.component.html',
  styleUrls: ['./latest-tricks.component.scss']
})
export class LatestTricksComponent implements OnInit {

  latestTricks=[
    {
      cat:'sample_cat',
      title: 'trick-a',
      imgPath:'/trick_sample.jpg',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      link:'/',
      publisherName: 'admin',
      date:'14/06/2022',

    },

    {
      cat:'sample_cat',
      title: 'trick-b',
      imgPath:'/trick_sample.jpg',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link:'/',
      publisherName: 'admin',
      date:'14/06/2022',

    },

    {
      cat:'sample_cat',
      title: 'trick-c',
      imgPath:'/trick_sample.jpg',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero exercitationem dolorum voluptatem sequi ',
      link:'/',
      publisherName: 'admin',
      date:'14/06/2022',

    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
