import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcreatorComponent } from './projectcreator.component';

describe('ProjectcreatorComponent', () => {
  let component: ProjectcreatorComponent;
  let fixture: ComponentFixture<ProjectcreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectcreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
