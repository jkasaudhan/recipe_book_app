import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onNavigationChanged = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
   
  }

 onNavigationClicked(state: string) {
    console.log('nav bar clicked: ', state);
    this.onNavigationChanged.emit(state);
 }

}
