import { Component, OnInit } from '@angular/core';
import {FruitModel} from './fruit.model';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class FruitAddComponent implements OnInit {
  fruit: FruitModel;
  submitted = false;
  fruitForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.fruitForm = this.formBuilder.group({
      'fruit_name': [{value: 'LAkshmi'}, Validators.required]
    });
  }

  formSubmit() {
    this.submitted = true;
    alert("form submitted");
  }

  f() { return this.fruitForm.controls; }
}
