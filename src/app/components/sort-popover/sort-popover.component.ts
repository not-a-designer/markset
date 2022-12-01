import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-popover',
  templateUrl: './sort-popover.component.html',
  styleUrls: ['./sort-popover.component.scss'],
})
export class SortPopoverComponent implements OnInit {

  sortOptions = [{
    icon: 'timer',
    label: 'Date ↑',
    value: 'date-asc'
  }, {
    icon: 'timer',
    label: 'Date ↓',
    value: 'date-desc'
  }, {
    icon: 'text',
    label: 'A-Z ↑',
    value: 'az-asc'
  }, {
    icon: 'text',
    label: 'A-Z ↓',
    value: 'date-desc'
  }, {
    icon: 'desktop',
    label: 'Sites ↑',
    value: 'sites-asc'
  }, {
    icon: 'desktop',
    label: 'Sites ↓',
    value: 'sites-desc'
  }]

  constructor() { }

  ngOnInit() {}

}
