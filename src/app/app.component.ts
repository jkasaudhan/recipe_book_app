import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  currentState: string;
  
  ngOnInit() {
    this.currentState = 'recipe';
  }
  
  changeState(state: string) {
    console.log('active state: ', state);
    this.currentState = state;
  }
}
