import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

declare var jQuery: any
@Component({
  selector: 'app-updatecoupan',
  templateUrl: './updatecoupan.page.html',
  styleUrls: ['./updatecoupan.page.scss'],
})
export class UpdatecoupanPage implements OnInit {
  coupanDetail: any;
  updateCoupanForm: FormGroup = new FormGroup({});
  imageUrl: any;
  startDate: any;
  expiryDate: any;
  minDateValue: any;
  constructor(
    public router: Router,
    public com: CommonService
  ) { }

  ngOnInit() {
    var data: any = this.router.getCurrentNavigation()?.extras.state;
    if (data.data) {
      this.coupanDetail = data.data;
    }
    this.updateCoupanForm = new FormGroup({
      coupanCode: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      couponType: new FormControl('', Validators.required),
      offerPercent: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      expireDate: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      isEnabled: new FormControl('', Validators.required)
    })
    this.setFormValues();
  }
  imageUpload(event: any) {
    var file = event.srcElement.files[0];
    if (file) {
      var reader = new FileReader();
      var self = this;
      reader.onloadend = function () {
        self.imageUrl = reader.result;
        self.updateCoupanForm.controls['image'].setValue(self.imageUrl)
      }
      reader.readAsDataURL(file)
    }
  }
  openFileUpload() {
    jQuery('#file-upload').trigger('click');
  }

  async onFormSubmit(formValue: any) {
    var storedCoupans: any = await this.com.getCoupan();
    storedCoupans = JSON.parse(storedCoupans);
    if (storedCoupans) {
      var index: any = storedCoupans.findIndex((x: any) => x.coupanCode === formValue.coupanCode);
      storedCoupans.splice(index, 1, formValue)
      this.com.setCoupan(storedCoupans);
      this.router.navigate(['/coupans']);
      this.updateCoupanForm.reset();
    }
  }

  setStartDate(event: any) {
    var dt: any = event.detail.value;
    if (dt) {
      this.startDate = new Date(dt);
    }
  }
  setExpiryDate(event: any) {
    var dt: any = event.detail.value;
    this.expiryDate = new Date(dt);
    if(dt){
      console.log(this.expiryDate>this.startDate)
      if(this.expiryDate>this.startDate){
        console.log('valid')
      }else{
        this.com.showAlert('Expire date Should be Greater than Start date','Expiry Date is Not Valid ');
        this.updateCoupanForm.controls['expireDate'].setValue('');
      }
    }
  }


  setFormValues() {
    this.startDate = new Date(this.coupanDetail.startDate)
    this.minDateValue = this.coupanDetail.startDate;
    this.imageUrl = this.coupanDetail.image;
    this.updateCoupanForm = new FormGroup({
      coupanCode: new FormControl(this.coupanDetail.coupanCode, Validators.required),
      description: new FormControl(this.coupanDetail.description, Validators.required),
      couponType: new FormControl(this.coupanDetail.couponType, Validators.required),
      offerPercent: new FormControl(this.coupanDetail.offerPercent, Validators.required),
      startDate: new FormControl(this.coupanDetail.startDate, Validators.required),
      expireDate: new FormControl(this.coupanDetail.expireDate, Validators.required),
      image: new FormControl(this.coupanDetail.image, Validators.required),
      isEnabled: new FormControl(true, Validators.required)
    })
  }

}
