import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
  <div>
    <donut-card [donut]="donuts[0]"></donut-card>
    <donut-card [donut]="donuts[1]"></donut-card>
    <donut-card [donut]="donuts[2]"></donut-card>
 
</div>  
  `,
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {

  donut!: Donut;
  donuts!: Donut[];

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'a4',
        name: 'jsut chocolate',
        icon: 'just-chocolate',
        price: 119,
        promo:false,
        description: 'For the pure chocolate.'
      },
      {
        id: 'as4',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 109,
        promo:false,
        description: 'Sticky Perfection.'
      }, {
        id: 'ass5',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 139,
        promo:true,
        description: 'Chocolate drizzled with caramel.'
      },

    ]
    this.donut = this.donuts[1];
  }

}
