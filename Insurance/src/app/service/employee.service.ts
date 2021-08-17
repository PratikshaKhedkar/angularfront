import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  error(error: any) {
    throw new Error('Method not implemented.');
  }
  success(arg0: string, arg1: { keepAfterRouteChange: boolean; }) {
    throw new Error('Method not implemented.');
  }


  constructor(private http: HttpClient) {
  }
   createEmployee(employee: Employee) {
    return this.http.post(environment.baseurl + '/createEmployee',employee);
  }

  getEmployees() : Observable<any> {
    return this.http.get(environment.baseurl +'/getEmployee');
  }
 
  getEmployeeById(id: number): Observable<any> {
    return this.http.get("http://localhost:8059/serchEmployee/" + id);
  }
  updateEmployee( employee: Employee): Observable<any> {
    return this.http.put(environment.baseurl + '/updateEmployee' , employee, {responseType:'text' as 'json'});
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(environment.baseurl +'/deleteEmployee/' +id,{responseType:'text'}) ;
  }
}

