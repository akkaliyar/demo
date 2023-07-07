import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { AddclassComponent } from './addclass/addclass.component';

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    StudentlistComponent,
    NavbarComponent,
    ClasslistComponent,
    AddclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
