import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  dataArray: any = [];
  tempArray: any = [];
  isNotificationOpen: boolean = false;
  isLoading: boolean = false;
  serachArray: any;
  catSearchingArray: any = [];
  p: number = 1;
  catValue:any;
  nameValue:any;
  itemsPerPage: any = 5;
  isOpen:boolean=false;
  notificationArray:any =[];
  @ViewChild('child') childCom!:HeaderComponent

  constructor(
    public service: ServiceService,
    public toastController: ToastController,
    public router: Router,
    public com: CommonService
  ) { }

  async ngOnInit() {
    if (this.dataArray.length === 0) {
      this.isLoading = true;
    } else {
      this.isLoading = false;
    }
    // for Saving data in localStorage 
    // this.service.getDataFromApi().subscribe((res: any) => {
    //   this.dataArray = res.recipes;
    //   console.log(this.dataArray)
    //   this.dataArray.forEach((element: any, ind: any) => {
    //     var ele: any = {};
    //     var stockDetails: any = [];
    //     ele.name = element.name;
    //     ele.category = element.cuisine;
    //     ele.subCategory = element.tags[0];
    //     ele.image = element.image;
    //     ele.description = element.instructions[0];
    //     ele.id = element.id;
    //     ele.keywords = element.mealType[0];
    //     ele.stockunit = 'KG';
    //     stockDetails = [
    //       {
    //         "capacity": element.prepTimeMinutes,
    //         "price": element.userId,
    //         "dealOffer": element.prepTimeMinutes,
    //         "stock": element.caloriesPerServing,
    //         "subscribe": element.difficulty
    //       }
    //     ]
    //     ele.stockDetails = stockDetails
    //     this.tempArray[ind] = ele;
    //     console.log(this.tempArray)
    //   });
    //   this.com.setProductsData(this.tempArray);
    // })


  }
  updateProduct(product: any) {
    this.router.navigate(['/updateproduct'], { state: { data: product } });
  }
  viewProduct(product: any) {
    this.router.navigate(['/viewproduct'], { state: { data: product } })
  }
  async deleteProduct(index: any) {
    var data: any = await this.com.getProductsData();
    data = JSON.parse(data);
    if (data) {
      var isApproved: any = await this.com.checkConfirm('Are You Sure ?', 'Do You Really want To Delete');
      if (isApproved.value === true) {
        data.splice(index, 1);
        this.com.setProductsData(data);
      }
    }
    this.ionViewWillEnter();
  }
  async toggleNotifications() {
    var toast = await this.toastController.create({
      message: 'Hello World',
      duration: 1500,
      position: 'top'
    });
    await toast.present();
  }
  async ionViewWillEnter() {
    //  Get Saved Data From Local Storage 
    var storedData: any = await this.com.getProductsData();
    storedData = JSON.parse(storedData);
    this.dataArray = storedData;
    this.serachArray = [...this.dataArray];
    var temp: any = [...this.dataArray];
    this.catSearchingArray = this.findDuplicateValues(temp, 'category')

  }
  findDuplicateValues(arr: any, key: any) {
    const seenValues = new Set();
    const duplicates = [];
    for (const obj of arr) {
      const value = obj[key];
      if (seenValues.has(value)) {
      } else {
        duplicates.push(obj);
        seenValues.add(value);
      }
    }

    return duplicates;
  }
  searchbyCat(event: any) {
    var value: any = event.detail.value;
    if (value && this.serachArray) {
      this.nameValue='';
      this.dataArray = this.serachArray.filter((x: any) => (x.category).toLowerCase().includes(value.toLowerCase()));
      this.isLoading = true;
    } else {
      this.dataArray = this.serachArray;
    }
  }
  searchByName(event: any) {
    var value: any = event.detail.value;
    if (value.length >= 3) {
      this.catValue='';
      this.itemsPerPage = this.dataArray.length;
      this.dataArray = this.serachArray.filter((x: any) => (x.name).toLowerCase().includes(value.toLowerCase()));
      if(this.isLoading === true){
        this.isLoading =true
      }
    } else {
      this.itemsPerPage = 5;
      this.dataArray = this.serachArray;
    }
  }
  async handleChildClick() {
    var storedNotification:any = await this.com.getNotifications();
    storedNotification = JSON.parse(storedNotification);
    if(storedNotification){
      this.notificationArray=storedNotification;
    }
    if(this.isOpen===false){
      this.isOpen =true
    }else{
      this.isOpen= false
    }
  }
  delNoti(index:any){
    if(this.notificationArray){
      this.notificationArray.splice(index,1);
      if(this.notificationArray.length===0){
        this.com.removeNotification();
      }else{
        this.com.setNotifications(this.notificationArray);
      }
      
      this.isOpen=false;
      this.childCom.getNoti();
    }
  } 
  exportData(){
    var csvData = this.ConvertToCSV(this.dataArray);
    var a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var blob = new Blob([csvData], { type: 'text/csv' })
    console.log('blob',blob);
    console.log(window.URL)
    var url = window.URL.createObjectURL(blob);
    console.log(url);
    a.href = url;
    a.download = 'ETPHoldReview.csv';
    console.log(a);
    a.click();
    
  }
  ConvertToCSV(objArray: any) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var row = "";
    for (var index in objArray[0]) {
      console.log(index, objArray[0])
        //Now convert each value to string and comma-separated
        console.log(row)
        row += index + ',';
        console.log(row)
    }
    row = row.slice(0, -1);
    console.log(row);
    //append Label row with line break
    str += row + '\r\n';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
          console.log(index);
            if (line != '') line += ','
          console.log(line);
          if(i==8 && index=='stockDetails'){
            console.log('Hwllo',array[i][index][0])
            line+=array[i][index][0].capacity;
          }
            line += array[i][index];
        }
        str += line + '\r\n';
      }
      console.log(str)
    return str;
}
  
}
