import { Component, Input } from '@angular/core';
import { PostParam } from '../../../interfaces/post-interface';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class Post {
  @Input() post!: PostParam;

  toggleLike() {
    this.post.isLiked = !this.post.isLiked;
    if (this.post.isLiked) {
      this.post.likes++;
    } else {
      this.post.likes--;
    }
  }
}
