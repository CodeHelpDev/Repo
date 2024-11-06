import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menuType: string = 'overlay';
  isMenu: boolean = false;
  currentUrl:any =location.pathname;
  isLarge:boolean=true;
  constructor(
    public menu: MenuController,
    public router: Router,
    public navCtrl: NavController,
    public service:ServiceService
  ) {
  }
  async ngOnInit() {
    setTimeout(() => {
      console.log(this.router.url)
      this.currentUrl=location.pathname;      
    }, 500);
    var user = await this.service.getCurrentUser();
    console.log(user);
    if(user){
      this.router.navigate(['/ourevent'])
    }else{
      this.router.navigate([""])
    }
  }

  changeRoute(event: any) {
    this.currentUrl='';
    console.log(event);
    this.router.navigate(['/' + event])
    this.currentUrl='/'+event;
  }
  
}
