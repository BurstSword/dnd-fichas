import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterFormPageRoutingModule } from './character-form-routing.module';

import { CharacterFormPage } from './character-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterFormPageRoutingModule
  ],
  declarations: [CharacterFormPage]
})
export class CharacterFormPageModule {}
