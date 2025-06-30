import { TestBed } from '@angular/core/testing';
import { School } from '../../models/school.model';
import { MockDataService } from './mock-data.service';
import mockData from '../mock-data.json';

describe('MockDataService', () => {
  let service: MockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all schools', (done) => {
    service.getSchools().subscribe((schools) => {
      expect(schools.length).toBe(mockData.length);
      expect(schools).toEqual(mockData);
      done();
    });
  });
  it('should return a school by ID', (done) => {
    const targetId = mockData[0].schoolId;
    service.getSchoolById(targetId).subscribe((school) => {
      expect(school.schoolId).toBe(targetId);
      expect(school.schoolName).toEqual(mockData[0].schoolName);
      done();
    });
  });
  it('should calculate correct impact stats', (done) => {
    service.getImpactStats().subscribe((stats) => {
      const totalSchools = mockData.length;
      const totalStudents = mockData.reduce(
        (acc, s) => acc + s.totalStudents,
        0
      );
      const high = mockData.reduce((acc, s) => acc + s.highRisk, 0);
      const medium = mockData.reduce((acc, s) => acc + s.mediumRisk, 0);
      const low = mockData.reduce((acc, s) => acc + s.lowRisk, 0);

      expect(stats.totalSchools).toBe(totalSchools);
      expect(stats.totalStudents).toBe(totalStudents);
      expect(stats.highImpact).toBe(Math.round((high / totalStudents) * 100));
      expect(stats.mediumImpact).toBe(
        Math.round((medium / totalStudents) * 100)
      );
      expect(stats.lowImpact).toBe(Math.round((low / totalStudents) * 100));
      done();
    });
  });
});
