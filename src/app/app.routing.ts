import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {FruitHomeComponent} from './Components/Fruits/home/home.component';
import {FruitDetailComponent} from './Components/Fruits/detail/detail.component';
import { HomeComponent } from './Components/Home/home/home.component';
import {FruitAddComponent} from './Components/Fruits/add/add.component';

const appRoutes: Routes = [
  {path: 'fruits', component: FruitHomeComponent},
  {path: 'fruit/:name', component: FruitDetailComponent},
  {path: 'add/fruit', component: FruitAddComponent},
  {path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRouting {}
