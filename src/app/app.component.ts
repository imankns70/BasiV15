import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
  
  <div class="app">
    <header class="header">
      <img src="/assets/img/logo.svg" alt="Ultimate Donuts" class="logo"/>
    </header>
  <!-- <donut-list></donut-list> -->
  <donut-single></donut-single>
  
  </div>
  
  `
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;
  ngOnInit(): void {
    this.message = "hello wordld";
  }

  handleInputEvent(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.newMessage = value;
  }
  handleClick(event:Event){

  }

}
