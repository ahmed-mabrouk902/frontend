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
        error => {
          console.error(error);
          // Handle specific error scenarios if needed
          // For example, display an error message to the user
        }
      );
    } else {
      // Handle the case where the form is not valid (e.g., show error messages)
    }
  }
}