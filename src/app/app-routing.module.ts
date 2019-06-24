import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import{CustomerListComponent} from './customer-list/customer-list.component'
const routes: Routes = [
  
  { path: 'register', component: CustomerAddComponent },
  { path: 'list-user', component: CustomerListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
