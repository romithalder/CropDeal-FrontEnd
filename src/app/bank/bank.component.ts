import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  banks = null as any;

  constructor(private farmerService: FarmerService) {
    this.getBankDetails();
   }

  ngOnInit(): void {
  }

  addbank(registerForm: NgForm){
    this.farmerService.addBank(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getBankDetails() {
    this.farmerService.getBanks().subscribe(
      (resp) => {
        console.log(resp);
        this.banks = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  }


