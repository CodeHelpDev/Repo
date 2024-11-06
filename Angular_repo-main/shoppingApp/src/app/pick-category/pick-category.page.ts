import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-category',
  templateUrl: './pick-category.page.html',
  styleUrls: ['./pick-category.page.scss'],
})
export class PickCategoryPage implements OnInit {
  
  catArray:any=['TOPS','DRESS','JEANS','JACKETS','SHOES','GLASSES'];
  newArray:any=[];
  constructor() { }

  ngOnInit() {
    this.catArray.forEach((element:any,index:any) => {
      var obj={
        name:element,
        isVisible:true
      }
      this.newArray.push(obj)
    });
    console.log('this.newArray',this.newArray);
  }
  checkImage(element:any,index:any){
    
    console.log(element)
    if(element.isVisible==true){
      var tempObj={
        name:element.name,
        isVisible:false
      }
      this.newArray.splice(index,1,tempObj);
    }
    if(element.isVisible==false){
      var tempObj1={
        name:element.name,
        isVisible:true
      }

      this.newArray.splice(index,1,tempObj1)
    }
   
  }
}
