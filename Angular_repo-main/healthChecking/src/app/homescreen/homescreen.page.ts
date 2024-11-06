import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.page.html',
  styleUrls: ['./homescreen.page.scss'],
})
export class HomescreenPage implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  navigate(){
    this.router.navigate(['/symptoms']);

  }

}
