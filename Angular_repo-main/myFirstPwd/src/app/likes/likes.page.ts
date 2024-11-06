import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss'],
})
export class LikesPage implements OnInit {
  loginUser: any;
  likedCarsArr: any = [];
  likedCarsLength: any;
  URL: any;
  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) {
    var user: any = localStorage.getItem('UserData');
    user = JSON.parse(user);
    this.loginUser = user.mobileno;
  }

  ngOnInit() {
    this.getLikedCars();
    console.log('this.route.url', this.router.url);

    this.URL = this.router.url;

  }
  logOut() {
    localStorage.removeItem('UserData');
    this.router.navigate(['/home']);
  }
  getLikedCars() {
    var likedCars: any = localStorage.getItem('likedCars')
    likedCars = JSON.parse(likedCars);
    console.log('get short', likedCars)
    console.log('likedCars',likedCars);
    if (likedCars) {
      this.likedCarsLength = likedCars.length;
      this.likedCarsArr = likedCars;
    }


  }

}
