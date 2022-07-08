import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.scss']
})
export class ViewMembersComponent implements OnInit {

  members=[
    {
      id:1,
      name:'Name Recycling',
      role:'COMP',
      ppPath:'/user.svg',
      showcasePath:'/login-illus.jpg',
    },

    {
      id:2,
      name:'Wafo Tokam Joël',
      role:'COL',
      ppPath:'/user.svg',
      showcasePath:'/login-illus.jpg',
    },
    {
      id:3,
      name:'Name Recycling',
      role:'COMP',
      ppPath:'/user.svg',
      showcasePath:'/login-illus.jpg',
    },

    {
      id:4,
      name:'Wafo Tokam Joël',
      role:'COL',
      ppPath:'/user.svg',
      showcasePath:'/login-illus.jpg',
    },
    {
      id:5,
      name:'Name Recycling',
      role:'COMP',
      ppPath:'/user.svg',
      showcasePath:'/login-illus.jpg',
    },

    {
      id:6,
      name:'Wafo Tokam Joël',
      role:'COL',
      ppPath:'/user.svg',
      showcasePath:'/login-illus.jpg',
    },

    {
      id:7,
      name:'Name Recycling',
      role:'COMP',
      ppPath:'/user.svg',
      showcasePath:'/login-illus.jpg',
    },

    {
      id:8,
      name:'Wafo Tokam Joël',
      role:'COL',
      ppPath:'/user.svg',
      showcasePath:'/login-illus.jpg',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
