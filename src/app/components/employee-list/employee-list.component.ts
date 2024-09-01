import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/constant/models/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  navigateToQueue() {
    this.router.navigate(['/queue']);
  }
}
