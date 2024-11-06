import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.page.html',
  styleUrls: ['./getting-started.page.scss'],
})
export class GettingStartedPage implements OnInit {
  selectedButton:any;
  number:any;
  dataArray:any =['Men','Women','Kids','Petit','Plus Size','New In'];
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  activeButton(index:any){
    console.log(this.number);
    if(this.number==index){
      this.router.navigate(['/pick-category']);
    }
    this.dataArray.forEach((element:any,index:any) => {
      console.log(element);
      var element1 :any = document.getElementById('btn-'+index);
      element1.classList.remove("selected");
      
    });
    console.log(index);
    var ele:any = document.getElementById('btn-'+index);
    ele.classList.add("selected");
    this.number=index;
    setTimeout(() => {
      this.number=undefined
    }, 1000);

  }

}
