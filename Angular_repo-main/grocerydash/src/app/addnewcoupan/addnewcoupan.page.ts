import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';


declare var jQuery: any
@Component({
  selector: 'app-addnewcoupan',
  templateUrl: './addnewcoupan.page.html',
  styleUrls: ['./addnewcoupan.page.scss'],
})
export class AddnewcoupanPage implements OnInit {
  addNewCoupanForm: FormGroup = new FormGroup({});
  imageUrl: any;
  startDate: any;
  expireDate: any;
  expireDateValue: any
  constructor(
    public com: CommonService,
    public router: Router
  ) { }

  ngOnInit() {
    this.addNewCoupanForm = new FormGroup({
      coupanCode: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      couponType: new FormControl('', Validators.required),
      offerPercent: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      expireDate: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      isEnabled : new FormControl(true, Validators.required)
    })
  }
  async onFormSubmit(formValue: any) {
    var storedCoupan: any = await this.com.getCoupan();
    storedCoupan = JSON.parse(storedCoupan);
    if (storedCoupan) {
      var coupanPresent: any = storedCoupan.find((x: any) => {
        if (x.coupanCode === formValue.coupanCode) {
          return x;
        }
      })
      if (coupanPresent) {
        this.com.showAlert('Coupan Already Present', 'Please Choose the differebt Coupan Code')
        this.addNewCoupanForm.controls['coupanCode'].setValue('');
      } else {
        storedCoupan = storedCoupan.concat(formValue);
        this.com.setCoupan(storedCoupan);
        this.addNewCoupanForm.reset();
        this.router.navigate(['/coupans']);
      }
    } else {
      this.com.setCoupan([formValue]);
      this.addNewCoupanForm.reset();
    }
  }
  onCancelButton() {
    this.addNewCoupanForm.reset();
    this.router.navigate(['/coupans']);

  }
  setImageInForm(event: any) {
    var file = event.srcElement.files[0]
    console.log(file);
    var reader = new FileReader();
    var self = this;
    reader.onloadend = function () {
      self.imageUrl = reader.result;
      self.addNewCoupanForm.controls['image'].setValue(self.imageUrl)
    }
    reader.readAsDataURL(file);

  }
  openFileUpload() {
    jQuery('#imageUpload').trigger('click')
  }
  setExpireDate(event: any) {
    var dt = event.detail.value;
    console.log(dt);
    if (this.startDate) {
      if (dt) {
        var exDate: any = new Date(dt);
        var stDate: any = new Date(this.startDate);
        var diffe: any = exDate > stDate;
        console.log(diffe,exDate,stDate)
        if (diffe === true) {
          console.log('Valid Date')
        } else {
          console.log('Invalid Date');
          this.com.showAlert('Invalid Date', 'Please Select Proper Date ');
          this.addNewCoupanForm.controls['expireDate'].setValue('');
        }
      }
    } else if (dt) {
      this.com.showAlert('Select Start Date First', 'Please Select Start Date First ');
      this.addNewCoupanForm.controls['expireDate'].setValue('');
    }

    console.log(exDate > stDate)
  }
  setStartDate(event: any) {
    var dt = event.detail.value;
    console.log(dt);
    this.startDate = dt;
  }

}
