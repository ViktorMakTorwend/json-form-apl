import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonFormData } from '../interfaces/jsonInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getFormData(): Observable<JsonFormData> {
    return this.http.get<JsonFormData>('assets/my-form.json');
  }
}
