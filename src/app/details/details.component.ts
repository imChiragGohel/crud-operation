import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // index: any;
  // member: any;
  // Form1: FormGroup;
  // IsEdit = true;

  //@ViewChild('ToDoModel') ToDoModel: ModalDirective;
  
  constructor(private service: GetdataService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router) {

    // this.Form1 = this.fb.group({
    //   name: ['', Validators.required],
    //   lname: ['', Validators.required],
    //   mo: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
    //   age: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{2,3}')])],
    //   email: [null, Validators.compose([Validators.required, CustomValidators.email])],
    //   gender: [''],
    //   // hobies: [''],
    //   // movies: [''],
    //   // clicket: [''],
    //   // chess: [''],
    // });
  }

  ngOnInit() {

    // var id = localStorage.getItem('Id');
    // this.index = id;
    // id ? this.GetMember(+id) : this.IsEdit = false;
    // //this.showModel();
    // this.ToDoModel.show();
  }

  // validation_messages = {
  //   'mo': [{ type: 'required', message: 'Mobile Number Required..' }, { type: 'pattern', message: 'Mobile Number must enter 10 digit' }],
  //   'age': [{ type: 'required', message: 'Age Required..' }, { type: 'pattern', message: 'Age must be 2 either 3 digit' }],
  //   'email': [{ type: 'required', message: 'Email Required..' }, { type: 'email', message: 'Email id proper enter' }]
  // }

  // Save($ev, values) {
  //   $ev.preventDefault();
  //   if (this.Form1.valid) {
  //     if (this.IsEdit) {
  //       var body = {
  //         id: +this.index,
  //         name: values.name,
  //         lname: values.lname,
  //         mo: values.mo,
  //         age: values.age,
  //         gender: values.gender,
  //         // hobies: {
  //         //   cricket: values.hobies.cricket,
  //         //   movies: values.hobies.movies,
  //         //   chess: values.hobies.chess,
  //         // },
  //         email: values.email
  //       }
  //       this.service.setMember(body);
  //     } else {
  //       this.service.addMember(values);
  //     }
  //     this.router.navigate(['/List']);
  //   }

  //}

  // GetMember(id: number) {
  //   this.service.getMember(id)
  //     .subscribe(member => {
  //       this.member = member;
  //       // console.log(member);
  //       this.Form1.patchValue({
  //         name: member.name,
  //         lname: member.lname,
  //         mo: member.mo,
  //         age: member.age,
  //         gender: member.gender,
  //         // hobies: {
  //         //   cricket: member.hobies.cricket,
  //         //   movies: member.hobies.movies,
  //         //   chess: member.hobies.chess,
  //         // },
  //         email: member.email
  //       });
  //     });
  // }

  // Back() {
  //   this.location.back();
  // }
}
