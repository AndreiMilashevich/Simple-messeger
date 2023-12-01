import { Component, Inject, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';
import { IPost } from './model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public articles!: IPost[];
  private subscription!: Subscription;;

  constructor(@Inject(PostsService) private postsService: PostsService) {
  }

  ngOnInit() {
    this.subscription = this.postsService.getPosts().subscribe((data: IPost[]) => {
      this.articles = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

