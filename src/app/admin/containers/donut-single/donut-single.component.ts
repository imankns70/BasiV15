import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-single',
  styleUrls: ['./donut-single.component.scss'],
  template: `<div>
    <donut-form [donut]="donut" 
    (create)="onCreate($event)"
    (update)="onUpdate($event)"
    (delete)="onDelete($event)"
    ></donut-form>
  </div>`,
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  constructor(private donutService: DonutService) { }
  ngOnInit(): void {

    this.donutService
      .readOne('D3AyBpF')
      .subscribe((donut: Donut) => (this.donut = donut));

  }

  onCreate(donut: Donut) {
    this.donutService.create(donut).subscribe((donut: Donut) => console.log('Created Sucessfully'));
  }

  onUpdate(donut: Donut) {
    this.donutService.update(donut).subscribe({
      next:(donut: Donut) => console.log('Update Sucessfully'),
      error:(err)=> console.log('onUpdate error...',err)
    });
  }

  onDelete(donut: Donut) {
    this.donutService.delete(donut)
    .subscribe(()=> console.log('deleted Sucessfully'));
  }
}
