import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarkListPage } from './bookmark-list.page';

const routes: Routes = [
  {
    path: '',
    component: BookmarkListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarkListPageRoutingModule {}
