import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-list',
  template: `
  <div>
    <div class="donut-list-actions">   
    <a routerLink="new" class="btn btn--green">
      New Donut
    <img height="24" src="/assets/icon/icons8-plus.svg"/>
  </a>
 </div>
    <ng-container *ngIf="donuts?.length else nothing">
      
  <donut-card 
  *ngFor="let donut of donuts; trackBy:trackById"
  [donut]="donut"></donut-card>
   
    </ng-container>
  
    <ng-template #nothing>
      no donuts here ...
    </ng-template>
</div>  
  `,
  styleUrls: ['./donut-list.component.scss']
})
export class DonutListComponent implements OnInit {

  constructor(private donutService: DonutService) { }

  donuts!: Donut[];
  trackById(index: number, value: Donut) {
    return value.id;
  }
  ngOnInit(): void {
    this.donutService.
      read()
      .subscribe((dounts: Donut[]) => (this.donuts = dounts));

  }

}
