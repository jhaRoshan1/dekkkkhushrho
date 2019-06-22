import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Customer } from '../customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
 customers: Customer[];
  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getUsers().
    subscribe(data=>{
      this.customers=data;

    });
  }
  addUser(): void {
    this.router.navigate(['register']);
  };
}
