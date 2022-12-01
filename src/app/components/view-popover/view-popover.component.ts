import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-popover',
  templateUrl: './view-popover.component.html',
  styleUrls: ['./view-popover.component.scss'],
})
export class ViewPopoverComponent implements OnInit {

  viewOptions = [{
    label: 'List',
    icon: 'list',
    value: 'list'
  }, {
    label: 'Cards',
    icon: 'albums',
    value: 'cards'
  }, {
    label: 'Headlines',
    icon: 'newspaper',
    value: 'headlines',
  }, {
    label: 'Moodboard',
    icon: 'grid',
    value: 'moodboard'
  }];

  showOptions = [ 'Cover', 'Title', 'Description', 'Highlights', 'Tags', 'Bookmark Info'];

  constructor() { }

  ngOnInit() {}

}
