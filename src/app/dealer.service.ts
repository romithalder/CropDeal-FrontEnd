import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor(private http: HttpClient) { }

  public registerFarmer(DealerData: any){
    return this.http.post('http://localhost:8081/dealer',DealerData);
  }

  public getDealers() {
    return this.http.get('http://localhost:8081/dealer');
  }

  deleteDealer(id: string): Observable<Object>{
    return this.http.delete("http://localhost:8081/dealer/"+id);
  }

  updateDealer(id: string, farmer:any): Observable<Object>{
    return this.http.put("http://localhost:8081/dealer/"+id, farmer);
  }
}
