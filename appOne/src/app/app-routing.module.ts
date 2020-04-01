import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouteOneComponent } from './components/route-one/route-one.component';
import { RouteTwoComponent } from './components/route-two/route-two.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'routeOne' },
  { path: 'routeOne', component: RouteOneComponent },
  { path: 'routeTwo', component: RouteTwoComponent },
  { path: '**', redirectTo: 'routeOne' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
