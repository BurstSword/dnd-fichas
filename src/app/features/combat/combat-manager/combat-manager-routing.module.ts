import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CombatManagerPage } from './combat-manager.page';

const routes: Routes = [
  {
    path: '',
    component: CombatManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombatManagerPageRoutingModule {}
