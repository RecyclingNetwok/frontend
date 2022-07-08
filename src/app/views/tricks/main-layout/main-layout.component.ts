import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  tricks=[
    {
      id:1,
      cat:'sample_cat',
      title: 'trick-a',
      imgPath:'/trick_sample.jpg',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      link:'/',
      publisherName: 'admin',
      date:'14/06/2022',

    },

    {
      id:2,
      cat:'sample_cat',
      title: 'trick-b',
      imgPath:'/trick_sample.jpg',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link:'/',
      publisherName: 'admin',
      date:'14/06/2022',

    },

    {
      id:3,
      cat:'sample_cat',
      title: 'trick-c',
      imgPath:'/trick_sample.jpg',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero exercitationem dolorum voluptatem sequi ',
      link:'/',
      publisherName: 'admin',
      date:'14/06/2022',

    },

    {
      id:4,
      cat:'sample_cat',
      title: 'trick-b',
      imgPath:'/trick_sample.jpg',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link:'/',
      publisherName: 'admin',
      date:'14/06/2022',

    },

    {
      id:5,
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
