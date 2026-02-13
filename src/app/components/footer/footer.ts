import { Component, inject } from '@angular/core';
import { Language } from '../../core/services/languague';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected lang = inject(Language).currentLang;
}
