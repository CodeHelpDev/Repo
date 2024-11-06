import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Select2Data } from 'ng-select2-component';
import { CommonService } from '../services/common.service';
import { param, trim } from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  taxInfoForm: FormGroup = new FormGroup({});
  detail: any;
  scrollValue:any;
  items: Select2Data = [
    {
      value: 'heliotrope',
      label: 'Heliotrope',
      data: { color: 'white', name: 'Heliotrope' },
    },
    {
      value: 'hibiscus',
      label: 'Hibiscus',
      data: { color: 'red', name: 'Hibiscus' },
    },
  ];
  data1: Select2Data = [
    {
      value: 'cod',
      label: 'COD'
    },
    {
      value: 'stripe',
      label: 'STRIPE'
    }
  ]
  constructor(
    public com: CommonService
  ) { }

  ngOnInit() {
    this.taxInfoForm = new FormGroup({
      deliveryType: new FormControl('', Validators.required),
      minimumAmountForOrder: new FormControl('', Validators.required),
      freeDeliveryAmount: new FormControl('', Validators.required),
      deliveryCharges: new FormControl('', Validators.required),
      deliveryCoverage: new FormControl('', Validators.required),
      shippingMethod: new FormControl('', Validators.required),
      taxName: new FormControl('', Validators.required),
      taxRate: new FormControl('', Validators.required),
      latitude: new FormControl('', Validators.required),
      longitude: new FormControl('', Validators.required),
      paymentMethod: new FormControl('', Validators.required)
    })

    this.initializeSelect2();
  }
 

  initializeSelect2() {
    jQuery('.select2-search').select2({      
      placeholder: 'Search and select an item for Shipping Methods',
      allowClear: true,
      width: '100%',
      // Optional: Add custom matching function     
      matcher: function(params:any, data:any) {   
        // If there are no search terms, return all of the data
        if (jQuery.trim(params.term) === '') {
          console.log('if 1')
          return data;
        }
        // `params.term` should be the term that is used for searching
        // `data.text` is the text that is displayed for the data object
        if (data.text.toLowerCase().indexOf(params.term.toLowerCase()) > -1) {
          console.log('if 2')
          return data;
        }
        // Return `null` if the term should not be displayed
        return null;
      }
      
    });
    
    jQuery('.select2-search2').select2({
      placeholder:'Select payment method',
      allowClear:true,
      width:'100%',
  
      matcher: function(val:any,data1:any){
        if(jQuery.trim(val.term)===''){
          return data1
        }
        if(data1.text.toLowerCase().indexOf(val.term.toLowerCase())>-1){
          return data1
        }
        return null;
      }
    })
    
  }

  
  searched(event:any){
    console.log(event)
    var val:any = event

  }


  clickLeft(value: any) {
    console.log(value)
  }
  update(event: any) {
    console.log(event)
  }
  onCancel() {
    this.taxInfoForm.reset();
  }
  async onFormSubmit(formValue: any) {
    var storedTaxDetails: any = await this.com.getTaxDetails();
    storedTaxDetails = JSON.parse(storedTaxDetails);
    if (storedTaxDetails) {
      storedTaxDetails = storedTaxDetails.concat(formValue);
      this.com.setTaxDetails(storedTaxDetails);
    } else {
      this.com.setTaxDetails([formValue]);
    }
    console.log(formValue)
  }
}