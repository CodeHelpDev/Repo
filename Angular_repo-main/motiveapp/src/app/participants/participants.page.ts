import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.page.html',
  styleUrls: ['./participants.page.scss'],
})
export class ParticipantsPage implements OnInit {
  segmentValue: any = 'addMember';
  scroringForm: FormGroup = new FormGroup({});
  isValidNumber: any = '';
  addMemberForm: FormGroup = new FormGroup({});
  displayScenarioData: any;
  isReadOnly: boolean = false;
  numIndex: any = '';
  staffDataArray: any = [];
  constructor(
    public formBuilder: FormBuilder
  ) { }
  participantform: FormGroup = new FormGroup({});
  ngOnInit() {
    this.participantform = new FormGroup({
      participantName: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobileno: new FormControl('', Validators.required),
      orgType: new FormControl('', Validators.required),
      orgSubType: new FormControl('', Validators.required),
      orgSize: new FormControl('', Validators.required),
      proDomain: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      citizenShip: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      IdType: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      primaryLanguage: new FormControl('', Validators.required),
      engLanguage: new FormControl('', Validators.required),
      dietRestrictions: new FormControl('', Validators.required),
      healthIssues: new FormControl('', Validators.required),
      specialneeds: new FormControl('', Validators.required),
      emContact1: new FormControl('', Validators.required),
      emContact2: new FormControl('', Validators.required),
      other: new FormControl('', Validators.required)
    })
    this.scroringForm = this.formBuilder.group({
      scenarioName: new FormControl('', Validators.required),
      note: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileno: new FormControl('', [Validators.required, this.mobileNumberValidator])
    })
    this.addMemberForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      mobileno: new FormControl('', [Validators.required, this.mobileNumberValidator]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })

  }
  ionViewWillEnter() {
    this.diplayData();
    this.displayStaffData();
    this.isReadOnly = false;
  }
  async addMembers(formValue: any) {
    var storedData: any = await this.getMembers();
    storedData = JSON.parse(storedData);
    if (storedData) {
      var validMember = storedData.find((x: any) => {
        if (x.email === formValue.email && x.password === formValue.password) {
          return x;
        }
      })
      if (validMember) {
        console.log('Registered Member')
      } else {
        storedData = storedData.concat(formValue);
        this.setMembers(storedData);
      }
    } else {
      this.setMembers([formValue]);
    }
    this.addMemberForm.reset();
  }

  async displayStaffData() {
    var staffData: any = await this.getMembers();
    staffData = JSON.parse(staffData);
    this.staffDataArray = staffData;
  }
  async setMembers(data: any) {
    await Preferences.set({
      key: 'members',
      value: JSON.stringify(data)
    })
  }
  async getMembers() {
    var data = await Preferences.get({
      key: 'members'
    })
    return data.value;
  }

  async diplayData() {
    var data: any = await this.getScenerioData();
    data = JSON.parse(data);
    this.displayScenarioData = data;

  }

  async searchedData(event: any) {
    var searchedValue: any = event.target.value;
    var storedData: any = await this.getScenerioData();
    storedData = JSON.parse(storedData);
    if (this.displayScenarioData) {
      if (storedData) {
        this.displayScenarioData = storedData.filter((x: any) => (((x.email) || (x.scenarioName).toLowerCase()).includes((searchedValue.toLowerCase()))));
      }
    } else {
      this.displayScenarioData = storedData;
    }
  }
  async searchedStaff(event:any){
    var value:any = event.target.value;
    var storedStaff:any = await this.getMembers();
    storedStaff = JSON.parse(storedStaff);
    if(this.staffDataArray && value){
      this.staffDataArray = storedStaff.filter((x:any)=>((x.fname).toLowerCase()).includes((value).toLowerCase()) 
      ||((x.lname).toLowerCase()).includes((value).toLowerCase())
      || ((x.email).toLowerCase()).includes((value).toLowerCase())
    );
    }else{
      this.staffDataArray = storedStaff;
    }

  }
  editValue(index: any, ele: any) {
    this.segmentValue = 'scroring'
    var email = ele.email
    this.scroringForm = this.formBuilder.group({
      scenarioName: new FormControl('', Validators.required),
      email: new FormControl(email, Validators.required),
      note: new FormControl('', Validators.required),
      mobileno: new FormControl('', [Validators.required, this.mobileNumberValidator])
    })
    this.isReadOnly = true;
    this.numIndex = index;

  }
  validateNumber(event: any) {
    this.isValidNumber = false
    var num: any = (event.target.value).toString();
    if (num.length > 9 && num.length < 11) {
      this.isValidNumber = true;
    } else {
      this.isValidNumber = false;
    }
  }
  mobileNumberValidator(control: any) {
    const mobilePattern = /^[0-9]{10}$/;
    return mobilePattern.test(control.value) ? null : { invalidMobile: true };
  }
  async saveScenario(formValue: any) {
    var storedData: any = await this.getScenerioData();
    storedData = JSON.parse(storedData);
    if (storedData) {
      var valid: any = storedData.find((x: any) => {
        if (x.email === formValue.email) {
          return x;
        }
      })
      if (valid && this.numIndex == undefined) {
        alert('email Registered');
      } else if (valid && this.numIndex != undefined) {
        this.displayScenarioData.splice(this.numIndex, 1, formValue);
        this.setScenerioData(this.displayScenarioData);
      }
      else {
        storedData = storedData.concat(formValue);
        this.setScenerioData(storedData);
      }
    } else {
      this.setScenerioData([formValue]);
    }
    this.scroringForm.reset();
    this.isValidNumber = '';
    this.diplayData();
    this.isReadOnly = false;
  }
  segValue(event: any) {
    this.segmentValue = event.target.value;
    if (this.segmentValue === 'scroring') {
      this.ngOnInit();
    }
    this.diplayData();

  }
  async parti(formValue: any) {
    var storeddata: any = await this.getData();
    storeddata = JSON.parse(storeddata);
    if (storeddata === null) {
      this.setData([formValue])
      this.participantform.reset();
    } else {
      storeddata = storeddata.concat(formValue);
      this.setData(storeddata);
      this.participantform.reset();
    }
  }
  async setData(data: any) {
    await Preferences.set({
      key: 'participantForm',
      value: JSON.stringify(data)
    })
  }
  async getData() {
    var data = await Preferences.get({
      key: 'participantForm'
    })
    return data.value;
  }
  async setScenerioData(data: any) {
    await Preferences.set({
      key: 'scenerioData',
      value: JSON.stringify(data)
    })
  }
  async getScenerioData() {
    var data = await Preferences.get({
      key: 'scenerioData'
    })
    return data.value;
  }

}
