import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // for routing functionality
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsComponent } from './items/items.component';


// Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.
const routes: Routes = [
  // Default route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // 'path'	A string that matches the URL in the browser address bar.
  // 'component' The component that the router should create when navigating to this route.
  // This tells the router to match that URL to path: 'items' and 
  // display the itemsComponent when the URL is something like localhost:4200/items.
  { path: 'dashboard', component: DashboardComponent },
  
  // :(colon) indicate that id is a placeholder
  { path: 'detail/:id', component: ItemDetailsComponent },
  
  { path: 'items', component: ItemsComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // `forRoot()` because you configure the router at the application's root level.
  ],

  exports: [RouterModule]
  // AppRoutingModule exports RouterModule so it will be available throughout the application.
})


export class AppRoutingModule { }
