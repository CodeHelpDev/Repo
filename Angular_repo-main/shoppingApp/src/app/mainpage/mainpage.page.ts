import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  routeTo(){
    this.router.navigate(['/mainpage2']);

  }

}
