import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  postForm!: FormGroup;
  loginUserKey: any;
  reader:any;
  constructor() {
    var loginUser: any = localStorage.getItem('InstaLoginUser');
    loginUser = JSON.parse(loginUser);
    this.loginUserKey = loginUser.userKey;
    console.log('this.loginUserKey', this.loginUserKey)
  }

  ngOnInit() {
    this.postForm = new FormGroup({
      postImg: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  fill(e:any) {
    console.log(e);
      const file = e.target.files[0];
      this.reader = new FileReader();
      this.reader.addEventListener("load", () => {
        console.log(this.reader.result);
      });
      this.reader.readAsDataURL(file);
  }


  post(formValue: any) {
    console.log(formValue);
    var postDetails = {
      userKey: this.loginUserKey,
      image: this.reader.result,
      description: formValue.description
    };

    console.log('postDetails', postDetails);
    var arr: any = [];
    arr.push(postDetails);
    var storedPost: any = localStorage.getItem('post');
    storedPost = JSON.parse(storedPost);
    if (storedPost === null) {
      localStorage.setItem('post', JSON.stringify(arr));
      this.ngOnInit();
      this.postForm.reset();
    }
    else {
      arr = arr.concat(storedPost);
      localStorage.setItem('post', JSON.stringify(arr));
      this.ngOnInit();
      this.postForm.reset();
    }
  }



  renderPNG(fileName: string) {
    let reader = new FileReader();

    console.log('fileName', fileName)
  }
}
