import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { AddBranchComponent } from './branch/add-branch/add-branch.component';
import { BranchDetailsComponent } from './branch/branch-details/branch-details.component';
import { EditBranchComponent } from './branch/edit-branch/edit-branch.component';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';
import { EditMenuComponent } from './menu/edit-menu/edit-menu.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { ItemDetailsComponent } from './item/item-details/item-details.component';
import { EditItemComponent } from './item/edit-item/edit-item.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { BranchManagerDetailsComponent } from './user/branch-manager-details/branch-manager-details.component';
import { StaffDetailsComponent } from './user/staff-details/staff-details.component';
import { EditBranchManagerComponent } from './user/edit-branch-manager/edit-branch-manager.component';
import { EditStaffComponent } from './user/edit-staff/edit-staff.component';
import { RouterModule } from '@angular/router';
import { AdminDetailsComponent } from './user/admin-details/admin-details.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { HomeComponent } from './home/home.component';
import { EditAdminComponent } from './user/edit-admin/edit-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddUserComponent,
    LoginComponent,
    AddBranchComponent,
    BranchDetailsComponent,
    EditBranchComponent,
    AddMenuComponent,
    MenuDetailsComponent,
    EditMenuComponent,
    AddItemComponent,
    ItemDetailsComponent,
    EditItemComponent,
    AddOrderComponent,
    BranchManagerDetailsComponent,
    StaffDetailsComponent,
    EditBranchManagerComponent,
    EditStaffComponent,
    AdminDetailsComponent,
    OrderDetailsComponent,
    EditOrderComponent,
    HomeComponent,
    EditAdminComponent
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
