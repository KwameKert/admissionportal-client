import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-layout',
  templateUrl: './applicant-layout.component.html',
  styleUrls: ['./applicant-layout.component.scss']
})
export class ApplicantLayoutComponent implements OnInit {

  

  links: Array<object> = [
    {name: 'dashboard',url: '/applicant/show_programs', icon: 'home'},
    {name: 'program',url: '/applicant/program', icon: 'extension'},
  ]
    

  sideBarOpen = true;
  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
