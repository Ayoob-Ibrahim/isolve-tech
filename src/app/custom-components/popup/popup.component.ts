import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DataservicesService } from '../../service/dataservices.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input() dept: string[]

  newdept: string
  private dataService: DataservicesService = inject(DataservicesService)
  closepopup() {
    this.close.emit({
      'isPop': false,
      "dept": this.dept
    })
  }

  removedept(index: number) {
    this.dept.splice(index, 1)
    this.dataService.defaultDept.splice(index, 1)
  }

  addDept() {
    if (!this.newdept) return;
    this.dept.push(this.newdept)
    this.dataService.defaultDept.push(this.newdept)
    this.newdept = ''
  }
}
