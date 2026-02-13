import { Component, input } from '@angular/core';
import { ThemeToggle } from "../../components/theme-toggle/theme-toggle";
import { RouterLink } from '@angular/router';
import { PostContent } from '../../components/post-content/post-content';
import { NavFilters } from "../../components/nav-filters/nav-filters";
import { PostData } from '../../core/constants/posts.data';

@Component({
  selector: 'app-post',
  imports: [RouterLink, ThemeToggle, PostContent, NavFilters],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class Post {
  post = input.required<PostData>();
}
