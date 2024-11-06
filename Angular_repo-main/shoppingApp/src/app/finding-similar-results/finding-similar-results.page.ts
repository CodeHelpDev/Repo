import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finding-similar-results',
  templateUrl: './finding-similar-results.page.html',
  styleUrls: ['./finding-similar-results.page.scss'],
})
export class FindingSimilarResultsPage implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/tabs/main']);
      console.log('Searching Completed ')
    }, 2000);
  }

}
