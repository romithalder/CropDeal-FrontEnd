import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  API='http://localhost:8999';

  public registerAdmin(adminData: any){
    return this.http.post('http://localhost:8089/admin',adminData);
  }
}
