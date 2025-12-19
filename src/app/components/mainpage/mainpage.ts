import { Component, inject } from '@angular/core';
import { Post } from '../shared/post/post';
import { PostParam } from '../../interfaces/post-interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-mainpage',
  imports: [Post, RouterLink],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss',
})
export class Mainpage {
      posts: Array<PostParam> = [
    {
      name: 'Hans',
      image: 'assets/img/Bella 1.jpg',
      likes: 55,
      isLiked: true,
      comments: ['Tolle banane', 'Banana in the Box'],
    },
    {
      name: 'Franz',
      image: 'assets/img/gatze.jpg',
      likes: 21,
      isLiked: false,
      comments: [],
    },
    {
      name: 'Mama',
      image: 'assets/img/gatze7.PNG',
      likes: 274,
      isLiked: true,
      comments: ['Schöne Orangen.'],
    },
  ];
}
