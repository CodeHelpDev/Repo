import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any;
  posts: any;
  userPost: any;
  imageVal: any;
  loginUser: any;
  editProfile!: FormGroup;
  editName: string = "";
  editStatus: string = "";
  editDob: string = "";
  validUserPost: any;
  currengtUser: any;
  description: any;
  image: any;
  elements: any=[];
  constructor(
    public service: ServiceService,
    public router: Router,
    public modal: ModalController
  ) { }
  ngOnInit() {
    // this.getAllPost();
    this.currengtUser = localStorage.getItem('InstaLoginUser');
    this.currengtUser = JSON.parse(this.currengtUser);
    console.log('currengtUser', this.currengtUser.userKey);

    this.getProfileData();
    console.log('userData', this.userData);
    this.editProfile = new FormGroup({
      userKey: new FormControl(this.currengtUser.userKey, Validators.required),
      name: new FormControl(this.editName, Validators.required),
      status: new FormControl(this.editStatus, Validators.required),
      dob: new FormControl(this.editDob, Validators.required)
    })
  }

  getAllPost() {
    var loginUser: any = localStorage.getItem('InstaLoginUser');
    loginUser = JSON.parse(loginUser);
    this.userData = loginUser.userKey;
    console.log("this.userData Get All pOost", this.userData)

    this.userPost = localStorage.getItem('post');
    this.userPost = JSON.parse(this.userPost);
    console.log('this.userPost', this.userPost);
    if (this.userPost === null) {
      console.log('No Post Found');
    }
    else {
      if (this.userPost !== undefined) {
        console.log('rhis', this.userPost.userKey);
        console.log('this.userData', this.userData);
        this.userPost.map((element: any) => {
          console.log(element.userKey);
          if (element.userKey === this.userData) {

            this.elements.push(element);
            console.log('kjdtyfuiopuhkjuighfuyigfhuyi',this.elements);
            // this.image = element.image;
            // this.description = element.description;
          }
        });
      }
    }
    this.loginUser = localStorage.getItem('InstaLoginUser');
    this.loginUser = JSON.parse(this.loginUser);
    console.log('loginUser', this.loginUser)
  }
  logOut() {
    localStorage.removeItem('InstaLoginUser');
    this.router.navigate(['/login']);
  }
  edit(formValue: any) {
    this.ngOnInit();
    var arr = [];
    arr.push(formValue);
    var updatedData: any = localStorage.getItem('userProfile');
    updatedData = JSON.parse(updatedData);
    if (updatedData === null) {
      localStorage.setItem('userProfile', JSON.stringify(arr));
      this.editProfile.reset();
      this.ngOnInit();
      this.modal.dismiss();
    }
    else {
      if (updatedData.find((x: any) => x.userKey === formValue.userKey)) {
        console.log('formValue', formValue);
        updatedData.splice(formValue.userKey, 1, formValue);
        localStorage.setItem('userProfile', JSON.stringify(updatedData));
        this.editProfile.reset();
        this.ngOnInit();
        this.modal.dismiss();
      }
      else {
        arr = arr.concat(updatedData);
        localStorage.setItem('userProfile', JSON.stringify(arr));
        this.editProfile.reset();
        this.ngOnInit();
        this.modal.dismiss();
      }
    }
  }
  getProfileData() {
    console.log(this.userData, 'getProfile', userProfile)
    var userProfile: any = localStorage.getItem('userProfile');
    console.log(userProfile, userProfile, userProfile)
    userProfile = JSON.parse(userProfile);
    if (userProfile !== null) {
      for (var i = 0; i < userProfile.length; i++) {
        console.log('this.currengtUser', this.currengtUser.userKey);
        console.log('userProfile[i].userKey', userProfile[i].userKey);
        if (this.currengtUser.userKey === userProfile[i].userKey) {
          this.editName = userProfile[i].name;
          this.editStatus = userProfile[i].status;
          this.editDob = userProfile[i].dob;
          console.log(this.editStatus, this.editName, this.editDob);
        }
      }
    }
  }
  ionViewWillEnter() {
    this.getAllPost();
  }
}