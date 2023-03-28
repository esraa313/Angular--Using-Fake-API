import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ErrorComponent } from './error/error.component';
import { TableComponent } from './table/table.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:"users",component:TableComponent},
  {path:"",component:TableComponent},
  {path:"users/:id",component:UserDetailsComponent},
  {path:"Add",component:AddUserComponent},
  {path:"Update/:id",component:UpdateUserComponent},
  {path:"Delete",component:TableComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
