import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  Id:any;
  usersData:any;
  constructor(myActive:ActivatedRoute,public myService:ServiceService,public router:Router){
    this.Id = myActive.snapshot.params['id'];
    
  }  ngOnInit(): void {
  
    console.log(this.myService.GetAllUsers().subscribe({
      next:(data)=>{this.usersData = data;
         },
      error:(err)=>{console.log(err)}}
    ));
  }
  delete(Id:any){
    if (confirm('Are you sure to delete ?')){
    this.myService.DeleteUser(Id).subscribe(
      data=> { 
        this.myService.GetAllUsers();
      }
    )
  
  }}
  update(id:any){
    this.router.navigate(['/Update',id])
  }
 

}
