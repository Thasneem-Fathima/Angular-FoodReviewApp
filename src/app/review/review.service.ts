import { Injectable, Output } from "@angular/core";
import { Subject } from "rxjs";
import { ReviewModel } from "./review.model";

@Injectable()
export class ReviewService{

  reviewsChanged=new Subject<ReviewModel[]>();
  private reviews: ReviewModel[]=[

    new ReviewModel(' ',' ',' ',' ',' '),
    // new ReviewModel('example1@gmail.com','2021503501','Good','Bad','Delicious')
  ];


  setReviews(reviews: ReviewModel[]) {
    this.reviews = reviews;
    this.reviewsChanged.next(this.reviews.slice());
    console.log(reviews);
  }

  getReviews() {
    return this.reviews.slice();
  }



  addReview(review: ReviewModel) {
    this.reviews.push(review);
    this.reviewsChanged.next(this.reviews.slice());
  }

}


