import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-farmer-register',
  templateUrl: './farmer-register.component.html',
  styleUrls: ['./farmer-register.component.css'],
  
})
export class FarmerRegisterComponent implements OnInit {

  Password:string="";
  CPassword:string="";
  msg:string="The password should match";
  mob:string="";
  mobBool:boolean=false;

  constructor(private farmerService: FarmerService, private router:Router) { }

  ngOnInit(): void {
  }
  register(registerForm: NgForm){
    if(this.Password == this.CPassword) {
      this.farmerService.registerFarmer(registerForm.value).subscribe(
        (resp) => {
          console.log(resp);
          registerForm.reset();
          alert("You have successfully registerd !");
          this.router.navigateByUrl('/farmerLogin');
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
  

}
