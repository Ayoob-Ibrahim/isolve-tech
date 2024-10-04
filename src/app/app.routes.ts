import { Routes } from '@angular/router';
import { LayoutComponent } from './structure-layout/layout/layout.component';
import { DisplayEmployeeComponent } from './pages/display-employee/display-employee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';


export const routes: Routes = [


    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'employee', component: DisplayEmployeeComponent },
            { path: 'add-employee', component: AddEmployeeComponent },
        ]
    },
];

