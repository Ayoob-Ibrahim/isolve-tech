import { Component, inject } from '@angular/core';
import { DataservicesService } from '../../service/dataservices.service';
import { PopupComponent } from '../popup/popup.component';
import { CommonModule } from '@angular/common';
import { jqxComboBoxComponent, jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlphabetOnlyDirective } from '../../directive/alphabet-only.directive';
import { OnlyNumbersDirective } from '../../directive/only-numbers.directive';
@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [jqxComboBoxModule, CommonModule, PopupComponent, ReactiveFormsModule, AlphabetOnlyDirective, OnlyNumbersDirective],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  isPop: boolean = false
  dataService: DataservicesService = inject(DataservicesService)
  deptDef: string[];
  desingationData = ['Manager', 'Senior Manager', 'Chief Manager', 'Assistant Manager', 'Collection Manager']
  employee: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employee = this.fb.group({
      name: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      employeeCode: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }


  ngOnInit(): void {
    this.deptdata()
  }

  deptdata() {
    this.deptDef = [... this.dataService.defaultDept]
  }

  popupData(data) {
    this.isPop = data.isPop
    this.deptDef = [...data.dept]
  }

  test() {
    console.log(this.employee)
  }

  submitData(){
    this.dataService.initialData.data
  }

  removeData(){

  }
}
