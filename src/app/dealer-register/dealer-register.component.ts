import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DealerService } from '../dealer.service';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-dealer-register',
  templateUrl: './dealer-register.component.html',
  styleUrls: ['./dealer-register.component.css']
})
export class DealerRegisterComponent implements OnInit {

  Password:string="";
  CPassword:string="";
  mob:string="";
  msg:string="The password should match";
  mobBool:boolean=false;

  constructor(private dealerService: DealerService, private router:Router) { 
    
  }

  ngOnInit(): void {
  }

  register(registerForm: NgForm){
    if(this.Password == this.CPassword) {
      this.dealerService.registerFarmer(registerForm.value).subscribe(
        (resp) => {
          console.log(resp);
          registerForm.reset();
          alert("You have successfully registerd !");
          this.router.navigateByUrl('/dealerLogin');
        },
        (err) => {
          console.log(err);
          alert("the Farmer with the same name/Adhar Id already exist, Please Log in !")
        }
      );
    }
    else{
      alert("The Password and Confirm Password is not Matching");
    }
   
    
  }

  ValidateMobile():any {
    if(this.mob.length < 10){
      return "the Mobile number provided must be a of 10 digit";
    }

  }

}
