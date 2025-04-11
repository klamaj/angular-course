import { TemplateRef, ViewContainerRef } from '@angular/core';
import { NgxUnlessDirective } from './ngx-unless.directive';

describe('NgxUnlessDirective', () => {
  it('should create an instance', () => {


    const templateRefMock = jasmine.createSpyObj('TemplateRef', ['createEmbeddedView']);
    const viewContainerRefMock = jasmine.createSpyObj('ViewContainerRef', ['createEmbeddedView', 'clear'])
    
    const directive = new NgxUnlessDirective(templateRefMock, viewContainerRefMock);
    expect(directive).toBeTruthy();
  });
});
