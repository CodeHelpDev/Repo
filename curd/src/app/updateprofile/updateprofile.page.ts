import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.page.html',
  styleUrls: ['./updateprofile.page.scss'],
})
export class UpdateprofilePage implements OnInit {
  userData: any = [];
  updateProfile: FormGroup = new FormGroup({});
  isOpen: boolean = false;
  updatedData: any;
  constructor(
    public router: Router,
    public com: CommonService
  ) { }

  ngOnInit() {
    console.log('ngOnInit')
    this.updateProfile = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileno: new FormControl('', [Validators.required, Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)]),
      dob: new FormControl('', Validators.required),
      password: new FormControl('')
    })

  }
  async ionViewWillEnter() {
    var currentUser:any = await this.com.getCurrentUser();
    currentUser = JSON.parse(currentUser);
    if(currentUser){
      this.userData = currentUser
      this.setFormValue();
      console.log(this.userData)
    }
    


  }

  onSubmit(formValue: any) {
    console.log(formValue);
    this.isOpen = true
    this.updateProfile.controls['password'].setValidators(Validators.required)
  }
  setFormValue() {
    this.updateProfile = new FormGroup({
      name: new FormControl(this.userData[0].name, Validators.required),
      email: new FormControl(this.userData[0].email, [Validators.required, Validators.email]),
      mobileno: new FormControl(this.userData[0].mobileno, [Validators.required, Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)]),
      dob: new FormControl(this.userData[0].dob, Validators.required),
      password: new FormControl('')
    })
  }
  async chnage(formValue: any) {
    console.log(formValue)
    if (formValue.password === this.userData[0].password) {
      this.com.setCurrentUser([formValue]);
      var users: any = await this.com.getUsers();
      users = JSON.parse(users);
      if (users) {
        var index: any = users.findIndex((x: any) => x.email === formValue.email);
        users.splice(index, 1, formValue);
        this.com.setUsers(users);
        this.updateProfile.reset();
        this.isOpen = false;
        setTimeout(() => {
          this.router.navigate(['/profile'])
        }, 200);
      }

    }
  }
}
