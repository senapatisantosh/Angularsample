import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './lumber-menu';

@Component({
  selector: 'ngx-lumber',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
  styleUrls: ['./lumber.component.scss'],
})
export class LumberComponent implements OnInit {
  menu = MENU_ITEMS;
  constructor() {}

  ngOnInit(): void {}
}
