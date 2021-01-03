import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupModule } from './setup/setup.module';


const routes: Routes = [
  {path:'',loadChildren:'./setup/setup.module#SetupModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
