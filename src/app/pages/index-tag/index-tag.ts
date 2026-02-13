import { Component, computed, input } from '@angular/core';
import { ThemeToggle } from '../../components/theme-toggle/theme-toggle';
import { NavFilters } from '../../components/nav-filters/nav-filters';
import { RouterLink } from '@angular/router';
import { POSTS_DATA } from '../../core/constants/posts.data';
import { toUrl } from '../../core/utils/url';

@Component({
  selector: 'app-index-tag',
  imports: [RouterLink, ThemeToggle, NavFilters],
  templateUrl: './index-tag.html',
  styleUrl: './index-tag.scss',
})
export class IndexTag {
  slug = input.required<string>();
  allTags = input.required<string[]>();

  filteredPosts = computed(() => {
    const currentSlug = this.slug();

    console.log(POSTS_DATA)

    if (currentSlug === 'Todos') {return POSTS_DATA;}

    return POSTS_DATA.filter(post =>
      post.tags.some(tag => toUrl(tag) === currentSlug)
    );
  });
}
