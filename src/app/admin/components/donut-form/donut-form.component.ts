import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donut-form',
  styleUrls: ['./donut-form.component.scss'],
  template: `
  <form class="donut-form" #form="ngForm">
    <label>
      <span>Name</span>
      <input type="text" name="name" class="input" required ngModel #name="ngModel" />
      <p>valid:{{name.valid}}</p>
      <p>invalid:{{name.invalid}}</p>
      <p>touched:{{name.touched}}</p>
      <p>untouched:{{name.untouched}}</p>
      <p>pristine:{{name.pristine}}</p>
      <p>dirty:{{name.dirty}}</p>
    </label>
    <label>
      <span>Icon</span>
      <select name="icon" class="input input--select" required ngModel> 
        <option *ngFor="let icon of icons" [ngValue]="icon | uppercase">{{icon}}</option>
      </select>
    </label>
    <label>
      <span>Price</span>
      <input  type="number" name="price" class="input" required ngModel  />
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
    <label>
      <span>Description</span>
      <textarea
       name="description"
       class="input input--textarea" required
       ngModel></textarea>
    </label>
    <pre>
      {{form.valid | json}}
    </pre>
  </form>
  `,
})
export class DonutFormComponent implements OnInit {

  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'glazed-fudge',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon',
  ]
  ngOnInit(): void {

  }
}
