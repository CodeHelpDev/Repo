import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.page.html',
  styleUrls: ['./prepare.page.scss'],
})
export class PreparePage implements OnInit {
  HttpNativeProvider: any;

  constructor(
    public service :ServiceService,
  ) { }

  ngOnInit() {
    this.getJobData();
  }


  getJobData(){
    this.service.getApiData().subscribe(res=>{
      console.log(res);
    })
   
   
  }

}
