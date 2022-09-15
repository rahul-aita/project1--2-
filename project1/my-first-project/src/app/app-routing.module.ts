import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './project/all/all.component';
import { FromEventComponent } from './project/from-event/from-event.component';
import { ObservableComponent } from './project/observable/observable.component';
import { PromiseComponent } from './project/promise/promise.component';

const routes: Routes = [{path:'promise',component:PromiseComponent},

{path:'observable',component:ObservableComponent,children:[{path:'all',component:AllComponent},{path:'fromEvent',component:FromEventComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
