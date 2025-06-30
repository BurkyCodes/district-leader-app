import { inject, Injectable, signal } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { School } from '../models/school.model';
import mockData from './mock-data.json';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  getSchools(): Observable<School[]> {
    return of(mockData);
  }

  getSchoolById(id: number): Observable<School> {
    return this.getSchools().pipe(
      map((schools) => schools.find((school) => school.schoolId == id)!)
    );
  }

  getImpactStats(): Observable<{
    totalSchools: number;
    totalStudents: number;
    highImpact: number;
    mediumImpact: number;
    lowImpact: number;
  }> {
    return this.getSchools().pipe(
      map((schools) => {
        const totalSchools = schools.length;
        const totalStudents = schools.reduce(
          (sum, school) => sum + school.totalStudents,
          0
        );
        const totalHigh = schools.reduce(
          (sum, school) => sum + school.highRisk,
          0
        );
        const totalMedium = schools.reduce(
          (sum, school) => sum + school.mediumRisk,
          0
        );
        const totalLow = schools.reduce(
          (sum, school) => sum + school.lowRisk,
          0
        );
        return {
          totalSchools,
          totalStudents,
          highImpact: parseFloat(
            ((totalHigh / totalStudents) * 100).toFixed(0)
          ),
          mediumImpact: parseFloat(
            ((totalMedium / totalStudents) * 100).toFixed(0)
          ),
          lowImpact: parseFloat(((totalLow / totalStudents) * 100).toFixed(0)),
        };
      })
    );
  }
}

// {
//   "schoolName": "Eagle Heights School",
//   "principalName": "Brian Mutiso",
//   "totalStudents": 220,
//   "highRisk": 11,
//   "mediumRisk": 34,
//   "lowRisk": 175
// },
// {
//   "schoolName": "Starlight Primary",
//   "principalName": "Naomi Kiplagat",
//   "totalStudents": 270,
//   "highRisk": 17,
//   "mediumRisk": 43,
//   "lowRisk": 210
// },
// {
//   "schoolName": "Golden Ridge School",
//   "principalName": "Pauline Njuguna",
//   "totalStudents": 230,
//   "highRisk": 9,
//   "mediumRisk": 31,
//   "lowRisk": 190
// },
// {
//   "schoolName": "Cedar Grove High",
//   "principalName": "James Njoroge",
//   "totalStudents": 310,
//   "highRisk": 21,
//   "mediumRisk": 49,
//   "lowRisk": 240
// },
// {
//   "schoolName": "Oak Hill Secondary",
//   "principalName": "Esther Wambui",
//   "totalStudents": 190,
//   "highRisk": 7,
//   "mediumRisk": 23,
//   "lowRisk": 160
// },
// {
//   "schoolName": "Crystal Springs Academy",
//   "principalName": "Kelvin Muriithi",
//   "totalStudents": 250,
//   "highRisk": 10,
//   "mediumRisk": 35,
//   "lowRisk": 205
// }
// {
//     "schoolName": "Blue Horizon School",
//     "principalName": "Diana Chebet",
//     "totalStudents": 260,
//     "highRisk": 13,
//     "mediumRisk": 32,
//     "lowRisk": 215
//   },
//   {
//     "schoolName": "Unity Heights High",
//     "principalName": "Alex Wekesa",
//     "totalStudents": 275,
//     "highRisk": 15,
//     "mediumRisk": 40,
//     "lowRisk": 220
//   },
//   {
//     "schoolName": "Hopewell Primary",
//     "principalName": "Lucy Wafula",
//     "totalStudents": 210,
//     "highRisk": 12,
//     "mediumRisk": 28,
//     "lowRisk": 170
//   },
//   {
//     "schoolName": "Emerald Ridge School",
//     "principalName": "Stanley Kiplangat",
//     "totalStudents": 290,
//     "highRisk": 19,
//     "mediumRisk": 44,
//     "lowRisk": 227
//   },
//   {
//     "schoolName": "Maple Leaf High",
//     "principalName": "Joyce Akinyi",
//     "totalStudents": 235,
//     "highRisk": 14,
//     "mediumRisk": 33,
//     "lowRisk": 188
//   },
//   {
//     "schoolName": "Valley Crest Academy",
//     "principalName": "Patrick Mwenda",
//     "totalStudents": 260,
//     "highRisk": 11,
//     "mediumRisk": 39,
//     "lowRisk": 210
//   },
//   {
//     "schoolName": "Harmony Hills School",
//     "principalName": "Beatrice Karimi",
//     "totalStudents": 225,
//     "highRisk": 10,
//     "mediumRisk": 30,
//     "lowRisk": 185
//   }
