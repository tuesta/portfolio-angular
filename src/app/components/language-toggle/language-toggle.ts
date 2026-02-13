import { Component, inject } from '@angular/core';
import { Language } from '../../core/services/languague';

@Component({
  selector: 'app-language-toggle',
  imports: [],
  templateUrl: './language-toggle.html',
  styleUrl: './language-toggle.scss',
})
export class LanguageToggle {
  protected languageService = inject(Language);
}
