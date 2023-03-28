import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private Base_URL = "http://localhost:3000/users" ;
  GetAllUsers(){
  return this.myClient.get(this.Base_URL);
}
  GetUserById(id:any){
  return this.myClient.get(this.Base_URL+"/"+id);
}
AddUser(user:any){
  return this.myClient.post(this.Base_URL,user);
}
UpdateUser(id:any,UpdatedUser:any){
  return this.myClient.put(this.Base_URL+"/"+id,UpdatedUser);
}
DeleteUser(id:any){
  return this.myClient.delete(this.Base_URL+"/"+id)

}
getUpdatedUser(id:any){
  return this.myClient.get(this.Base_URL + "/" + id)
}

  constructor(public myClient:HttpClient) { 
  }
}
