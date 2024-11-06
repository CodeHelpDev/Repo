import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  lowerValue: number = 20;
  upperValue: number = 80;
  amountValue: number = 25;
  amtValue: number = 0;
  bedValue: number = 0;
  colour: any = 'green';
  ratingIconNameArry: any = ['star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];
  multiTags: any = ['Indonesia', 'Pitcairn Islands', 'Malta', 'Sierra Leone', 'Dominican Republic', 'Antigua and Barbuda', 'Macedonia', 'Vietnam'];
  roundTags: any = ['Indonesia', 'Pitcairn Islands', 'Malta', 'Sierra Leone', 'Dominican Republic', 'Antigua and Barbuda', 'Macedonia', 'Vietname'];
  radioArray: any = ['A...', '$', '$...', '$...'];
  colourArray:any=['red','pink','gray','yellow','green','blue','black','cyan'];
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) { }

  ngOnInit() {


  }

  switchColor(element:any, index:any,event:any) {
    this.colourArray.forEach((x:any,i:any)=>{
    var colElement:any = document.getElementById('pic-btn-'+index);
    colElement.classList.add('shadow-active');
      var colElement:any = document.getElementById('pic-btn-'+i);
      colElement.classList.remove('shadow-active');
    })
  }

  fillRating(element: any, index: any) {
    this.ratingIconNameArry = ['star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];
    console.log(element, index)
    if (element) {
      for (let i = 0; i <= index; i++) {
        this.ratingIconNameArry[i] = 'star';
      } 
      console.log(this.ratingIconNameArry);
    }

  }
  knobValues(event: any) {
    console.log(event.detail.value);
    this.lowerValue = event.detail.value.lower;
    this.upperValue = event.detail.value.upper;
  }
  amountValues(event: any) {
    console.log(event.detail.value);
    this.amountValue = event.detail.value;
  }
  activateBtn(element: any, index: any) {
    console.log(element, index);
    var ele: any = document.getElementById('btn-' + index);
    if (ele.classList.contains('active')) {
      ele.classList.remove('active');
    } else {
      ele.classList.add('active');
    }
  }
  roundedTags(index: any) {
    console.log(index)
    var ele: any = document.getElementById('btn1-' + index);
    console.log(ele.classList)
    if (ele.classList.contains('disable-btn')) {
      ele.classList.remove('disable-btn');
    } else {
      ele.classList.add('disable-btn');
    }
  }
  radioTags(index: any) {
    var ele: any = document.getElementById('radio-' + index);
    this.radioArray.forEach((element: any, i: any) => {
      var element1: any = document.getElementById('radio-' + i);
      element1.classList.remove('radio-tag-active');
    })
    ele.classList.add('radio-tag-active');
  }
  amountToggle(value: any, btnValue: any) {
    if (btnValue === 'amount') {
      if (this.amtValue >= 0) {
        if (value === '-') {
          this.amtValue -= 1;
        } else {
          this.amtValue += 1;
        }
      }
      if (this.amtValue < 0) {
        this.amtValue = 0;
      }
    }
    if (btnValue === 'bedroom') {
      if (this.bedValue >= 0) {
        if (value === '-') {
          this.bedValue -= 1;
        } else {
          this.bedValue += 1;
        }
      }
      if (this.bedValue < 0) {
        this.bedValue = 0;
      }
    }

  }
}
