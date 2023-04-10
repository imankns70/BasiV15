import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-single',
  styleUrls: ['./donut-single.component.scss'],
  template: `<div>
    <donut-form [donut]="donut" (create)="onCreate($event)"></donut-form>
  </div>`,
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  constructor(private donutService: DonutService) { }
  ngOnInit(): void {
    const id = 'as4';
    this.donut = this.donutService.donuts.find((donut: Donut) => donut.id == id) || { name: '', icon: '', price: 0, description: '' };
  }

  onCreate(donut: Donut) {
    console.log('onCreate', donut)
  }
}
