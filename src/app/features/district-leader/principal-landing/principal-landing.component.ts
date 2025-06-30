import { Component, signal } from '@angular/core';
import { KpiCardComponent } from "../../../shared/components/kpi-card/kpi-card.component";
import { FilterComponent } from "../../../shared/components/filter/filter.component";
import { TableComponent } from "../../../shared/components/table/table.component";

@Component({
  selector: 'app-principal-landing',
  standalone: true,
  imports: [ KpiCardComponent, FilterComponent, TableComponent],
  templateUrl: './principal-landing.component.html',
  styleUrl: './principal-landing.component.scss'
})
export class PrincipalLandingComponent {
  toggle = signal(true); 

  toggleSidebar() {
    this.toggle.set(!this.toggle());
  }

}
