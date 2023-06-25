import { Component, Input } from "@angular/core";
import { ReviewModel } from "../../review.model";

@Component({
  selector: 'app-review-item',
  templateUrl: './reviewitem.component.html'
})

export class ReviewItem {
  @Input() review: ReviewModel;
}
