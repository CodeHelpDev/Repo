import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  logout(){
    this.removeLogOutKey();
    this.router.navigate(['/signin']);
  }
  async removeLogOutKey(){
    await Preferences.remove({
      key:'loginUser'
    })

  }
}
