import { AfterViewInit, Component, EventEmitter, inject, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { jqxGridComponent, jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { gridinfo } from '../../interface/common.interface';
import DataJson from '../../mock-json/data.json'
import jqxcols from '../../mock-json/jqxcols.json'
import { DataservicesService } from '../../service/dataservices.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [jqxGridModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnChanges, AfterViewInit {
  @ViewChild('grid', { static: false }) DC: jqxGridComponent;
  @Input() datavalues: any;
  @Output() grid_data_emitter = new EventEmitter();
  @Input() GridInfo: gridinfo | undefined;
  columns: any = [];
  orginalData = [];

  private dataService: DataservicesService = inject(DataservicesService)

  data = []
  constructor(

  ) {

  }
  gridHeight: string = '400px';

  source = new jqx.dataAdapter({
    localData: this.orginalData,
  });



  private dataSubscription: Subscription;
  ngAfterViewInit(): void {
    this.DC.attrScrollbarsize = 8;
    this.gridData(this.dataService.initialData.data, this.dataService.initialData.cols)
  }




  // newfunc(type) {
  //   let data = this.orginalData;
  //   if (this.orginalData.length == 0) {
  //     return null;
  //   }

  //   let coloumnArray = [];

  //   this.DC.attrColumns.map((p) => {
  //     coloumnArray.push(p.displayfield);
  //   });

  //   for (let i = 0; i < data.length; i++) {
  //     let k = Object.keys(data[i]);
  //     for (let j = 0; j < k.length; j++) {
  //       if (coloumnArray.includes(k[j]) == false) {
  //         delete data[i][k[j].toString()];
  //       }
  //     }
  //   }

  //   let forExcel = [];
  //   data.map((val) => {
  //     let newArray = Object.values(val);
  //     forExcel.push(newArray);
  //   });
  //   var propertyOrder = [];
  //   JSON.parse(this.data.jqdetails)['columns'].map((data) => {
  //     propertyOrder.push(data.displayfield);
  //   });

  //   const reorderProperties = (obj, order) => {
  //     return order.map((key) => obj[key]);
  //   };

  //   const reorderedArray = data.map((obj) =>
  //     reorderProperties(obj, propertyOrder)
  //   );

  //   var Header = Object.keys(reorderedArray[0]);

  //   if (type == 'excel') {
  //     let reportData = {
  //       title: this.data.linkscreenname,
  //       data: reorderedArray,
  //       headers: propertyOrder,
  //     };
  //     // this.excelExport.exportExcel(reportData);
  //   } else {
  //     let array = reorderedArray.map((d) => Object.values(d));
  //     // console.log(this.data)
  //     // this.commonService.createPdf(
  //     //   propertyOrder,
  //     //   array,
  //     //   this.data,
  //     //   this.data.linkscreenname
  //     // );
  //   }
  // }





  ngOnChanges() {
    if (this.GridInfo) this.gridHeight = (`${this.GridInfo.height}` || '400px');
  }



  gridData(res, colums) {
    this.data = res;
    this.orginalData = res;
    this.source = new jqx.dataAdapter({
      localData: this.orginalData,
    });
    this.columns = colums;
  }

  cellClickRow(e) {
    let local = this.data[e.args.rowindex];
    this.grid_data_emitter.emit(local);
  }


  ngOnDestroy(): void {

  }
}
