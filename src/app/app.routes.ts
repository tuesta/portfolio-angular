import { ActivatedRouteSnapshot, ResolveFn, Router, Routes } from '@angular/router';
import { IndexTag } from './pages/index-tag/index-tag';
import { POSTS_DATA } from './core/constants/posts.data';
import { Language } from './core/services/languague';
import { Post } from './pages/post/post';
import { inject } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: IndexTag,
    title: (_route: ActivatedRouteSnapshot) => {
      const lang = inject(Language).currentLang();

      return (lang === "en" ? 'Articles' : 'Artículos') + " :: Tuesta"
    },
    data: { slug: 'Todos' }
  },
  {
    path: 'tag/:slug',
    component: IndexTag,
    title:  'Tag :: Tuesta',
  },
  {
    path: 'posts/:slug',
    component: Post,
    title: (route: ActivatedRouteSnapshot) => {
      const lang = inject(Language).currentLang();
      const slug = route.paramMap.get('slug');
      const post = POSTS_DATA[lang].find(p => p.slug === slug);

      return post ? `${post.title}` : 'Redirigiendo...';
    }
  }
];
