import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SquareComponent } from './square/square.component';
import { HomeComponent } from './home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { CartComponent } from './cart/cart.component';
import { EmployeesComponent } from './employees/employees.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgesPipe } from './ages.pipe';
import { CarsComponent } from './cars/cars.component';
import { GpayComponent } from './gpay/gpay.component';

import{HttpClientModule}from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { ItemComponent } from './item/item.component';
import { PostComponent } from './post/post.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CalculatorComponent,
    SquareComponent,
    HomeComponent,
    DatabindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    RectangleComponent,
    EventRegistrationComponent,
    StudentregistrationComponent,
    CartComponent,
    EmployeesComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgesPipe,
    CarsComponent,
    GpayComponent,
    VehicleComponent,
    AccountComponent,
    ItemComponent,
    PostComponent,
    MailComponent,
    CreateVehicleComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
