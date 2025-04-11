import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, Injector, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import { CoursesService } from './courses/courses.service';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';
import { createCustomElement } from '@angular/elements';
import { CourseTitleComponent } from './courses/course-title/course-title.component';

import { NgForOf } from '@angular/common';




@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CoursesService],
    imports:[
      
      NgForOf
    ],
    
    standalone: true,

    

})
export class AppComponent implements OnInit{



  courses: Course[] = COURSES;
  category: string = "ADVANCED";
  coursesTotal = this.courses.length;

  constructor(private coursesService: CoursesService, @Inject(CONFIG_TOKEN) private config: AppConfig, private cd: ChangeDetectorRef, private injector: Injector) {

  }





  ngOnInit() {



    const htmlElement = createCustomElement(CourseTitleComponent, {injector:this.injector});

    customElements.define('course-title', htmlElement);

    console.log('Courses data:', this.courses);


    setTimeout(() => {
      this.cd.detectChanges();
    }, 0);
    

  }


  onEditCourse() {
    this.category = (this.category === "ADVANCED") ? "BEGINNER" : "ADVANCED";
    // if (this.category === "ADVANCED") {
    //   this.category = "BEGINNER";
    // }
    // else {
    //   this.category = "ADVANCED";
    // }
  }


  save(course:Course){

    this.coursesService.saveCourse(course)
    .subscribe(
      () => console.log('Course saved successfully!')
    );

  }



}
