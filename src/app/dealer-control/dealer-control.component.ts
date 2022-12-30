import { Component, OnInit } from '@angular/core';
import { DealerService } from '../dealer.service';

@Component({
  selector: 'app-dealer-control',
  templateUrl: './dealer-control.component.html',
  styleUrls: ['./dealer-control.component.css']
})
export class DealerControlComponent implements OnInit {

  farmers = null as any;
  farmerToUpdate={
    id:"",
    name:"",
    email:"",
    address:"",
    mobile:""
  }
  constructor(private dealerService: DealerService) { 
    this.getFarmerDetails();
  }
  getFarmerDetails() {
    this.dealerService.getDealers().subscribe(
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
    this.dealerService.updateDealer(this.farmerToUpdate.id,this.farmerToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteFarmer(id: string){
    this.dealerService.deleteDealer(id).subscribe( data => {
      console.log(data);
      this.getFarmerDetails();
    })
  }
  


}
