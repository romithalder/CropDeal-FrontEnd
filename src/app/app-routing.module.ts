import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdmincropComponent } from './admincrop/admincrop.component';
import { AllCropsComponent } from './all-crops/all-crops.component';
import { BankComponent } from './bank/bank.component';
import { ChooseComponent } from './choose/choose.component';
import { CropComponent } from './crop/crop.component';
import { DealerControlComponent } from './dealer-control/dealer-control.component';
import { DealerLoginComponent } from './dealer-login/dealer-login.component';
import { DealerRegisterComponent } from './dealer-register/dealer-register.component';
import { FarmerControlComponent } from './farmer-control/farmer-control.component';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { FarmerRegisterComponent } from './farmer-register/farmer-register.component';
import { PaymentComponentComponent } from './payment-component/payment-component.component';


const routes: Routes = [{
  path:'',
  component:ChooseComponent,
  pathMatch:'full'
},
{
  path:'farmerLogin',
  component:FarmerLoginComponent,
  pathMatch:'full'
},
{
  path:'farmerRegister',
  component:FarmerRegisterComponent,
  pathMatch:'full'
},
{
  path:'crop',
  component:CropComponent,
  pathMatch:'full'
},
{
  path:'bank',
  component:BankComponent,
  pathMatch:'full'
},
{
  path:'dealerLogin',
  component:DealerLoginComponent,
  pathMatch:'full'
},
{
  path:'dealerRegister',
  component:DealerRegisterComponent,
  pathMatch:'full'
},
{
  path:'allCrop',
  component:AllCropsComponent,
  pathMatch:'full'
},
{
  path:'payment',
  component:PaymentComponentComponent,
  pathMatch:'full'
},
{
  path:'adminLogin',
  component:AdminLoginComponent,
  pathMatch:'full'
},
{
  path:'adminRegister',
  component:AdminRegisterComponent,
  pathMatch:'full'
},
{
  path:'adminCrop',
  component:AdmincropComponent,
  pathMatch:'full'
}
,
{
  path:'farmerControl',
  component:FarmerControlComponent,
  pathMatch:'full'
},
{
  path:'dealerControl',
  component:DealerControlComponent,
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
