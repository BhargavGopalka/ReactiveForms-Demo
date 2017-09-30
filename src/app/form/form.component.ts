import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form1: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

ngOnInit() {
  this.form1 = this.formBuilder.group({
    name: [''],
    address: ['']
  });
}

  addUser() {
    const addUser = {
      name: this.form1.controls['name'].value,
      address: this.form1.controls['address'].value,
    };
    console.log(addUser);
    this.form1.reset();
  }
}

