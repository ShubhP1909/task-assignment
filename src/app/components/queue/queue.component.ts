import { Component, OnInit } from '@angular/core';
import { IEmployeeList, IHomeLoanList, IProductFeedbackList, IServiceComplainList } from 'src/app/constant/models/employee.model';
import { QueueService } from 'src/app/service/queue.service';

@Component({
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  employeeList: IEmployeeList[] = [];
  homeLoanList: IHomeLoanList[] = [];
  productFeedbackList: IProductFeedbackList[] = [];
  serviceComplainList: IServiceComplainList[] = [];
  tableEmployeeList: IEmployeeList[] = [];
  tableHomeLoanList: IHomeLoanList[] = [];
  tableProductFeedbackList: IProductFeedbackList[] = [];
  tableServiceComplainList: IServiceComplainList[] = [];
  searchInput: string;

  constructor(private queueService: QueueService) {}

  queueList = this.queueService.queues;

  ngOnInit() {
     this.getAllQueueLists();
  }
    
  getAllQueueList(queueType: string) {
    const queueName = this.queueService.getPropertyName(queueType);
    const tableQueueName = this.queueService.getTablePropertyName(queueType);
    this.queueService.getAllPeopleInQueue(queueType).subscribe((res) => {
        this[queueName] = res;
        this[tableQueueName] = res;
    });
  }

  getAllQueueLists() {
    const queueTypes = ['Employees', 'home_loan', 'product_feedback', 'service_complain'];
    queueTypes.forEach((queueType) => {
        this.getAllQueueList(queueType);
    });
  }

  filterData() {
    if(this.searchInput){
        this.employeeList = this.employeeList.filter((val) => val?.name.toLowerCase()?.includes(this.searchInput.toLocaleLowerCase()));
        this.homeLoanList = this.homeLoanList.filter((val) => val?.user_name.toLowerCase()?.includes(this.searchInput.toLocaleLowerCase()));
        this.productFeedbackList = this.productFeedbackList.filter((val) => val?.user_name.toLowerCase()?.includes(this.searchInput.toLocaleLowerCase()));
        this.serviceComplainList = this.serviceComplainList.filter((val) => val?.user_name.toLowerCase()?.includes(this.searchInput.toLocaleLowerCase()));
    } else {
        this.employeeList = this.tableEmployeeList;
        this.homeLoanList = this.tableHomeLoanList;
        this.productFeedbackList = this.tableProductFeedbackList;
        this.serviceComplainList = this.tableServiceComplainList;
    }
  }

  filterQueue(event) {
    this.employeeList = this.tableEmployeeList;
    this.homeLoanList = this.tableHomeLoanList;
    this.productFeedbackList = this.tableProductFeedbackList;
    this.serviceComplainList = this.tableServiceComplainList;
    switch (event) {
        case 'Employees':
            this.homeLoanList = [];
            this.productFeedbackList = [];
            this.serviceComplainList = [];
            break;

        case 'home_loan':
            this.employeeList = [];
            this.productFeedbackList = [];
            this.serviceComplainList = [];
            break;

        case 'product_feedback':
            this.employeeList = [];
            this.homeLoanList = [];
            this.serviceComplainList = [];
            break;

        case 'service_complain':
            this.employeeList = [];
            this.homeLoanList = [];
            this.productFeedbackList = [];
            break;

        default:
            this.employeeList = this.tableEmployeeList;
            this.homeLoanList = this.tableHomeLoanList;
            this.productFeedbackList = this.tableProductFeedbackList;
            this.serviceComplainList = this.tableServiceComplainList;
    }
  }
}
