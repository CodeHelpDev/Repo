import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  signUpForm: FormGroup = new FormGroup({})
  pinIndex: any;
  postOffice:AbstractControl | undefined;

  name = 'Angular';
  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      name: new FormControl('', Validators.required),
      phone_numbers:this.fb.array([this.phone_numbers(  )])
    })
  }

  phone_numbers() : FormGroup{
    return this.fb.group({
      'phone' : new FormControl(),
      'addresses':this.fb.array([this.addressForm()])
    })
  }

  addressForm() : FormGroup{
    return this.fb.group({
      'address' : new FormControl(),
    })
  }

  get phoneForm() : FormArray{
    return this.signUpForm.get('phone_numbers') as FormArray<FormGroup>;
  }

  
  add_phone(){
    this.phoneForm.push(this.phone_numbers());
  }
  
  ngOnInit() {
    console.log('ngOnInit');
  }
  
  formValues(formdata:any){
    console.log(formdata)
  }
}
