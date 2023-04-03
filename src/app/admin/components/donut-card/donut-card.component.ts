import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-card',
  template: `
 
     <img 
      src="/assets/img/{{donut.icon}}.svg"
      [alt]="donut.name"
      class="donut-card-icon"/>
      <div>   
      <p class="donut-card-name">{{donut.name}}
        <ng-container [ngSwitch]="donut.promo">
          <span class="donut-card-label">
            <ng-template [ngSwitchCase]="'new'">New</ng-template>
            <ng-template [ngSwitchCase]="'limited'">Limited</ng-template>
            <ng-template ngSwitchDefault>nothing special...</ng-template>

          </span>
          <!-- <span *ngSwitchCase="'new'" class="donut-card-label">New</span>
          <span *ngSwitchCase="'limited'" class="donut-card-label">Limited</span>
          <span *ngSwitchDefault class="donut-card-label">nothing special...</span> -->
        </ng-container>
      </p>
      <p class="donut-card-price">{{donut.price /100  | currency :'GBP'}}</p>
         </div>      
  
     
  
  `,
  styleUrls: ['./donut-card.component.scss']
})
export class DonutCardComponent {
  @Input() donut!: Donut
}
