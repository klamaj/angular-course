import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DoCheck,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    Self,
    SimpleChanges,
    SkipSelf,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../courses.service';
import { NgIf } from '@angular/common';
// import { COURSES_SERVICE } from '../app.component';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],

    imports:[
        NgIf
    ],

    standalone: true,

})



export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, DoCheck{

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private coursesService: CoursesService, @Attribute('type') private type: string) {

        // console.log('constructor', this.course);

    }

    ngOnInit() {

        // console.log("ngOnInit", this.course);

    }

    ngDoCheck(){
        
        // console.log("ngDoCheck");

    }


    ngAfterContentInit(){
        
        // console.log("ngAfterContentInit");

    }

    ngAfterViewInit(){

        // console.log("ngAfterViewInit");
        
    }






    ngAfterContentChecked(){

        // console.log("ngAfterContentChecked");
        
    }


    ngAfterViewChecked(){

        // console.log("ngAfterViewChecked");

    }


    ngOnChanges(changes){
        
        // console.log("ngOnChanges", changes);


    }


    ngOnDestroy(){

        // console.log("ngOnDestroy");
        
    }


    onTitleChanged(newTitle:string){

        this.course.description = newTitle;

        

    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
