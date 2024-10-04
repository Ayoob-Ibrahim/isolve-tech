import { Component } from '@angular/core';
import { Menu } from '../../interface/common.interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


export const menu: Menu[] = [

  { label: 'Employee List', url: "/employee", icon: 'info' },
  { label: 'Add Employee', url: "/add-employee", icon: 'info' },
]
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  MenuList: Menu[] = []
  ngOnInit(): void {
    this.MenuList = [...menu]
  }
}
