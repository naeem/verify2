import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private formBuilder: FormBuilder) {
    this.form1 = this.formBuilder.group({
      'id_number' : [null, Validators.required]
    });

    this.form2 = this.formBuilder.group({
      'dob' : [null, Validators.required],
      'surname' : [null, Validators.required],
      'gender' : [null, Validators.required]
    });
  }

  form1: FormGroup;
  form2: FormGroup;
  results: any = {start: false};

  logForm1() {
    this.form2.reset();
    console.log("Form 1");
    console.log(this.form1.value);
    if (this.form1.value.id_number == "12345") {
      this.results = {
        start: true,
        found: true,
        organisations: ["abc", "def"]
      }
    } else {
      this.results = {
        start: true,
        found: false,
        organisations: []
      }
    }
  }

  logForm2() {
    this.form1.reset();
    console.log("Form 2");
    console.log(this.form2.value);
    if (this.form2.value.surname.toLowerCase() == "ally") {
      this.results = {
        start: true,
        found: true,
        organisations: ["abc", "def"]
      }
    } else {
      this.results = {
        start: true,
        found: false,
        organisations: []
      }
    }
  }
}
