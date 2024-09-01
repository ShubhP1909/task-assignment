import { Injectable } from '@angular/core';
import { Employee } from '../constant/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  private employees: Employee[] = [
    { id: 1, name: 'John Doe', position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', position: 'Project Manager' },
    { id: 3, name: 'Michael Brown', position: 'UX Designer' },
    { id: 4, name: 'Emily Davis', position: 'Data Analyst' },
    { id: 5, name: 'David Wilson', position: 'HR Manager' },
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }
}
