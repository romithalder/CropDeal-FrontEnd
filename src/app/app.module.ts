import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { ChooseComponent } from './choose/choose.component';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FarmerRegisterComponent } from './farmer-register/farmer-register.component';
import { HttpClientModule } from '@angular/common/http';
import { CropComponent } from './crop/crop.component';
import { BankComponent } from './bank/bank.component';
import { DealerLoginComponent } from './dealer-login/dealer-login.component';
import { DealerRegisterComponent } from './dealer-register/dealer-register.component';
import { AllCropsComponent } from './all-crops/all-crops.component';
import { PaymentComponentComponent } from './payment-component/payment-component.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdmincropComponent } from './admincrop/admincrop.component';
import { FarmerControlComponent } from './farmer-control/farmer-control.component';
import { DealerControlComponent } from './dealer-control/dealer-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ChooseComponent,
    FarmerLoginComponent,
    FarmerRegisterComponent,
    CropComponent,
    BankComponent,
    DealerLoginComponent,
    DealerRegisterComponent,
    AllCropsComponent,
    PaymentComponentComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AdmincropComponent,
    FarmerControlComponent,
    DealerControlComponent,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
