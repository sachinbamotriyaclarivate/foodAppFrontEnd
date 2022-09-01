import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AddBranchComponent } from './branch/add-branch/add-branch.component';
import { BranchDetailsComponent } from './branch/branch-details/branch-details.component';
import { EditBranchComponent } from './branch/edit-branch/edit-branch.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthenticatedGuard } from './guard/authenticated.guard';
import { BranchManagerGuard } from './guard/branch-manager.guard';
import { BranchGuard } from './guard/branch.guard';
import { ItemGuard } from './guard/item.guard';
import { MenuGuard } from './guard/menu.guard';
import { OrderGuard } from './guard/order.guard';
import { StaffGuard } from './guard/staff.guard';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { EditItemComponent } from './item/edit-item/edit-item.component';
import { ItemDetailsComponent } from './item/item-details/item-details.component';
import { LoginComponent } from './login/login.component';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { AdminDetailsComponent } from './user/admin-details/admin-details.component';
import { BranchManagerDetailsComponent } from './user/branch-manager-details/branch-manager-details.component';
import { EditAdminComponent } from './user/edit-admin/edit-admin.component';
import { EditBranchManagerComponent } from './user/edit-branch-manager/edit-branch-manager.component';
import { EditStaffComponent } from './user/edit-staff/edit-staff.component';
import { StaffDetailsComponent } from './user/staff-details/staff-details.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:[AuthenticatedGuard]},
  {path:"addUser",component:AddUserComponent},
  {path:"login",component:LoginComponent},
  {path:"add-branch",component:AddBranchComponent,canActivate:[AuthenticatedGuard,BranchGuard]},
  {path:"branch-details",component:BranchDetailsComponent,canActivate:[AuthenticatedGuard,BranchGuard]},
  {path:"edit-branch/:branchId",component:EditBranchComponent,canActivate:[AuthenticatedGuard]},
  {path:"add-menu",component:AddMenuComponent,canActivate:[AuthenticatedGuard,BranchManagerGuard]},
  {path:"menu-details",component:MenuDetailsComponent,canActivate:[AuthenticatedGuard,MenuGuard]},
  {path:"add-item",component:AddItemComponent,canActivate:[AuthenticatedGuard,ItemGuard]},
  {path:"item-details",component:ItemDetailsComponent,canActivate:[AuthenticatedGuard,ItemGuard]},
  {path:"edit-item/:itemId",component:EditItemComponent,canActivate:[AuthenticatedGuard]},
  {path:"add-order",component:AddOrderComponent,canActivate:[AuthenticatedGuard,OrderGuard]},
  {path:"branchManager-details",component:BranchManagerDetailsComponent,canActivate:[AuthenticatedGuard,AdminGuard]},
  {path:"edit-branchManager/:branchManagerId",component:EditBranchManagerComponent},
  {path:"staff-details",component:StaffDetailsComponent,canActivate:[AuthenticatedGuard,StaffGuard]},
  {path:"admin-details",component:AdminDetailsComponent,canActivate:[AuthenticatedGuard,AdminGuard]},
  {path:"order-details",component:OrderDetailsComponent,canActivate:[AuthenticatedGuard]},
  {path:"edit-order/:id",component:EditOrderComponent},
  {path:'edit-admin/:adminId',component:EditAdminComponent},
  {path:'edit-staff/:staffId',component:EditStaffComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
