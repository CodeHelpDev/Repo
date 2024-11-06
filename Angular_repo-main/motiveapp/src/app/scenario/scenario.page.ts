import { Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
declare var jQuery: any;

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.page.html',
  styleUrls: ['./scenario.page.scss'],
})
export class ScenarioPage implements OnInit {
  scenarioForm: FormGroup = new FormGroup({});
  check1: boolean = false;
  check2: boolean = false;
  type: any = null;
  isHidden: any='yes';
  gamesData: any;
  questionNo: number = 0;
  index: any;
  isVisible: any;
  inc:number=0;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    if (this.router.getCurrentNavigation()?.extras.state) {
      const page = this.router.getCurrentNavigation()?.extras.state
      this.gamesData = page;
      console.log('this.gamesData', this.gamesData);
    }
    console.log('huu')
    this.scenarioForm = this.formBuilder.group({
      scenarioTitle: ['', Validators.required],
      scenarioTime: ['', Validators.required],
      description: ['', Validators.required],
      scenarioImage: ['', Validators.required],
      vignetteName: ['', Validators.required],
      timeVignette: ['', Validators.required],
      brief: ['', Validators.required],
      vignetteImage: ['', Validators.required],
      nestItemsArray: this.formBuilder.array([]),
    })
    this.addNestedItems();
  }

  addNestedItems() {
    var grp = this.formBuilder.group({
      visualizationType: ['', Validators.required],
      scoringRubric: ['', Validators.required],
      scorePoints: ['', Validators.required],
      scoreMoney: ['', Validators.required],
      capabilitiesTest: ['', Validators.required],
      question: ['', Validators.required],
      mediaImage: ['', Validators.required],
      ansA: ['', Validators.required],
      pointA: ['', Validators.required],
      moneyA: ['', Validators.required],
      capA1: ['', Validators.required],
      capA2: ['', Validators.required],
      vignettePointsA: ['', Validators.required],
      ansB: ['', Validators.required],
      pointB: ['', Validators.required],
      moneyB: ['', Validators.required],
      capB1: ['', Validators.required],
      capB2: ['', Validators.required],
      vignettePointsB: ['', Validators.required],
      ansC: ['', Validators.required],
      pointC: ['', Validators.required],
      moneyC: ['', Validators.required],
      capC1: ['', Validators.required],
      capC2: ['', Validators.required],
      vignettePointsC: ['', Validators.required],
      ansD: ['', Validators.required],
      pointD: ['', Validators.required],
      moneyD: ['', Validators.required],
      capD1: ['', Validators.required],
      capD2: ['', Validators.required],
      vignettePointsD: ['', Validators.required],
      revealingQuestion: ['', Validators.required],
      revealingAnswer: ['', Validators.required],
      answerFormat: ['', Validators.required],
      ishideQuestion: ['yes', Validators.required]
    })
    this.nestItemsArray.push(grp);
    this.questionNo = this.nestItemsArray.length;
    this.isHidden= this.isHidden+(Number(this.inc)+Number(1));

  }
  get nestItemsArray() {
    return this.scenarioForm.get('nestItemsArray') as FormArray;
  }
  onClick(type: any) {
    this.type = type;
    console.log(type)
    jQuery('input[name="text"]').trigger('click');
  }

  onClick1(i: any) {
    this.index = i;
    jQuery('input[name="text_' + i + '"]').trigger('click');
  }

  fileUploadEvent1(event: any) {
    if (event) {
      console.log(event.target.files[0].name)
      const input = event.target as HTMLInputElement
      if (input.files) {
        const files = Array.from(input.files);
        console.log('files', files)
        this.convertFilesToBase64(files)
          .then(base64Strings => {
            console.log('Base64 strings:', base64Strings, event);
            let data: any = (<FormArray>(<FormArray>this.scenarioForm.controls['nestItemsArray']).controls[this.index]).controls
            data.mediaImage.setValue(base64Strings)
          })
      }
    }
  }

  hideQuestion(event: any, i: any) {
    var temp: any = (<FormArray>(<FormArray>this.scenarioForm.controls['nestItemsArray']).controls[i]).controls;
    // console.log(this.isHidden);
    if (event.target.value == 'no') {
      temp.revealingQuestion.setValue('');
      temp.revealingAnswer.setValue('');
    } else {
      temp.revealingQuestion.setValidators('', Validators.required);
      temp.revealingAnswer.setValidators('', Validators.required)
    }



  }

  async onformSubmit(formValue: any) {
    console.log(formValue);
    formValue.games = this.gamesData;
    console.log('formValue', formValue);
    var storedata:any = await this.getData();
    storedata = JSON.parse(storedata);
    if(storedata){
      storedata = storedata.concat(formValue);
      this.setData(storedata)
    }else{
       this.setData([formValue]);
    }
    console.log(storedata)

    
  }

  async setData(data: any) {
    await Preferences.set({
      key: 'scenarioFormData',
      value: JSON.stringify(data)
    })
  }
  async getData() {
    var data = await Preferences.get({
      key: 'scenarioFormData'
    })
    return data.value;
  }

  fileUploadEvent(event: any) {
    if (event) {
      console.log(event.target.files[0].name)
      var text: any = document.getElementById(this.type);
      console.log(text)
      text.innerHTML = event.target.files[0].name;
      const input = event.target as HTMLInputElement
      console.log(input);
      if (input.files) {
        const files = Array.from(input.files);
        console.log('files', files)
        this.convertFilesToBase64(files)
          .then(base64Strings => {
            console.log('Base64 strings:', base64Strings, event);
            if (this.scenarioForm.controls[this.type]) {
              console.log(this.scenarioForm.controls['nestItemsArray'], this.type)
              this.scenarioForm.controls[this.type]?.setValue(base64Strings);
            }
            else {
              var temp: any = Object.values(this.scenarioForm.controls['nestItemsArray']);
              console.log(temp[4]);
              // this.scenarioForm.controls['nestItemsArray'].value[0].setValue(base64Strings); 
            }
          })
      }
    }
  }
  // Converts multiple files to Base64
  convertFilesToBase64(files: File[]) {
    const promises = files.map(file => this.convertFileToBase64(file));
    return Promise.all(promises);
  }
  // Converts a single file to Base64
  convertFileToBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        // Resolve with Base64 string
        console.log(reader);
        resolve(reader.result as string);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      // Read file as Data URL (Base64)
      reader.readAsDataURL(file);
    });
  }

  checkValue(index:any){
    let data:any=(<FormArray>(<FormArray>this.scenarioForm?.controls['nestItemsArray'])?.controls[index])?.controls;
    console.log(data.ishideQuestion.value);
    return data.ishideQuestion.value;
  }
}
