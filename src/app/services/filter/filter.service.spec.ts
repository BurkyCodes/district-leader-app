import { TestBed } from '@angular/core/testing';
import { FilterService } from './filter.service';

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default empty values', () => {
    expect(service.schoolName()).toBe('');
    expect(service.principalName()).toBe('');
    expect(service.tier()).toBe('');
  });

  it('should update schoolName signal', () => {
    service.schoolName.set('Eagle Heights');
    expect(service.schoolName()).toBe('Eagle Heights');
  });

  it('should update principalName signal', () => {
    service.principalName.set('Brian Mutiso');
    expect(service.principalName()).toBe('Brian Mutiso');
  });

  it('should update tier signal', () => {
    service.tier.set('High');
    expect(service.tier()).toBe('High');
  });
});
