import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ServicesHttpComponent } from './services-http/services-http.component';
import { ServicesHttpSecondComponent } from './services-http-second/services-http-second.component';
import { TestServiceService } from './test-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ServicesHttpComponent,
    ServicesHttpSecondComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [TestServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
