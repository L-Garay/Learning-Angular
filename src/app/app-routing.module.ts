import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingNavigationComponent } from './routing-navigation/routing-navigation.component';
import { RoutingNavigationTwoComponent } from './routing-navigation-two/routing-navigation-two.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/routeOne', pathMatch: 'full' },
  { path: 'routeOne', component: RoutingNavigationComponent },
  { path: 'routeTwo', component: RoutingNavigationTwoComponent },
  { path: 'routeOne/:id', component: DepartmentDetailComponent },
  { path: '**', component: RouteNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  RoutingNavigationComponent,
  RoutingNavigationTwoComponent,
  RouteNotFoundComponent,
  DepartmentDetailComponent,
];
