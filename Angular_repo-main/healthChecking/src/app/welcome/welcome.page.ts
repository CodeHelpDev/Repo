import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  start(){
    this.router.navigate(['/signup']);
  }
}
