import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StagesComponent } from './stages/stages.component';
import { StrategyComponent } from './strategy/strategy.component';
import { UxuiComponent } from './uxui/uxui.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stages', component: StagesComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'uxui', component: UxuiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
