import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SortPopoverComponent } from 'src/app/components/sort-popover/sort-popover.component';
import { ViewPopoverComponent } from 'src/app/components/view-popover/view-popover.component';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.page.html',
  styleUrls: ['./bookmark-list.page.scss'],
})
export class BookmarkListPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentSortPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: SortPopoverComponent,
      event: ev,
      alignment: 'center',
      backdropDismiss: true,
      dismissOnSelect: true,
      size: 'auto',
      side: 'bottom'
    });
    await popover.present();
    const { data } = await popover.onDidDismiss();
    if (data) {
      console.log(data);
    }
  }

  async presentViewPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ViewPopoverComponent,
      event: ev,
      alignment: 'center',
      backdropDismiss: true,
      dismissOnSelect: true,
      size: 'auto',
      side: 'bottom'
    });
    await popover.present();
    const { data } = await popover.onDidDismiss();
    if (data) {
      console.log(data);
    }
  }
}
