import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

declare var jQuery:any;

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  segmentValue:any='games';
  capabilityValues:any=["Risk","Top level","Easy","With Out Risk","Medium"];
  selctedCap:any='';
  gamesForm:FormGroup= new FormGroup({});

  data: any = [ 
    {
        value: 'Capabilies 1',
        label: 'Capabilies 1',
        data: { color: 'white', name: 'Capabilies 1' },
    },
    {
        value: 'Capabilies 2',
        label: 'Capabilies 2',
        data: { color: 'red', name: 'Capabilies 2' },
    },
    {
      value: 'Capabilies 3',
      label: 'Capabilies 3',
      data: { color: 'red', name: 'Capabilies 3' },
  },
  {
    value: 'Capabilies 4',
    label: 'Capabilies 4',
    data: { color: 'red', name: 'Capabilies 4' },
},
];
  constructor(
    public navCtrl:NavController,
    public router:Router
  ) { }

  ngOnInit() {
    this.gamesForm= new FormGroup({
      gameName:new FormControl('',Validators.required),
      teams:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      capabilities: new FormControl('',Validators.required)
    })
  }
  formData(formValue:any){
    if(formValue.email==="" || formValue.teams=="" || formValue.description==null || formValue.capabilities==null){
      alert('Please Fill complte Form')
    }else{
      this.navCtrl.navigateForward('scenario',{state:formValue})
    }
    console.log(formValue);

  }

  ionViewWillEnter(){
    jQuery(document).ready(function() {
      jQuery('.select-grp').select2({
        multiple : true,
        placeholder: "Select a state",
        allowClear: true
      });
    });
  }
  capValues(event:any){
    console.log(event.value)
  }
  update(e:any){
    console.log(e);
  }

  segValue(event:any){
    console.log(event.target.value);
    this.segmentValue=event.target.value;
  }
  selectEvent(e:any){
    console.log(e.target.value);
    this.selctedCap = e.target.value;

  }

 
}


