import { Component } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public storage : StorageService,
    public router : Router
  ) {  
    this.storage.get('loginUser').then(res=>{
      console.log('res',res);
      if(res===null){
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['tabs/home']);
      }
    })
  }
  logout(){
    this.storage.clear('loginUser');
    
  }


}

