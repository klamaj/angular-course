import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CoursesModule } from './courses/courses.module';
import { FilterByCategoryPipe } from "./courses/filter-by-category.pipe";

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
    BrowserAnimationsModule, HttpClientModule, CoursesModule], providers: [] })
export class AppModule { }
