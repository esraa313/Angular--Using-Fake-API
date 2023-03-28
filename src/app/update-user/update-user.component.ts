import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  Id:any;
  i:any;
  user:any
firstName:any;
lastName:any;
Age:any;
gender:any;
email:any;
  val:any;
  constructor(public myActive:ActivatedRoute,public myService:ServiceService,public router:Router){
    this.Id = myActive.snapshot.params['id'];
  }
  ngOnInit(): void {
    let sub = this.myActive.params.subscribe( params =>{
this.val = params['id'];
    });
    console.log(this.val);
this.myService.getUpdatedUser(this.val).subscribe(
  {
    next:(data)=>{
      this.user = data ;
      console.log(this.user)
    },
    error:(err)=>{console.log(err)}
  }
);


  }update(firstName:any,lastName:any,Age:any,gender:any,email:any)
  {
    let newUser={firstName,lastName,Age,gender,email};
    this.myService.UpdateUser(this.user.id,newUser).subscribe()
 }
}

