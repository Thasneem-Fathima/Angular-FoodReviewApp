import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReviewComponent } from './review/review.component';
import { ReviewService } from './review/review.service';
import { SentComponent } from './sent/sent.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { ReviewItem } from './review/reviewlist/reviewitem/reviewitem.component';
import { ReviewList } from './review/reviewlist/reviewlist.component';
import { PdfGeneratorComponent } from './pdf/pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReviewComponent,
    SentComponent,
    LoginComponent,
    ReviewList,
    ReviewItem,
    PdfGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ReviewService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
