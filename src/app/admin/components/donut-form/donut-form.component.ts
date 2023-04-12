import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-form',
  styleUrls: ['./donut-form.component.scss'],
  template: `
  <ng-container *ngIf="donut; else loading">
  <form class="donut-form" #form="ngForm">
    <label>
      <span>Name</span>
      <input
      type="text"
          name="name"
          class="input"
          required
          minlength="5"
          [ngModel]="donut?.name"
          [ngModelOptions]="{ updateOn: 'blur' }"
          #name="ngModel"
      /> 
      
    <ng-container *ngIf="name.invalid && name.touched">
      <div class="donut-form-error" *ngIf="name.errors?.['minlength']">
        minimum length of a name is 5!</div>
        <div class="donut-form-error" *ngIf="name.errors?.['required']">
        Name is required</div>
      </ng-container>
    </label>
    <label>
      <span>Icon</span>
      <select
       name="icon"
        class="input input--select"
         required
         [ngModel]="donut?.icon"
         #icon="ngModel"> 
        <option *ngFor="let icon of icons" [ngValue]="icon">{{icon}}</option>
      </select>
      <ng-container *ngIf="icon.invalid && icon.touched"> 
        <div class="donut-form-error" *ngIf="icon.errors?.['required']">
        Icon is required</div>
      </ng-container>
    </label>
    <label>
      <span>Price</span>
      <input 
       type="number"
        name="price"
         class="input"
          required
          [ngModel]="donut?.price" #price="ngModel" />

      <ng-container *ngIf="price.invalid && price.touched"> 
        <div class="donut-form-error" *ngIf="price.errors?.['required']">
        Price is required</div>
      </ng-container>

    </label>
    <div class="donut-form-radios">
      <p class="donut-form-radios-label">Promo:</p>
      <label>
        <input type="radio" name="promo" [value]="undefined" [ngModel]="donut?.promo">
        <span>None</span>
      </label>
      <label>
        <input type="radio" name="promo" value="new" [ngModel]="donut?.promo">
        <span>New</span>
      </label>
      <label>
        <input type="radio" name="promo" value="limited" [ngModel]="donut?.promo">
        <span>Limited</span>
      </label>
    </div>
    <label>
      <span>Description</span>
      <textarea
       name="description"
       class="input input--textarea" 
       required
       [ngModel]="donut?.description"
       #description="ngModel">
      </textarea>
       <ng-container *ngIf="description.invalid && description.touched">  
        <div class="donut-form-error" *ngIf="description.errors?.['required']">
              Description is required</div>
      </ng-container>
    </label>

    <button type="button" 
    class="btn btn--green" 
     (click)="handleCreate(form)">
      Create
    </button>

    <button type="button"
     class="btn btn--green" 
    (click)="handleUpdate(form)"
    [disabled]="form.untouched">
    Update
  </button>

    <button type="button" class="btn btn--green" 
    (click)="handleDelete()">
    Delete
  </button>

    <button type="button" class="btn btn--grey" (click)="form.resetForm()">Reset Form</button>
    <div class="donut-form-working" *ngIf="form.valid && form.submitted">
      Working...
    </div>
   
  </form>
  </ng-container>
  
  <ng-template #loading>Loading ...</ng-template>
  `,
})
export class DonutFormComponent {

  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon',
  ]
  @Input() donut!: Donut;

  @Output() create = new EventEmitter<Donut>();
  @Output() update = new EventEmitter<Donut>();
  @Output() delete = new EventEmitter<Donut>();

  handleCreate(form: NgForm) {
    if (form.valid) {

      this.create.emit(form.value);
    }
    else {

      form.form.markAllAsTouched();
    }

  }

  handleUpdate(form: NgForm) {
    if (form.valid) {
 
      this.update.emit({ id: this.donut.id, ...form.value });
    }
    else {

      form.form.markAllAsTouched();
    }

  }

  handleDelete() {
    if (confirm(`Really delete ${this.donut.name} ?`)) {
      this.delete.emit({ ...this.donut });
    }
  }
  handleReset(form: NgForm) {
    form.resetForm();
  }
}

