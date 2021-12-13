import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'ngx-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  menu: boolean = false;
  menuDropdown() {
    this.menu = !this.menu;
  }

  constructor() {}

  ngOnInit(): void {}
}
