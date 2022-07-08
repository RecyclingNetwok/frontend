import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent implements OnInit {

  partners=[
  /*Université Douala*/{
    logoPath:'/logo_frn.svg',
    logoName:'ud_logo',
  },
  
  /*Université Douala*/{
    logoPath:'/logo_frn.svg',
    logoName:'ud_logo',
  },
  
  /*Université Douala*/{
    logoPath:'/logo_frn.svg',
    logoName:'ud_logo',
  },

  /*Université Douala*/{
    logoPath:'/logo_frn.svg',
    logoName:'ud_logo',
  },

  /*IUT Douala*/{
    logoPath:'/logo_frn.svg',
    logoName:'iut_logo',
  },
  
  /*Université Douala*/{
    logoPath:'/logo_frn.svg',
    logoName:'ud_logo',
  },

  /*FRN*/{
    logoPath:'/logo_frn.svg',
    logoName:'frn_logo',
  },

  /*FRN*/{
    logoPath:'/logo_frn.svg',
    logoName:'frn_logo',
  },

  /*FRN*/{
    logoPath:'/logo_frn.svg',
    logoName:'frn_logo',
  },

  /*FRN*/{
    logoPath:'/logo_frn.svg',
    logoName:'frn_logo',
  },

  /*FRN*/{
    logoPath:'/logo_frn.svg',
    logoName:'frn_logo',
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
