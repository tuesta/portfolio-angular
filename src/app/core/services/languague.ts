import { Injectable, signal } from '@angular/core';

export type SupportedLanguage = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class Language {
  currentLang = signal<SupportedLanguage>('es');

  constructor() {
    this.initializeLanguage();
  }

  private initializeLanguage() {
    const storedLang = localStorage.getItem('lang') as SupportedLanguage;
    if (storedLang && ['es', 'en'].includes(storedLang)) {
      this.currentLang.set(storedLang);
      return;
    }

    const browserLang = navigator.language.split('-')[0];
    const newLang = browserLang === 'en' ? 'en' : 'es';
    this.setLanguage(newLang);
  }

  private setLanguage(lang: SupportedLanguage) {
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
  }

  toggleLanguage() {
    if (this.currentLang() === "es") {
      this.setLanguage("en")
    } else {
      this.setLanguage("es")
    }
  }
}
