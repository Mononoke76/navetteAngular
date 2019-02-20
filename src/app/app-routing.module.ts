import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {TourneeViewComponent} from './components/tournee-view/tournee-view.component'
import {ComponentTabComponent} from './components/component-tab/component-tab.component'

const routes: Routes = [
  { path: '', component: TourneeViewComponent },
  { path: 'mesresas', component: ComponentTabComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
