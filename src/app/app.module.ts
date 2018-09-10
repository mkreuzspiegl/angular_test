import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

//import { DataService } from './services/data.service';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
//  providers: [DataService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
