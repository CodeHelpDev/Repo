import { Component, OnInit } from '@angular/core';
import { actionSheetController } from '@ionic/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
 buttons :any=[
  {
    text:'Sum',
    handler:()=>{
      var res=this.addition();
    }
  },
  {
    text:'Share',
  },
  {
    text:'Remove',
  },
];
  constructor() { }

  ngOnInit() {
  }

  addition(){
    var a =Number(3);
    var b = Number(3);
    console.log(a+b);
  }
  async showActions(){
    const result= await actionSheetController.create({
      header: 'Action Title',
      subHeader: 'Action Sub title',
      buttons: this.buttons,
      mode: 'ios'
    });
    result.present();
  }
}
