import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { Class } from '../models/class.model';

import {
  Get_StudentByIdId,
  AddNewStudent,
  UpdateStudent,
} from '../schema/student.schema';
import { GetAllClasses } from '../schema/class.schema';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss'],
})
export class AddstudentComponent implements OnInit {
  title = 'demo_client';
  AllClass: Class[] = [];
  error: any;
  success:any;
  selectedStudent: any = '';
  studentid:any;
  student = {
    id: 0,
    name: '',
    address: '',
    roll: '',
    father:"",
    dob: "",
    classId:""
  };
  studentForms = new FormGroup({
    name: new FormControl('',[Validators.required]),
    father: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    classId: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required]),
    roll: new FormControl('',[Validators.required]),
  });
  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.allclass();
    console.log(this.studentid);
    this.route.params.subscribe((params) => {
      this.studentid = params['studentid'];
      if(this.studentid){
        this.allStudents(this.studentid);
      }
    });

  }
  allclass() {
    this.apollo
      .watchQuery({
        query: GetAllClasses,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.AllClass = data.getAllClasses.classes;
      });
  }
  allStudents(id: any) {
    this.apollo
      .watchQuery({
        query: Get_StudentByIdId,
        variables: {
          getStudentByIdId: id,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.selectedStudent = data.getStudentById;
        this.student = {
          id: this.selectedStudent.id,
          name: this.selectedStudent.name,
          address: this.selectedStudent.address,
          roll: this.selectedStudent.roll,
          father: this.selectedStudent.father,
          dob: this.selectedStudent.dob,
          classId:this.selectedStudent.classId
        };
        this.error = error;
      });
  }

  addStudent() {
    if(!this.studentForms.valid) {
      this.studentForms.markAllAsTouched();
      return;
    }
    this.apollo
      .mutate({
        mutation: AddNewStudent,
        variables: {
          input: {
            name: this.studentForms.value.name,
            father: this.studentForms.value.father,
            address: this.studentForms.value.address,
            classId: '649bf50b3f5c69a5fbbbda78',
            //classId: this.studentForms.value.classId,
            dob: this.studentForms.value.dob,
            roll: this.studentForms.value.roll,
          },
        },
      })
      .subscribe(
        ({ data }: any) => {
          this.success ="Added Sucessfully";
          //this.student = data.getStudentById;  
          setTimeout(() =>{
            //window.location.reload();
            this.router.navigateByUrl('/');
         }, 2000);
        },
        (error) => {
          this.error = 'Please provide all the required values!';
        }
      );
  }
  

  updateStudent(studentid:any) {
    if(!this.studentForms.valid) {
      this.studentForms.markAllAsTouched();
      return;
    }
    this.apollo
      .mutate<any>({
        mutation: UpdateStudent,
        variables: {
          updateStudentId: studentid,
          input: {
            name: this.studentForms.value.name,
            father: this.studentForms.value.father,
            address: this.studentForms.value.address,
            classId: this.studentForms.value.classId,
            dob: this.studentForms.value.dob,
            roll: this.studentForms.value.roll,
          },
        },
      })
      .subscribe(
        ({ data }: any) => {
          //this.student = data.getStudentById;
          this.success ="Updated Sucessfully";
          setTimeout(() =>{
            //window.location.reload();
            this.router.navigateByUrl('/');
         }, 2000);
        },
        (error) => {
          this.error = error;
        }
      );
  }
}
