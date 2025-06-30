import {
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { MockDataService } from '../../../services/mock-data.service';
import { Subject, takeUntil } from 'rxjs';
import { School } from '../../../models/school.model';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../../services/filter.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit, OnDestroy {
  protected destroyed$ = new Subject<void>();
  schools = signal<School[]>([]);

  mockDataService = inject(MockDataService);
  filterService = inject(FilterService);
  tier = this.filterService.tier;

  trackBySchoolId(index:number,school:School):number{
    return school.schoolId
  }

  filteredSchools = computed(() => {
    const schoolName = this.filterService.schoolName().toLowerCase();
    const principalName = this.filterService.principalName().toLowerCase();

    const selectedTier = this.tier();

    return this.schools().filter((school) => {
      const matchesName = school.schoolName.toLowerCase().includes(schoolName);
      const matchesPrincipal = school.principalName
        .toLowerCase()
        .includes(principalName);
      const matchesTier =
        !selectedTier || this.getTier(school) === selectedTier;

      return matchesName && matchesPrincipal && matchesTier;
    });
  });

  getTier(school: School): 'Tier 1' | 'Tier 2' | 'Tier 3' {
    const { highRisk, mediumRisk, totalStudents } = school;
    const high = (highRisk / totalStudents) * 100;
    const med = (mediumRisk / totalStudents) * 100;
    if (high >= 10) return 'Tier 1';
    if (med >= 20) return 'Tier 2';
    return 'Tier 3';
  }

  ngOnInit(): void {
    this.mockDataService
      .getSchools()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {
        this.schools.set(res);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
