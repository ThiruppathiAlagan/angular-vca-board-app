import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { AppBoardComponent } from './app-baord/app-board.component';

const routes: Routes = [
    {
        path:'',redirectTo:'bord',pathMatch:'full'
    },
    {
        path:'bord',component:AppBoardComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FetchStandByRoutingModule { }
