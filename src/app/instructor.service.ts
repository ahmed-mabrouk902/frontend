import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from './instructor.model';

@Injectable({
  providedIn: 'root',

})
export class InstructorService {
  readonly apiUrl = 'http://193.168.33.10:8089/api'; // Replace with your Spring Boot server URL

  constructor(private http: HttpClient) { }

  getAllInstructors(): Observable<Instructor[]> {
    console.log('Fetching instructors...');
    return this.http.get<Instructor[]>(this.apiUrl + '/instructor/all');
  }

  addInstructor(instructor: Instructor): Observable<Instructor> {
    return this.http.post<Instructor>(this.apiUrl + '/instructor/add', instructor);
  }
}
