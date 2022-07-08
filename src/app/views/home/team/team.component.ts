import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team=[
    {
      name:'AVAÏKA JEAN MARCEL',
      role:'Backend Developer',
      profilePath:'/member_team-sample.svg',
    },

    {
      name:'WAFO TOKAM JOËL',
      role:'Frontend Developer',
      profilePath:'/member_team-sample.svg',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
