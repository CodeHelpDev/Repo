import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-addnewadmin',
  templateUrl: './addnewadmin.page.html',
  styleUrls: ['./addnewadmin.page.scss'],
})
export class AddnewadminPage implements OnInit {
  addNewAdminForm:FormGroup = new FormGroup({});
  imageUrl:any
  constructor(
    public router:Router,
    public com:CommonService
  ) { }

  ngOnInit() {
    this.addNewAdminForm = new FormGroup({
      fname: new FormControl('',Validators.required),
      lname: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      mobileNo: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  async onFormSubmit(formValue:any){
    var storedAdmin:any = await this.com.getAdmins();
    storedAdmin = JSON.parse(storedAdmin);
    if(storedAdmin){
      var duplicate:any = storedAdmin.find((x:any)=>{
        if(x.email===formValue.email){
          return x
        }
      })
      if(duplicate){
        this.com.showAlert('Duplicate User','This user is Already Present');
      }else{
        storedAdmin = storedAdmin.concat(formValue)
        this.com.setAdmins(storedAdmin);
      }
    }else{
      this.com.setAdmins([formValue]);
    }
    this.onCancelButton();
  }
  onCancelButton(){
    this.addNewAdminForm.reset();
    this.router.navigate(['/admin']);
  }
}
