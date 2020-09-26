import {NgModule} from  '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
const routes:Routes=[{path:'',component: HomeComponent}
,{path:'AddUser',component:AddUserComponent}];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule
{

}
export const routingComponents = [HomeComponent,AddUserComponent]