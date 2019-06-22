import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  private baseUrl= 'http://localhost:4444/';

  getUsers() {
    console.log()
    return this.http.get<Customer[]>(this.baseUrl+'getAllCustomerDetails');
  }

  createUser(customer: Customer) {
    console.log(customer.customerFullName);
    return this.http.post(this.baseUrl+'acceptCustomerDetails', customer,httpOptions);
  }
  updateUser(customer: Customer) {
    return this.http.put(this.baseUrl + '/' + customer.emailAddress, customer,httpOptions);
  }
}
