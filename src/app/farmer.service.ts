import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  

  constructor(private http: HttpClient) { }

  API='http://localhost:8999';

  public registerFarmer(farmerData: any){
    return this.http.post('http://localhost:8082/farmer',farmerData);
  }

  public getCrops() {
    return this.http.get('http://localhost:8082/farmer/crops');
  }

  public getFarmers() {
    return this.http.get('http://localhost:8082/farmer');
  }


  public addCrops(CropData: any){
    return this.http.post('http://localhost:8082/farmer/Postcrops',CropData);
  }

  deleteCrop(id: string): Observable<Object>{
    return this.http.delete("http://localhost:8082/crop/"+id);
  }

  deleteFarmer(id: string): Observable<Object>{
    return this.http.delete("http://localhost:8082/farmer/"+id);
  }

  updateCrop(id: string, Crop:any): Observable<Object>{
    return this.http.put("http://localhost:8084/crop/"+id, Crop);
  }

  updateFarmer(id: string, farmer:any): Observable<Object>{
    return this.http.put("http://localhost:8082/farmer/"+id, farmer);
  }

  public addBank(BankData: any){
    return this.http.post('http://localhost:8085/bank',BankData);
  }

  public getBanks() {
    return this.http.get('http://localhost:8085/bank');
  }
}
