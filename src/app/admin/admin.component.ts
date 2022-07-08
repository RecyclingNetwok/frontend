import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { TokenStorageService } from '../services/token-storage.service';

interface ManagementNode {
  name: string;
  icon: string;
  children?: ManagementNode[];
}

const TREE_DATA: ManagementNode[] = [
  /*User*/{
    icon: 'person',
    name: 'Utilisateurs',
    children: [
      {
        icon: '',
        name: 'Compte'
      }, 
      {
        icon: '',
        name: 'Liste'
      }, 
      {
        icon: '',
        name: 'Ajouter'
      },
      {
        icon: '',
        name: 'Editer'
      },
    ],
  },
  /*Household*/{
    icon: 'person',
    name: 'Ménages',
    children: [
      {
        icon: '',
        name: 'Liste'
      }, 
      {
        icon: '',
        name: 'Ajouter'
      },
    ],
  },
  /*Collector*/{
    icon: 'person',
    name: 'Collecteurs',
    children: [
      {
        icon: '',
        name: 'Liste'
      }, 
      {
        icon: '',
        name: 'Ajouter'
      },
    ],
  },
  /*Company*/{
    icon: 'person',
    name: 'Entreprises',
    children: [
      {
        icon: '',
        name: 'Liste'
      }, 
      {
        icon: '',
        name: 'Ajouter'
      },
    ],
  },
  /*Organizations*/{
    icon: 'person',
    name: 'Organisations',
    children: [
      {
        icon: '',
        name: 'Liste'
      }, 
      {
        icon: '',
        name: 'Ajouter'
      },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  icon: string;
  level: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private _transformer = (node: ManagementNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      icon: node.icon,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  private roles: string[] = [];
  isLoggedIn = false;
  email!: string;
  username!: string;
  userType!: string;

  generalItems: any[] = [
    {
      icon:'dashboard',
      path:'/dashboard',
      title:'Tableau de bord', 
    }, 
    {
      icon:'bar_chart',
      path:'/analytics',
      title:'Analytique', 
    }, 
  ];
  count = Object.keys(this.generalItems).length;

  constructor(public router: Router, private tokenStorageService: TokenStorageService) {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles;
  
        this.email = user.email;
        this.username = user.username;
        this.userType = user.userType;

        console.log(this.count);
      }
   }

   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
