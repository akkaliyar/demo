import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { Class } from '../models/class.model';
import {GetClassById,AddNewClass,UpdateClass} from '../schema/class.schema';
import { GetAllClasses } from '../schema/class.schema';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.scss']
})
export class AddclassComponent implements OnInit {
  title = 'demo_client';
  AllClass: Class[] = [];
  error: any;
  success:any;
  selectedclass: any = '';
  classid:any;
  student = {
    id: 0,
    name: '',
    head: '',
    floor: '',
  };
  classForms = new FormGroup({
    name: new FormControl('',[Validators.required]),
    head: new FormControl('',[Validators.required]),
    floor: new FormControl('',[Validators.required]),
  });
  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.allclass();
    this.route.params.subscribe((params) => {
      this.classid = params['classid'];
      if(this.classid){
        this.allClasses(this.classid);
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
  allClasses(id: any) {
    this.apollo
      .watchQuery({
        query: GetClassById,
        variables: {
          getClassId: id,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.selectedclass = data.getClass;
        this.student = {
          id: this.selectedclass.id,
          name: this.selectedclass.name,
          head: this.selectedclass.head,
          floor: this.selectedclass.floor,
        };
        this.error = error;
      });
  }

  addClass() {
    if(!this.classForms.valid) {
      this.classForms.markAllAsTouched();
      return;
    }
    this.apollo
      .mutate({
        mutation: AddNewClass,
        variables: {
          input: {
            name: this.classForms.value.name,
            head: this.classForms.value.head,
            floor: this.classForms.value.floor,
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
  

  updateClass(classid:any) {
    if(!this.classForms.valid) {
      this.classForms.markAllAsTouched();
      return;
    }
    this.apollo
      .mutate<any>({
        mutation: UpdateClass,
        variables: {
          updateClassId: classid,
          input: {
            name: this.classForms.value.name,
            head: this.classForms.value.head,
            floor: this.classForms.value.floor,
          },
        },
      })
      .subscribe(
        ({ data }: any) => {
          //this.student = data.getStudentById;
          this.success ="Updated Sucessfully";
          setTimeout(() =>{
            //window.location.reload();
            this.router.navigateByUrl('/classlist');
         }, 2000);
        },
        (error) => {
          this.error = error;
        }
      );
  }
}
