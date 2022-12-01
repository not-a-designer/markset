import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookmarkListPageRoutingModule } from './bookmark-list-routing.module';

import { BookmarkListPage } from './bookmark-list.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    BookmarkListPageRoutingModule
  ],
  declarations: [BookmarkListPage]
})
export class BookmarkListPageModule {}
