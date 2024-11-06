import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-seeall',
  templateUrl: './seeall.page.html',
  styleUrls: ['./seeall.page.scss'],
})
export class SeeallPage implements OnInit {
  finalDataArray: any = [];
  segmentValue: any = 'friends';
  constructor(
    public service: ServiceService
  ) { }

  async ngOnInit() {
    var follwers: any = await this.getFollowers();
    follwers = JSON.parse(follwers);
    this.service.getUsersData().subscribe((res: any) => {
      var temp = res.users;
      if (temp) {
        temp.forEach((element: any, index: any) => {
          if (follwers) {
            follwers.forEach((element1: any, index1: any) => {
              if (element.email === element1.email) {
                element.isFollow = true;
                temp[index] = element;
                this.finalDataArray = temp;
              }
            });
          }
        });
        console.log(this.finalDataArray);

      }
      this.setFinalData(this.finalDataArray);
    })
  }
  async switchSegment(event: any) {
    this.segmentValue = event.target.value;
    console.log(this.segmentValue);

  }
  async searchData(event: any) {
    var searchData: any = event.target.value;
    var storedUserData: any = await this.getFinalData();
    storedUserData = JSON.parse(storedUserData);
    if (searchData && this.finalDataArray) {
      this.finalDataArray = storedUserData.filter((x: any) => (((x.firstName).toLowerCase()).includes((searchData).toLowerCase()) ||
        ((x.lastName).toLowerCase()).includes((searchData).toLowerCase())
      ));

    } else {
      this.finalDataArray = storedUserData;
    }
  }

  async getFinalData() {
    var data: any = await Preferences.get({
      key: 'finalUserData'
    })
    return data.value;
  }

  async setFinalData(data: any) {
    await Preferences.set({
      key: 'finalUserData',
      value: JSON.stringify(data)
    })
  }
  async followUser(user: any) {
    var storedFollowers: any = await this.getFollowers();
    storedFollowers = JSON.parse(storedFollowers);
    if (storedFollowers) {
      var validFollower: any = storedFollowers.find((x: any) => {
        if (x.email === user.email) {
          return x;
        }
      })
      if (validFollower) {
        var index = storedFollowers.findIndex((x: any) => x.email === validFollower.email);
        storedFollowers.splice(index, 1);
        if (storedFollowers.length === 0) {
          this.removeFollwerKey();
        } else {
          this.setFollowers(storedFollowers);
        }
      } else {
        storedFollowers = storedFollowers.concat(user);
        this.setFollowers(storedFollowers)
      }
    } else {
      this.setFollowers([user]);
    }
    this.ngOnInit();
  }
  async setFollowers(data: any) {
    await Preferences.set({
      key: 'followers',
      value: JSON.stringify(data)
    })
  }
  async getFollowers() {
    var data: any = await Preferences.get({
      key: 'followers'
    })
    return data.value;
  }
  async removeFollwerKey() {
    await Preferences.remove({
      key: 'followers'
    })
  }
}
