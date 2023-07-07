import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Get_Students,deleteStudent,studentsearch } from '../schema/student.schema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss'],
})
export class StudentlistComponent implements OnInit {
  title = 'demo_client';
  allStudent: any;
  selectedStudent: string = '';
  loading = true;
  offset: number = 0;
  count: number = 0;
  error: any;
  selectedroll:any;
  
  constructor(private apollo: Apollo, private router: Router) {}

  ngOnInit() {
    this.searchBystudent();
  }
  
  searchBystudent() {
    this.apollo
      .watchQuery<any>({
        query: Get_Students,
        variables: {
          filter: {
            name:this.selectedStudent,
          }
        },
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.allStudent = data.getAllStudents.students;
        this.loading = loading;
      });
  }

  editStudent(studentid: any) {
    this.router.navigate(['addstudent/',studentid]);
  }

  deleteStudent(studentid: any) {
    if(confirm("Are you sure to delete")) {
      this.apollo
      .mutate<any>({
        mutation: deleteStudent,
        variables: {
          deleteStudentId: studentid,
        },
      })
      .subscribe(({ data }) => {
        window.location.reload();
      }, (error) => {
        this.error = error;
      });
    } 
  }
  showPrevious() {
    return this.offset > 0;
  }

  showNext() {
    return this.offset + 5 < this.count;
  }

  async onPrevious() {
    this.offset -= 5;
    await this.searchBystudent();
  }

  async onNext() {
    this.offset += 5;
    await this.searchBystudent();
  }
}
