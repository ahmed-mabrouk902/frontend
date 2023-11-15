// instructor.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Instructor } from './instructor.model';
import { ReactiveFormsModule } from '@angular/forms';
import { InstructorService } from './instructor.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  instructors: Instructor[] = [];
  instructorForm: FormGroup;

  constructor(private instructorService: InstructorService, private fb: FormBuilder) {
    this.instructorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfHire: [null, Validators.required],
      courses: this.fb.group({
        level: [null, Validators.required],
        typeCourse: [null, Validators.required],
        support: [null, Validators.required],
        price: [null, Validators.required],
        timeSlot: [null, Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this.loadInstructors();
  }

  loadInstructors(): void {
    this.instructorService.getAllInstructors().subscribe(
      data => this.instructors = data,
      error => console.error(error)
    );
  }

  addInstructor(): void {
    if (this.instructorForm.valid) {
      const newInstructor: Instructor = this.instructorForm.value;
      this.instructorService.addInstructor(newInstructor).subscribe(
        data => {
          this.instructors.push(data);
          this.instructorForm.reset();
        },
        error => console.error(error)
      );
    }
  }
}