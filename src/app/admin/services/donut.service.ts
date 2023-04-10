import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
donuts:Donut[]=[
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
  constructor() { }
}
