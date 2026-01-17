import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="app-shell">
      <header class="app-header">
        <div class="logo">DnD Fichas</div>
        <nav class="nav">
          <a routerLink="/characters" routerLinkActive="active">Characters</a>
          <a routerLink="/combat" routerLinkActive="active">Combat</a>
          <a routerLink="/dices" routerLinkActive="active">Dices</a>
        </nav>
      </header>
      <main class="container">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      .app-shell {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .app-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 24px;
        background: var(--surface);
        border-bottom: 1px solid var(--border);
        position: sticky;
        top: 0;
        z-index: 10;
      }

      .logo {
        font-weight: 700;
        font-size: 18px;
      }

      .nav {
        display: flex;
        gap: 16px;
      }

      .nav a {
        text-decoration: none;
        color: var(--text-secondary);
        font-weight: 600;
      }

      .nav a.active {
        color: var(--primary);
      }

      @media (max-width: 768px) {
        .app-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }
      }
    `,
  ],
})
export class LayoutComponent {}
