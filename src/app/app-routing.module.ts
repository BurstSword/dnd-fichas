import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'character-list',
    pathMatch: 'full'
  },
  {
    path: 'character-list',
    loadChildren: () => import('./character-list/character-list.module').then(m => m.CharacterListPageModule)
  },
  {
    path: 'character-form',
    loadChildren: () => import('./character-form/character-form.module').then(m => m.CharacterFormPageModule)
  },
  {
    path: 'character-view',
    loadChildren: () => import('./character-view/character-view.module').then( m => m.CharacterViewPageModule)
  },
  {
    path: 'dices',
    loadChildren: () => import('./dices/dices.module').then( m => m.DicesPageModule)
  },
  {
    path: 'combat-manager',
    loadChildren: () => import('./combat-manager/combat-manager.module').then( m => m.CombatManagerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
