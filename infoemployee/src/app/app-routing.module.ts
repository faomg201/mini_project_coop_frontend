import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageemployyeeComponent } from './components/pageemployyee/pageemployyee.component';
import { InfoComponent } from './components/info/info.component';
import { EminfoComponent } from './components/eminfo/eminfo.component';

const routes: Routes = [
  {path: 'pageemployyee', component: PageemployyeeComponent},
  {path: 'info', component: InfoComponent},
  {path: 'eminfo', component: EminfoComponent},
  
  {path:'',
  redirectTo: 'pageemployyee',
  pathMatch: 'full'
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
