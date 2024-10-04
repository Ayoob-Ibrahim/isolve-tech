import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TableComponent } from '../../custom-components/table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-employee',
  standalone: true,
  imports: [TableComponent, CommonModule],
  templateUrl: './display-employee.component.html',
  styleUrl: './display-employee.component.scss'
})
export class DisplayEmployeeComponent {
  private router: Router = inject(Router)

  grid_data_emitter(data: object) {
    console.log(data)
  }

  addEmployee() {
    this.router.navigate(['/add-employee']);
  }
}
