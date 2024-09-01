import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(private http: HttpClient) { }

  queues = [
    { label: 'All queue', value: 'all' },
    { label: 'Employee', value: 'Employees' },
    { label: 'Complain', value: 'service_complain' },
    { label: 'Feedback', value: 'product_feedback' },
    { label: 'Loan', value: 'home_loan' },
  ];

  getPropertyName(queueType: string): string {
    switch (queueType) {
      case 'Employees':
        return 'employeeList';
      case 'home_loan':
        return 'homeLoanList';
      case 'product_feedback':
        return 'productFeedbackList';
      case 'service_complain':
        return 'serviceComplainList';
      default:
        return '';
    }
  }

  getTablePropertyName(queueType: string): string {
    switch (queueType) {
      case 'Employees':
        return 'tableEmployeeList';
      case 'home_loan':
        return 'tableHomeLoanList';
      case 'product_feedback':
        return 'tableProductFeedbackList';
      case 'service_complain':
        return 'tableServiceComplainList';
      default:
        return '';
    }
  }

  getAllPeopleInQueue(queue): Observable<any> {
    return this.http.get('https://chatintract.azurewebsites.net/api/dummy/getAllPeopleInQueue?queue_name=' + queue)
   }
}
