import { Component, inject, OnInit } from '@angular/core';
import { MockDataService } from '../../../services/mock-data.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { School, Student } from '../../../models/school.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './school-page.component.html',
  styleUrl: './school-page.component.scss'
})
export class SchoolPageComponent implements OnInit{


  protected destroyed$ = new Subject<void>();

  mockDataService = inject(MockDataService);
  activatedRoute = inject(ActivatedRoute);
  school!:School

  trackByStudentId(index:number,student:Student):number{
    return student.id
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const schoolId = params['schoolId']
      if(schoolId){
        this.mockDataService.getSchoolById(schoolId)
                            .pipe(takeUntil(this.destroyed$))
                            .subscribe(res => {
                              this.school = res;
                            })
      }
  })
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
