import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  posts: any=[];
  filteredPost:any=[];
  constructor(
    public route:ActivatedRoute,
    public service: ServiceService
  ) { }

  ngOnInit() {
  }
  dataGet(){
    this.service.getData().subscribe(res => {
      console.log(res);
      this.posts = res;
    })
  }
  ionViewWillEnter() {
    this.dataGet();
  }
  searchFilter(val: any) {
    console.log(val.detail.value);
    if(val.detail.value!=='')
      {
        this.filteredPost= this.posts.filter((x:any)=>x.title.toLowerCase().includes(val.detail.value));
        console.log('this.filteredPost',this.filteredPost); 
        this.posts= this.filteredPost;
      }
      else{
        this.dataGet();
      }    
    }    
}