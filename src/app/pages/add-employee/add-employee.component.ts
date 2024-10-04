import { Component } from '@angular/core';
import { FormsComponent } from '../../custom-components/forms/forms.component';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {

}
