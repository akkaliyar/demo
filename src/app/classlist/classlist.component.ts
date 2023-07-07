import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GetAllClasses,DeleteClass } from '../schema/class.schema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.scss']
})
export class ClasslistComponent implements OnInit {
  title = 'demo_client';
  allclass: any;
  selectedclass: string = '';
  loading = true;
  offset: number = 0;
  count: number = 0;
  error: any;
  selectedroll:any;
  
  constructor(private apollo: Apollo, private router: Router) {}

  ngOnInit() {
    this.searchByclass();
  }

  searchByclass() {
    this.apollo
      .watchQuery<any>({
        query: GetAllClasses,
        variables: {
          filter: {
            name:this.selectedclass,
          },
        },
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.allclass = data.getAllClasses.classes;
        this.loading = loading;
      });
  }
  editClass(classid: any) {
    this.router.navigate(['addclass/',classid]);
  }

  deleteClass(classid: any) {
    if(confirm("Are you sure to delete")) {
      this.apollo
      .mutate<any>({
        mutation: DeleteClass,
        variables: {
          deleteClassId: classid,
        },
      })
      .subscribe(({ data }) => {
        window.location.reload();
        //this.allStudent = data.deleteStudent;
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
    await this.searchByclass();
  }

  async onNext() {
    this.offset += 5;
    await this.searchByclass();
  }
}
