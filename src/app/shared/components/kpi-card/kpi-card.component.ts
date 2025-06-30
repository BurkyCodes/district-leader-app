import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MockDataService } from '../../../services/mock-data/mock-data.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpi-card.component.html',
  styleUrl: './kpi-card.component.scss',
})
export class KpiCardComponent implements OnInit, OnDestroy {
  protected destroyed$ = new Subject<void>();
  highImpact!: number;
  mediumImpact!: number;
  lowImpact!: number;
  totalSchools!: number;
  totalStudents!: number;

  mockDataService = inject(MockDataService);

  getImpactColor(value: number): string {
    if (value >= 70) return 'bg-red-400 ';
    if (value >= 40) return 'bg-yellow-400';
    return 'bg-green-500';
  }

  getImpactIcon(value: number): string {
    if (value <= 40) return 'fa-solid fa-circle-check';
    return 'fa fa-exclamation';
  }

  getIconColor(value: number): string {
    if (value >= 70) return 'text-red-400 ';
    if (value >= 40) return 'text-yellow-400';
    return 'text-green-500';
  }
  ngOnInit(): void {
    this.mockDataService
      .getImpactStats()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((stats) => {
        this.highImpact = stats.highImpact;
        this.mediumImpact = stats.mediumImpact;
        this.lowImpact = stats.lowImpact;
        this.totalSchools = stats.totalSchools;
        this.totalStudents = stats.totalStudents;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
