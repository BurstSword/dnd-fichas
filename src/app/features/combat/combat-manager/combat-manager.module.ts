import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CombatManagerPageRoutingModule } from './combat-manager-routing.module';

import { CombatManagerPage } from './combat-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CombatManagerPageRoutingModule
  ],
  declarations: [CombatManagerPage]
})
export class CombatManagerPageModule {}
