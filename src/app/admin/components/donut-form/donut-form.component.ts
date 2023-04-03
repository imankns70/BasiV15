import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donut-form',
  styleUrls: ['./donut-form.component.scss'],
  template: `
  <form class="donut-form" #form="ngForm">
    <label>
      <span>Name</span>
      <input  type="text" name="name" class="input" ngModel  />
    </label>
    <label>
      <span>Price</span>
      <input  type="number" name="price" class="input" ngModel  />
    </label>
    <div class="donut-form-radios">
      <p class="donut-form-radios-label">Promo:</p>
      <label>
        <input type="radio" name="promo" [value]="undefined" ngModel>
        <span>None</span>
      </label>
      <label>
        <input type="radio" name="promo" value="new" ngModel>
        <span>New</span>
      </label>
      <label>
        <input type="radio" name="promo" value="limited" ngModel>
        <span>Limited</span>
      </label>
    </div>
    <pre>
      {{form.value | json}}
    </pre>
  </form>
  `,
})
export class DonutFormComponent implements OnInit {

  ngOnInit(): void {

  }
}
