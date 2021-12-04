import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-home-header',
  templateUrl: './home-header.component.html',
})
export class HomeHeaderComponent implements OnInit {
  menu: boolean = false;
  menuDropdown() {
    this.menu = !this.menu;
  }

  constructor() {}

  ngOnInit(): void {}
}
