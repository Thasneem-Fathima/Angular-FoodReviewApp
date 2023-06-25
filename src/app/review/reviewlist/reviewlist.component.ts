import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ReviewModel } from "../review.model";
import { ReviewService } from "../review.service";

@Component({
  selector: 'app-review-list',
  templateUrl: './reviewlist.component.html'
})
export class ReviewList implements OnInit,OnDestroy {

  reviews: ReviewModel[];
  subscription: Subscription;
  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.subscription = this.reviewService.reviewsChanged
    .subscribe(
      (reviews: ReviewModel[]) => {
        this.reviews = reviews;
      }
    );
    this.reviews = this.reviewService.getReviews();
    console.log('ReviewList');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
