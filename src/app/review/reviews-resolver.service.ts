import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/dataStorage.service";
import { ReviewModel } from "./review.model";
import { ReviewService } from "./review.service";

@Injectable({ providedIn: 'root' })
export class ReviewsResolverService implements Resolve<ReviewModel[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private reviewsService: ReviewService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const reviews = this.reviewsService.getReviews();
    console.log(reviews);
    return this.dataStorageService.fetchReviews();
  }
}
