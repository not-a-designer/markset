import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SortPopoverComponent } from './sort-popover/sort-popover.component';
import { ViewPopoverComponent } from './view-popover/view-popover.component';



@NgModule({
  declarations: [SortPopoverComponent, ViewPopoverComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SortPopoverComponent, ViewPopoverComponent]
})
export class ComponentsModule { }
