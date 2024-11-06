import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  testform!: FormGroup;

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    this.testform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  Submit(formvalue: any) {
    console.log(formvalue.email);
    console.log(formvalue.password);
    var arr = [];
    arr.push(formvalue);

    var temp: any = localStorage.getItem('formData');
    temp = JSON.parse(temp);
    if (temp === null) {
      localStorage.setItem('formData', JSON.stringify([formvalue]));
    }
    else {
      if (temp.find((x: any) => x.email === formvalue.email) && temp.find((x: any) => x.password === formvalue.password)) {
        alert('user Presnt ');
        console.error('user present');
      }
      else {
        console.log(temp)
        arr = arr.concat(temp);
        localStorage.setItem('formData', JSON.stringify(arr));
        this.router.navigate(['tabs/tab2']);
      }
    }
    this.testform.reset();
  }
}
