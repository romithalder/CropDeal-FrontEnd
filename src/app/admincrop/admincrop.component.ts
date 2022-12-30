import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-admincrop',
  templateUrl: './admincrop.component.html',
  styleUrls: ['./admincrop.component.css']
})
export class AdmincropComponent implements OnInit {

  CropDetails = null as any;

  CropToUpdate={
    id:"",
    type:"",
    quantity:"",
    address:"",
  }

  constructor(private farmerService: FarmerService) {
    this.getCropDetails();
   }

  ngOnInit(): void {
  }

  register(registerForm: NgForm){
    this.farmerService.addCrops(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getCropDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCropDetails() {
    this.farmerService.getCrops().subscribe(
      (resp) => {
        console.log(resp);
        this.CropDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteCrop(id: string){
    this.farmerService.deleteCrop(id).subscribe( data => {
      console.log(data);
      this.getCropDetails();
    })
  }

  edit(id:string,crop:any){
    this.CropToUpdate=crop;
  }

  updateCrop(){
    this.farmerService.updateCrop(this.CropToUpdate.id,this.CropToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  

}
