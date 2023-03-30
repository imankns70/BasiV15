import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-card',
  template: `
  <div class="dount-card"
  [style.border]="donut.promo ? '2px solid red':'none'">
     <img 
      src="/assets/img/{{donut.icon}}.svg"
      [alt]="donut.name"
      class="donut-card-icon"/>
      <div>   
      <p class="donut-card-name">{{donut.name}}</p>
      <p class="donut-card-price">{{donut.price}}</p>
         </div>
      
  </div>
     
  
  `,
  styleUrls: ['./donut-card.component.scss']
})
export class DonutCardComponent {
  @Input() donut!: Donut
}
