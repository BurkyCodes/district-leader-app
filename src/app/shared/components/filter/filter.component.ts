import { Component, inject } from '@angular/core';
import { FilterService } from '../../../services/filter/filter.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterService = inject(FilterService);

  schoolName = this.filterService.schoolName;
  principalName = this.filterService.principalName;
  tier = this.filterService.tier;
}
