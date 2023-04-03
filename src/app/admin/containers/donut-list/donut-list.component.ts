import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
  <div>
    <ng-container *ngIf="donuts.length else nothing">
      
  <donut-card 
  *ngFor="let donut of donuts; trackBy:trackById"
  [donut]="donut"></donut-card>
   
    </ng-container>
  
    <ng-template #nothing>
      no donuts here ...
    </ng-template>
</div>  
  `,
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {

  donut!: Donut;
  donuts!: Donut[];
  trackById(index: number, value: Donut) {
    return value.id;
  }
  ngOnInit(): void {
    this.donuts = [
      {
        id: 'a4',
        name: 'jsut chocolate',
        icon: 'just-chocolate',
        price: 119,
        promo: 'new',
        description: 'For the pure chocolate.'
      },
      {
        id: 'as4',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 109,
        promo: 'limited',
        description: 'Sticky Perfection.'
      },
       {
        id: 'ass5',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 139,
        promo: 'new',
        description: 'Chocolate drizzled with caramel.'
      },
       {
        id: 'a78s5',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 179,     
        description: 'for the soar advocate.'
      },
       {
        id: 'asa1s5',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 169,       
        description: 'Delicious lucious lemon.'
      },

    ]
    this.donut = this.donuts[2];
  }

}
