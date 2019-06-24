import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";
import { Customer } from '../customer';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css',],
})
export class CustomerAddComponent implements OnInit{
  customer: Customer=new Customer();
  creatForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private customerService: CustomerService) { }
  
   
   ngOnInit() {
     this.creatForm=this.formBuilder.group({
      emailAddress: ['',Validators.required],
      customerFullName: ['',Validators.required],
      password: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      address: ['',Validators.required],
      city: ['',Validators.required],
      zipCode: ['',Validators.required],
      country: ['',Validators.required],
     });
     
    }
   createUser(): void{
     console.log(this.creatForm.value);
    if(!this.creatForm.invalid){
    this.customerService.createUser(this.creatForm.value).subscribe(data =>{
      alert("Customer created successfully");
      this.router.navigate(['']);
    });
}
else{
  alert("Enter all the details");
  this.router.navigate(['']);
}
}
}





