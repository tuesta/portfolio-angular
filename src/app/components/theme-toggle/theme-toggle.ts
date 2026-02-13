import { Component, inject } from '@angular/core';
import { Theme } from '../../core/services/theme';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  protected themeService = inject(Theme);
}
