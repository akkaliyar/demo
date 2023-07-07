import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddclassComponent } from './addclass/addclass.component';
import { ClasslistComponent } from './classlist/classlist.component';
const routes: Routes = [
  {
    path: '',
    component: StudentlistComponent,
  },
  {
    path: 'addstudent/:studentid',
    component: AddstudentComponent,
  },
  {
    path: 'addstudent',
    component: AddstudentComponent,
  },

  {
    path: 'studentlist',
    component: StudentlistComponent,
  },
  {
    path: 'classlist',
    component: ClasslistComponent,
  },
  {
    path: 'addclass/:classid',
    component: AddclassComponent,
  },
  {
    path: 'addclass',
    component: AddclassComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
