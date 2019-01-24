import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [StudentService]
})

export class StudentListComponent implements OnInit {

  students: Student[]
  selectedStudent: Student

  constructor(private studentService: StudentService) { }
}
ngOnInit() {
  this.studentService
   .getStudents()
   .then((students: Student[]) => {
     this.students = students.map((student) => {
       return student;
     });
   });
}
private getIndexOfStudent = (studentId: String) => {
  return this.students.findIndex((student) => {
    return student._id === studentId;
  });
}
selectStudent(student: Student) {
  this.selectedStudent = student
}
createNewStudent() {
  var student: Student = {
    name: '',
    email: '',
    present: ''

  };
this.selectStudent(student);
}