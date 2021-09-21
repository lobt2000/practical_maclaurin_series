import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterValueComponent } from './enter-value/enter-value.component';
import { TableOfValueComponent } from './table-of-value/table-of-value.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphicsComponent } from './graphics/graphics.component';
import { HttpClientModule }   from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Graphics1Component } from './graphics1/graphics1.component';
import { Graphics2Component } from './graphics2/graphics2.component';
import { Graphics3Component } from './graphics3/graphics3.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterValueComponent,
    TableOfValueComponent,
    GraphicsComponent,
    Graphics1Component,
    Graphics2Component,
    Graphics3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
