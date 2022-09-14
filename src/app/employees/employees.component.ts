import { Component, OnInit } from '@angular/core';
import { Employees1 } from '../employee1';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  public name: string = '';
  public age: number = 0;
  public company: string = '';
  public package: number = 0;

  public employees: Employees1[] = [];

  constructor() {}

  ngOnInit(): void {}
  register() {
    this.employees.push({
      name: this.name,
      age: this.age,
      company: this.company,
      package: this.package,
    });
  }
  delete(i: number) {
    this.employees.splice(i, 1);
  }
  clear() {
    this.employees = [];
  }
  packagelowtohight() {
    this.employees = this.employees.sort((a, b) => a.package - b.package);
  }
  packagehighttolow() {
    this.employees = this.employees.sort((a, b) => b.package - a.package);
  }
}
