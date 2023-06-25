import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReviewModel } from "../review/review.model";
import { map, tap } from "rxjs";
import { ReviewService } from "../review/review.service";
import jsPDF from "jspdf";

@Injectable({providedIn:'root'})
export class DataStorageService{
  constructor(private http:HttpClient,private reviewService:ReviewService){}


  storeReviews() {
    const reviews=this.reviewService.getReviews();
    return this.http.put('https://menu-app-ad6be-default-rtdb.firebaseio.com/reviews.json',reviews)
    .subscribe(response=>{
        console.log(response);
    });
}

  clearReviews() {
  const reviews:ReviewModel[]=[new ReviewModel(' ',' ',' ',' ',' ')];
  this.reviewService.setReviews(reviews);
  this.storeReviews();
}

fetchReviews() {

  return this.http
    .get<ReviewModel[]>(
      'https://menu-app-ad6be-default-rtdb.firebaseio.com/reviews.json'
    )
    .pipe(
      map(reviews => {
        return reviews.map(review => {
          return {
            ...review
          };
        });
      }),
      tap(reviews => {
        this.reviewService.setReviews(reviews);
      })
    )
}

onpdf(){
  const reviews=this.reviewService.getReviews();
  const jsonData = reviews.map(obj => JSON.stringify(obj)).join('\n');
  console.log(jsonData);
    const doc = new jsPDF();

    doc.text('Today Review:', doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() / 6, { align: 'center' });
    doc.setFontSize(12);
    doc.text(jsonData, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() / 6 + 10, { align: 'center' });
    doc.save('reviews.pdf');
}


}
