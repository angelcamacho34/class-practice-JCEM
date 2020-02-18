import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { HomeComponent } from './home/home.component';
import { Comp2Component } from './comp2/comp2.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
