import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.page.html',
  styleUrls: ['./edit-info.page.scss'],
})
export class EditInfoPage implements OnInit {
  
  @ViewChild('fileInp') fileInput!: ElementRef
  image:any;
  constructor() { }

  ngOnInit() {
   
  }
 
  onClick() {
    this.fileInput.nativeElement.click();
  }
  imageValue(event:any){
    if(event.target.files.length>0){
      this.image=URL.createObjectURL(event.target.files[0]);
    }
  }

  
  
}
