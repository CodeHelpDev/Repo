import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user:any;
  constructor(
    public router : Router
  ) {
   
  }

  ngOnInit(){
    var loginUser= localStorage.getItem('InstaLoginUser');
    console.log('InstaLoginUser',loginUser);
    if (loginUser===null)
      {
        this.router.navigate(['/login']);        
      }
      else{
        this.router.navigate(['/tabs/home']);
      }
  }
}

