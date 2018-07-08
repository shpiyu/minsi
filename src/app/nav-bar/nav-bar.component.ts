import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  public onSearch(cusip:string) {
    console.log(cusip);
  }

  public onRefresh() {
    console.log("on refresh clicked");
  }

}
