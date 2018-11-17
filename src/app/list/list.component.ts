import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { Datas } from '../mock-data';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Location, JsonPipe } from '@angular/common';
//import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

//const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  p: number = 1;
  list: any;
  list1 = [];
  index: any;
  member: any;
  Form1: FormGroup;
  IsEdit = true;
  model_title: any;
  imageUrl: string;
  selectfile: File;
  search : any;
  //public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  //sorting
  key: string = 'FirstName';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(private service: GetdataService, private fb: FormBuilder,
    private location: Location,
    private router: Router) {
    this.Form1 = this.fb.group({
      name: ['', Validators.required],
      lname: ['', Validators.required],
      mo: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      age: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{2,3}')])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      gender: [''],
      // image: [''],
      hobies: this.fb.group({
        movies: [''],
        cricket: [''],
        chess: ['']
      }),
      //hobies: [''],
      // movies: [''],
      // cricket: [''],
      // chess: [''],
    });
  }

  @ViewChild('ToDoModel') ToDoModel: ModalDirective;

  ngOnInit() {
    this.getData();
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //      console.log('ImageUpload:uploaded:', item, status, response);
    //      alert('File uploaded successfully');
    //  };
  }

  onFileChange($ev) {
    this.selectfile = $ev.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.selectfile);
  }

  validation_messages = {
    'mo': [{ type: 'required', message: 'Mobile Number Required..' }, { type: 'pattern', message: 'Mobile Number must enter 10 digit' }],
    'age': [{ type: 'required', message: 'Age Required..' }, { type: 'pattern', message: 'Age must be 2 either 3 digit' }],
    'email': [{ type: 'required', message: 'Email Required..' }, { type: 'email', message: 'Email id proper enter' }]
  }

  Save($ev, values) {
    $ev.preventDefault();
    if (this.Form1.valid) {
      if (this.IsEdit) {
        var body = {
          id: +this.index,
          name: values.name,
          lname: values.lname,
          mo: values.mo,
          age: values.age,
          gender: values.gender,
          hobies: {
            cricket: values.hobies.cricket,
            movies: values.hobies.movies,
            chess: values.hobies.chess,
          },
          email: values.email,
          // image: this.selectfile.name,
        }
        this.service.setMember(body);
      } else {
        this.service.addMember(values);
      }
      this.ToDoModel.hide();
      //this.router.navigate(['/List']);
      this.getData();
    }
  }

  GetMember(id: number) {
    this.service.getMember(id)
      .subscribe(member => {
        this.member = member;
        // this.imageUrl = member.image;
        this.Form1.patchValue({
          name: member.name,
          lname: member.lname,
          mo: member.mo,
          age: member.age,
          gender: member.gender,
          hobies: {
            cricket: member.hobies.cricket,
            movies: member.hobies.movies,
            chess: member.hobies.chess,
          },
          email: member.email,
          // image: member.image,
        });
      });
  }

  // Back() {
  //   // this.location.back();
  //   this.ToDoModel.hide();
  // }

  getAllHobbies(lst_hobbies) {
    var keys = Object.keys(lst_hobbies);
    var filtered = keys.filter(function (key) {
      return lst_hobbies[key];
    });
    return filtered.toLocaleString();
  };

  getData() {
    this.service.getList().subscribe(list => {
      this.list = Datas
    });
  }

  Delete_Button(id) {
    if (confirm('Are u sure u want to delete this data ?')) {
      this.service.deleteMember(+id);
    }
  }
  Close() {
    this.ToDoModel.hide();
  }
  Add_New() {
    this.model_title = 'Add Detail';
    this.index = '';
    this.IsEdit = false;
    this.Form1.reset();
    // localStorage.removeItem('Id');
    //this.router.navigate(['/Edit']);
    this.ToDoModel.show();
  }

  Edit_Button(id?) {
    this.model_title = 'Edit Detail';
    this.IsEdit = true;
    this.index = id;
    this.GetMember(+id);
    this.ToDoModel.show();
    // localStorage.setItem('Id', id);
    //this.router.navigate(['/Edit']);
  }
}
