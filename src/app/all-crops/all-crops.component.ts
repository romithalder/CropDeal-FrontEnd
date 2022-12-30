import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-all-crops',
  templateUrl: './all-crops.component.html',
  styleUrls: ['./all-crops.component.css']
})
export class AllCropsComponent implements OnInit {

  CropDetails = null as any;
  
  constructor(private farmerService: FarmerService) { 
    this.getCropDetails();
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

  ngOnInit(): void {
  }

}
