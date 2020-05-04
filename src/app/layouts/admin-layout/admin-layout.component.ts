import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {


  links: Array<object> = [
    {name: 'dashboard',url: '/program/list_program', icon: 'home'},
  ]
    

  sideBarOpen = true;
  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
