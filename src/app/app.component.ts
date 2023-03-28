import { Component,OnInit } from '@angular/core';
// import Api from './../files/Api.json';

interface USERS{
  id:Number;
  firstName:string,
  lastName:string,
  age:number,
  gender:string,
  email:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular5';

  constructor(){
  };
  ngOnInit(): void {
    
  }
}
