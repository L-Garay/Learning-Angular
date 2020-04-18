import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './interfaces/employee.interface';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  private _url: string = '/assets/data/employees.json';
  constructor(private http: HttpClient) {}
  getEmployees(): Observable<IEmployee[]> {
    try {
      return this.http.get<IEmployee[]>(this._url);
    } catch (error) {
      throwError(error);
    }
  }
}
