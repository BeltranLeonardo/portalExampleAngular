import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'https://localhost:5001';


  constructor(private http: HttpClient) { }

  login(user: number, password: string): Observable<any> {
    var option = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const body = {
      "client_number" : user,
      "password": password
    }
    return this.http.post<any>(`${this.apiUrl}/api/sp_web_userFlotilla`,body,option);
  }
}
