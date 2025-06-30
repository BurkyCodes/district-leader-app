import { ComponentFixture, TestBed } from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import { PrincipalLandingComponent } from './principal-landing.component';

describe('PrincipalLandingComponent', () => {
  let component: PrincipalLandingComponent;
  let fixture: ComponentFixture<PrincipalLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalLandingComponent],
      providers:[provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
