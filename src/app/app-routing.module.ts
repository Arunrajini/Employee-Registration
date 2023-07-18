import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  {
    path:'',component:AddUserComponent
  },
  {
    path:'adduser',component:AddUserComponent
  },
  {
    path:'listuser',component:UserListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
