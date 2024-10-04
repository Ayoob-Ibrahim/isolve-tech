import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import DataJson from '../mock-json/data.json'
import jqxcols from '../mock-json/jqxcols.json'
@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  constructor() { }
  initialData = Object.assign({ data: DataJson, cols: jqxcols })
  defaultDept = ['Branch', 'Division', 'HRD', 'OD']

}
