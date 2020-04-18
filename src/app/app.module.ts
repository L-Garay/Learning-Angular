import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ServicesHttpComponent } from './services-http/services-http.component';
import { ServicesHttpSecondComponent } from './services-http-second/services-http-second.component';
import { TestServiceService } from './test-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ServicesHttpComponent,
    ServicesHttpSecondComponent,
    routingComponents,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [TestServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
