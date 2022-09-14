import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth.guard';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PostComponent } from './post/post.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,canActivate:[AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'square', component: SquareComponent },
      { path: 'databinding', component: DatabindingComponent },
      { path: 'eventbinding', component: EventbindingComponent },
      { path: 'twowaybinding', component: TwowaybindingComponent },
      { path: 'rectangle', component: RectangleComponent },
      { path: 'event registration', component: EventRegistrationComponent },
      { path: 'student registration', component: StudentregistrationComponent },
      { path: 'cart', component: CartComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'gpay', component: GpayComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'account', component: AccountComponent },
      { path: 'item', component: ItemComponent },
      { path: 'post', component: PostComponent },
      {path:'create-user',component:CreateUserComponent},
      { path: 'create-vehicle', component:CreateVehicleComponent,canDeactivate:[NotifyGuard]},
      { path: 'mail', component: MailComponent },
    ],
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
