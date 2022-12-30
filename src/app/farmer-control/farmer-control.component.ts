import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-farmer-control',
  templateUrl: './farmer-control.component.html',
  styleUrls: ['./farmer-control.component.css']
})
export class FarmerControlComponent implements OnInit {
  farmers = null as any;
  farmerToUpdate={
    id:"",
    name:"",
    email:"",
    address:"",
    mobile:""
  }
  constructor(private farmerService: FarmerService) { 
    this.getFarmerDetails();
  }
  getFarmerDetails() {
    this.farmerService.getFarmers().subscribe(
      (resp) => {
        console.log(resp);
        this.farmers= resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }

  
  edit(id:string,farmer:any){
    this.farmerToUpdate=farmer;
  }

  updateFarmer(){
    this.farmerService.updateFarmer(this.farmerToUpdate.id,this.farmerToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteFarmer(id: string){
    this.farmerService.deleteFarmer(id).subscribe( data => {
      console.log(data);
      this.getFarmerDetails();
    })
  }
  


}
