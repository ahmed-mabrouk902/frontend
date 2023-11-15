import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from './instructor.model';

@Injectable({
  providedIn: 'root',

})
export class InstructorService {
  private baseUrl = 'http://localhost:8089/api'; // Replace with your Spring Boot server URL

  constructor(private http: HttpClient) { }

  getAllInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(`${this.baseUrl}/all`);
  }

  addInstructor(instructor: Instructor): Observable<Instructor> {
    return this.http.post<Instructor>(`${this.baseUrl}/add`, instructor);
  }
}
