import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  categories=[
    {id:1, name:"Plastique"},
    {id:2, name:"Papier bulle"},
    {id:3, name:"Dosettes de café"},
    {id:4, name:"Plastique compostable"},
    {id:5, name:"Tuyaux d'arrosage"},
    {id:6, name:"Sacs en plastique"},
    {id:7, name:"Ustensiles en plastique"},
    {id:8, name:"Filtres à eau"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
