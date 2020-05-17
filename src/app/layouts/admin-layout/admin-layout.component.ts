import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {


  links: Array<object> = [
    {name: 'dashboard',url: '/admin/dashboard', icon: 'home'},
    {name: 'program',url: '/admin/list_program', icon: 'extension'},
    {name: 'appllications',url: '/admin/list_program', icon: 'assignment'},
    {name: 'transactions',url: '/admin/list_program', icon: 'credit_card'},
  ]
    

  sideBarOpen = true;
  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
