import { Routes } from '@angular/router';

import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full',
      },
      {
        path: 'characters',
        loadComponent: () =>
          import('./features/characters/pages/character-list/character-list.page').then(
            (m) => m.CharacterListPage
          ),
      },
      {
        path: 'characters/new',
        loadComponent: () =>
          import('./features/characters/pages/character-form/character-form.page').then(
            (m) => m.CharacterFormPage
          ),
      },
      {
        path: 'characters/:id/edit',
        loadComponent: () =>
          import('./features/characters/pages/character-form/character-form.page').then(
            (m) => m.CharacterFormPage
          ),
      },
      {
        path: 'characters/:id',
        loadComponent: () =>
          import('./features/characters/pages/character-view/character-view.page').then(
            (m) => m.CharacterViewPage
          ),
      },
      {
        path: 'combat',
        loadComponent: () =>
          import('./features/combat/pages/combat-manager/combat-manager.page').then(
            (m) => m.CombatManagerPage
          ),
      },
      {
        path: 'dices',
        loadComponent: () =>
          import('./features/dices/pages/dices/dices.page').then((m) => m.DicesPage),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
