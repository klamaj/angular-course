import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { CoursesService } from './courses.service';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { FilterByCategoryPipe } from './filter-by-category.pipe';
import { CourseTitleComponent } from "./course-title/course-title.component";



@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    
  ],
  imports: [
    CommonModule,
    FilterByCategoryPipe,
    CourseTitleComponent
],
  exports:[
    CourseCardComponent,
    CourseImageComponent,
    FilterByCategoryPipe

  ],
  providers:[CoursesService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]


})
export class CoursesModule { }
