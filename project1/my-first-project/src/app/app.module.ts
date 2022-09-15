import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './project/navbar/navbar.component';
import { MainComponent } from './project/main/main.component';
import { FooterComponent } from './project/footer/footer.component';
import { FilterPipe } from './project/filter.pipe';
import { FormsModule } from '@angular/forms';
import { PromiseComponent } from './project/promise/promise.component';
import { ObservableComponent } from './project/observable/observable.component';
import { AllComponent } from './project/all/all.component';
import { FromEventComponent } from './project/from-event/from-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    FilterPipe,
    PromiseComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
