import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  Id=0;
  user:any;
  constructor(myActive:ActivatedRoute,public myService:ServiceService){
    this.Id = myActive.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myService.GetUserById(this.Id).subscribe(
      {
        next:(data)=>{
          this.user = data ;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }
  
}
