import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/dataStorage.service';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
  constructor(private reviewService:ReviewService,private dataStorageService:DataStorageService){}
  reviews:ReviewModel[];
  reviewForm:FormGroup;
  subscription: Subscription;
  ngOnInit(): void {
    this.initForm();
    console.log('Review');
  }

  today=(new Date()).getDay();

  onSubmit() {
    const reviews=this.reviewService.getReviews();
    for( let i=0;i<reviews.length;i++){
      if(reviews[i].regno===this.reviewForm.value.regno){
        this.reviewForm.reset();
        alert('Reviews already given');
        return;
      }
    }

    this.reviewService.addReview(this.reviewForm.value);
    this.dataStorageService.storeReviews();
    alert('Reviews added');
    this.reviewForm.reset();
  }

  private initForm() {
    let reviewemail = '';
    let reviewregno = '';
    let reviewbreakfast= '';
    let reviewlunch= '';
    let reviewdinner= '';


    this.reviewForm = new FormGroup({
      'email': new FormControl(reviewemail, Validators.required),
      'regno': new FormControl(reviewregno, Validators.required),
      'breakfast': new FormControl(reviewbreakfast, Validators.required),
      'lunch': new FormControl(reviewlunch, Validators.required),
      'dinner': new FormControl(reviewdinner, Validators.required)
    });
  }

}


