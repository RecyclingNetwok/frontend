import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

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
      name:'Avaïka Nametissa Jean Marcel',
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
      name:'AVAÏKA NAMETISSA JEAN MARCEL',
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
