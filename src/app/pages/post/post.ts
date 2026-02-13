import { Component, computed, inject, input, Signal } from '@angular/core';
import { ThemeToggle } from "../../components/theme-toggle/theme-toggle";
import { RouterLink } from '@angular/router';
import { PostContent } from '../../components/post-content/post-content';
import { PostContentEn } from '../../components/post-content-en/post-content-en';
import { NavFilters } from "../../components/nav-filters/nav-filters";
import { PostData, POSTS_DATA } from '../../core/constants/posts.data';
import { LanguageToggle } from "../../components/language-toggle/language-toggle";
import { Language } from '../../core/services/languague';

@Component({
  selector: 'app-post',
  imports: [RouterLink, ThemeToggle, PostContent, PostContentEn, NavFilters, LanguageToggle],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class Post {
  slug = input.required<string>();
  protected lang = inject(Language).currentLang;

  protected post = computed(() => {
    return POSTS_DATA[this.lang()].find(p => p.slug === this.slug()) as PostData;
  })
}
