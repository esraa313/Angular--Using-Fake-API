import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(public myService:ServiceService){

  }
  Add(firstName:any,lastName:any,Age:any,gender:any,email:any){
let newUser={firstName,lastName,Age,gender,email};
this.myService.AddUser(newUser).subscribe()
  }
}
