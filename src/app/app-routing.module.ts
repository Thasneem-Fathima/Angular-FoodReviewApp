import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ReviewComponent } from './review/review.component';
import { ReviewsResolverService } from './review/reviews-resolver.service';
import { SentComponent } from './sent/sent.component';

const routes: Routes = [
  {path: '', redirectTo:'/review',pathMatch:'full',resolve:[ReviewsResolverService]},
  {path:'sent',component:SentComponent,canActivate:[LoginGuard],resolve:[ReviewsResolverService]},
  {path: 'login', component: LoginComponent,resolve:[ReviewsResolverService]},
  {path: 'review', component: ReviewComponent,resolve:[ReviewsResolverService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
