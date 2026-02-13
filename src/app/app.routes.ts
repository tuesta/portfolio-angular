import { ActivatedRouteSnapshot, Router, Routes } from '@angular/router';
import { IndexTag } from './pages/index-tag/index-tag';
import { POSTS_DATA } from './core/constants/posts.data';
import { Post } from './pages/post/post';
import { inject } from '@angular/core';

const allTags = [...new Set(POSTS_DATA.flatMap(post => post.tags))];

export const routes: Routes = [
  {
    path: '',
    component: IndexTag,
    title: 'Artículos :: Tuesta',
    data: { slug: 'Todos', allTags }
  },
  {
    path: 'tag/:slug',
    component: IndexTag,
    title:  'Tag :: Tuesta',
    data: { allTags }
  },
  {
    path: 'posts/:slug',
    component: Post,
    resolve: {
      post: (route: ActivatedRouteSnapshot) => {
        const slug = route.paramMap.get('slug');
        const post = POSTS_DATA.find(p => p.slug === slug);

        if (!post) {
          inject(Router).navigate(['/']);
          return null;
        }

        return post;
      }
    },
    title: (route: ActivatedRouteSnapshot) => {
      const slug = route.paramMap.get('slug');
      const post = POSTS_DATA.find(p => p.slug === slug);

      return post ? `${post.title}` : 'Redirigiendo...';
    }
  }
];
