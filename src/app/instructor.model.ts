export interface Instructor {
    numInstructor?: number;
    firstName?: string;
    lastName?: string;
    dateOfHire?: Date;
    courses?: Course[];
}

export interface Course {
    // Define properties of the Course entity if needed
    courseId?: number;
    courseName?: string;
    // Add other properties as needed
}
