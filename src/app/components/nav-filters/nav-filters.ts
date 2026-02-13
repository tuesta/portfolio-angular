import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { toUrl } from '../../core/utils/url';

@Component({
  selector: 'app-nav-filters',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-filters.html',
  styleUrl: './nav-filters.scss',
})
export class NavFilters {
  tags = input.required<[string, string][]>();
  defaultTag = input<string | null>(null);

  protected readonly toUrl = toUrl;
}
