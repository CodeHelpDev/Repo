import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  addCardForm: FormGroup = new FormGroup({});
  totalAmmount: number = 0;
  isModalOpen: boolean = false;
  addressForm: FormGroup = new FormGroup({});
  currentUser: any = [];
  isAddressVisible: boolean = false;
  isOpenPaymentModal: boolean = false;
  cardNumber: any;
  orderDetails:any;
  constructor(
    public modal: ModalController,
    public router: Router
  ) { }

  async ngOnInit() {
    var data: any = this.router.getCurrentNavigation()?.extras.state
    
    this.orderDetails = data.data;
    (data.data).forEach((element: any, index: any) => {
      this.totalAmmount += (element.price) * (element.quantity);
    });
    this.addressForm = new FormGroup({
      address: new FormControl('', Validators.required)
    })
    this.addCardForm = new FormGroup({
      nameOnCard: new FormControl('', Validators.required),
      cardNumber: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
      expireDate: new FormControl('', Validators.required),
      cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      isDedaultCard: new FormControl(true, Validators.required)
    })
    this.initPage();
  }
  async onCardSubmit(formValue: any) {
    var storedUser: any = await this.getUsersData();
    storedUser = JSON.parse(storedUser);
    var currentUser: any = await this.getCurentUser();
    currentUser = JSON.parse(currentUser);
    if (storedUser && currentUser) {
      var index: any = storedUser.findIndex((x: any) => x.email === currentUser.email);
      var tempArr: any = [formValue]
      if (currentUser.paymentDetails) {
        if (formValue.isDedaultCard === false) {
          currentUser.paymentDetails[(currentUser.paymentDetails.length)] = formValue;
          storedUser.splice(index, 1, currentUser);
          this.setCurrentUser(currentUser);
          this.setUsersData(storedUser);
        } else {
          var tempArray: any = []
          console.log(currentUser.paymentDetails);
          (currentUser.paymentDetails).forEach((element: any, index: any) => {
            element.isDedaultCard = false;
            tempArray[index] = element
          });
          currentUser.paymentDetails[0] = formValue;
          currentUser.paymentDetails[currentUser.paymentDetails.length] = Object.assign({}, ...tempArray);
          storedUser.splice(index, 1, currentUser);
          this.setCurrentUser(currentUser);
          this.setUsersData(storedUser);
        }
      } else {
        currentUser.paymentDetails = tempArr;
        storedUser.splice(index, 1);
        storedUser = storedUser.concat(currentUser)
        this.setCurrentUser(currentUser);
        this.setUsersData(storedUser);
      }
      this.addCardForm.reset();
      this.modal.dismiss();
      this.initPage();
    }
  }

  clickToRoute() {
    var data: any = this.currentUser[0];
    data.orderDetails = this.orderDetails;
    this.router.navigate(['/shippingaddress'], { state: { data: data } })
  }
  togglePaymentModal() {
    if (this.isOpenPaymentModal === false) {
      this.isOpenPaymentModal = true;
    } else {
      this.isOpenPaymentModal = true;
    }
  }
  async initPage() {
    var currentUser = await this.getCurentUser();
    currentUser = JSON.parse(currentUser);
    this.currentUser[0] = currentUser;
    if (currentUser.address?.[0]) {
      this.isAddressVisible = true;
    }
    if (currentUser.paymentDetails) {
      this.cardNumber = (this.currentUser[0]?.paymentDetails[0]?.cardNumber).toString().substr(8, 12);
    }
  }
  async onSubmit(formValue: any) {
    console.log(formValue);
    var temp: any = [];
    temp = [formValue]
    var storedUser = await this.getUsersData();
    storedUser = JSON.parse(storedUser);
    var currentUser = await this.getCurentUser();
    currentUser = JSON.parse(currentUser);
    console.log(currentUser);

    if (storedUser && currentUser) {
      var index = storedUser.findIndex((x: any) => x.email === currentUser.email);
      if (currentUser?.address?.length) {
        currentUser.address[currentUser.address.length] = Object.assign({}, ...temp);
        storedUser.splice(index, 1, currentUser);
        this.setCurrentUser(currentUser);
        this.setUsersData(storedUser);
        this.addressForm.reset();
        this.isModalOpen = false;
      } else {
        currentUser.address = temp;
        storedUser.splice(index, 1, currentUser);
        this.setCurrentUser(currentUser);
        this.setUsersData(storedUser);
        this.addressForm.reset();
        this.isModalOpen = false;
      }
    }
    this.initPage();


  }
  toggleModal() {
    if (this.isModalOpen === true) {
      this.isModalOpen = false
    } else {
      this.isModalOpen = true;
    }
  }
  modalClose() {
    this.isModalOpen = false;
  }
  async getUsersData() {
    var data: any = await Preferences.get({
      key: 'signUpUser'
    })
    return data.value
  }
  async setUsersData(data: any) {
    await Preferences.set({
      key: 'signUpUser',
      value: JSON.stringify(data)
    })
  }
  async getCurentUser() {
    var data: any = await Preferences.get({
      key: 'currentUser'
    })
    return data.value;
  }
  async setCurrentUser(data: any) {
    await Preferences.set({
      key: 'currentUser',
      value: JSON.stringify(data)
    })
  }
}
