// import { Component, OnInit } from '@angular/core';
// import {CustomerService} from "../customer.service";
// import {Router} from "@angular/router";
// import { Customer } from '../customer';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// @Component({
//   selector: 'app-customer-add',
//   templateUrl: './customer-add.component.html',
//   styleUrls: ['./customer-add.component.css',],
// })
// export class CustomerAddComponent implements OnInit{
//   customer: Customer=new Customer();

//   constructor(private formBuilder: FormBuilder,private router: Router, private customerService: CustomerService) { }
//    addForm: FormGroup;
   
//    ngOnInit() {
//      this.addForm=this.formBuilder.group({
//       emailAddress: ['',Validators.required],
//       customerFullName: ['',Validators.required],
//       password: ['',Validators.required],
//       phoneNumber: ['',Validators.required],
//       address: ['',Validators.required],
//       city: ['',Validators.required],
//       zipCode: ['',Validators.required],
//       country: ['',Validators.required],
//      });
//     }
//    createUser(): void{
//     this.customerService.createUser(this.customer).subscribe(data =>{
//       alert("Customer created successfully");
//     });
// };
// }


import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";
import { Customer } from '../customer';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css',],
})
export class CustomerAddComponent implements OnInit{
  customer: Customer=new Customer();
  form =new FormGroup({
    emailAddress: new FormControl('',Validators.required),
      customerFullName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      phoneNumber: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      zipCode:new FormControl('',Validators.required),
      country: new FormControl('',Validators.required),
  })
  constructor(private formBuilder: FormBuilder,private router: Router, private customerService: CustomerService) { }
   addForm: FormGroup;
   
   ngOnInit() {
     
    }
   createUser(): void{
    this.customerService.createUser(this.customer).subscribe(data =>{
      alert("Customer created successfully");
    });
};
}