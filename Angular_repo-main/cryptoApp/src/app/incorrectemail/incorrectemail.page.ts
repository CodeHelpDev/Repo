import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incorrectemail',
  templateUrl: './incorrectemail.page.html',
  styleUrls: ['./incorrectemail.page.scss'],
})
export class IncorrectemailPage implements OnInit {
incrrectemail:FormGroup= new FormGroup({});
  constructor() { }

  ngOnInit() {
    this.incrrectemail= new FormGroup({
      incorrectemail : new FormControl('',Validators.required)
    })
  }

}
