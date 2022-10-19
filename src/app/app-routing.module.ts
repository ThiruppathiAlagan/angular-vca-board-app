import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',redirectTo:'bord',pathMatch:'full'
  },
  {
    path:'bord',
    loadChildren:()=>import('./fetchstandby/fetchstandby.module').then(m=>m.FetchstandbyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
