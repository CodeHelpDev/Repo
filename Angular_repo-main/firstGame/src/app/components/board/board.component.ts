import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent  implements OnInit {
  @Input() value:'X'|'0'| undefined; 
  constructor() {
   }

  ngOnInit() {}

}
