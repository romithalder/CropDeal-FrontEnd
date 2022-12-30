import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  pass:string="";
  cpass:string="";
  msg:string="The password should match";

  constructor(private adminService: AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  register(registerForm: NgForm){
    this.adminService.registerAdmin(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        alert("You have successfully registerd !");
        this.router.navigateByUrl('/adminLogin');
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
