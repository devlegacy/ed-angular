import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDemoComponent } from './material/material-demo/material-demo.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MarsComponent } from './mars/mars.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  },
  {
    path: 'material-demo',
    component: MaterialDemoComponent,
  },
  {
    path: 'mars',
    component: MarsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
