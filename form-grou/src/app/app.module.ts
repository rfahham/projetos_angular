import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { FormJsonComponent } from './form-json/form-json.component';
import { ServiceAvailableComponent } from './service-available/service-available.component';
import { HttpModule} from '@angular/http';
// import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    FormJsonComponent,
    ServiceAvailableComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
