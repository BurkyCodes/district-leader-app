import { ComponentFixture, TestBed } from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import { SchoolPageComponent } from './school-page.component';

describe('SchoolPageComponent', () => {
  let component: SchoolPageComponent;
  let fixture: ComponentFixture<SchoolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolPageComponent],
      providers:[provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
