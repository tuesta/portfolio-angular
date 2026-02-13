import { Component, computed, inject, input, Signal } from '@angular/core';
import { ThemeToggle } from '../../components/theme-toggle/theme-toggle';
import { LanguageToggle } from '../../components/language-toggle/language-toggle';
import { NavFilters } from '../../components/nav-filters/nav-filters';
import { RouterLink } from '@angular/router';
import { POSTS_DATA } from '../../core/constants/posts.data';
import { Language } from '../../core/services/languague';

@Component({
  selector: 'app-index-tag',
  imports: [RouterLink, ThemeToggle, NavFilters, LanguageToggle],
  templateUrl: './index-tag.html',
  styleUrl: './index-tag.scss',
})
export class IndexTag {
  slug = input.required<string>();

  protected lang = inject(Language).currentLang;

  allTags: Signal<[string, string][]> = computed(() => {
    const postsForLang = POSTS_DATA[this.lang()] || [];
    return [...new Set(postsForLang.flatMap(post => post.tags))];
  })

  defaultTag = computed(() => {
    return this.lang() === "es" ? "Todos" : "All";
  })

  private postsForCurrentLang = computed(() => {
    return POSTS_DATA[this.lang()];
  });

  filteredPosts = computed(() => {
    const currentSlug = this.slug();

    if (currentSlug === 'Todos') {return this.postsForCurrentLang();}

    return this.postsForCurrentLang().filter(post =>
      post.tags.some(tag => tag[1] === currentSlug)
    );
  });
}
