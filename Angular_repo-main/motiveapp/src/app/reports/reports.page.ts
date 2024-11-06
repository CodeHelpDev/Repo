import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import * as $ from 'jquery';
import { Preferences } from '@capacitor/preferences';

declare var google :any;
declare var jQuery :any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  segmentValue:any='reports';
  reportsData:any;
  participants:any=[];
  constructor(
    public service:ServiceService
  ) { }

  ngOnInit() {
    this.service.getChartsDataFromApi().subscribe((res:any)=>{
      console.log(res.students);
      this.reportsData=res.students;
      console.log(this.reportsData);
    })
    // this.loadreportCharts();
    // this.displayData();
  }
  ionViewWillEnter(){
    this.displayData();
    setTimeout(() => {
      this.loadreportCharts();
    }, 100);    
  }
  async searchValue(event:any){
    console.log(event.target.value);
    var data:any = await this.getData();
    data = JSON.parse(data);
    console.log(data);
    this.participants = data.filter((x:any)=>((x.participantName).toLowerCase()).includes((event.target.value).toLowerCase()) || ((x.email)).toLowerCase().includes((event.target.value).toLowerCase()));  
    console.log(this.participants);
  }
  async displayData(){
    var storedParticipants:any = await this.getData();
    storedParticipants = JSON.parse(storedParticipants)
    console.log(storedParticipants)
    this.participants=storedParticipants;
  }
  loadreportCharts(){
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }
  loadLiveCharts(){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawChart1.bind(this));
  }
  seg(event:any){
    this.segmentValue = event.target.value;
    console.log(this.segmentValue);
    if(this.segmentValue==='reports'){
      setTimeout(() => {
        this.loadreportCharts();
      }, 150);
      
    }
    else if (this.segmentValue==='live'){
      setTimeout(() => {
        this.loadLiveCharts();
      }, 150);
    }
    else{
      console.log('Participants Data ');
    }
  }
  drawChart1() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);

  }
   drawChart() {
    if(this.reportsData){
      console.log(this.reportsData[0].id);
      var data = google.visualization.arrayToDataTable([
        ['Name', 'Id'],
        [this.reportsData[0].name,this.reportsData[0].id],
        [this.reportsData[1].name,this.reportsData[1].id],
        [this.reportsData[2].name,this.reportsData[2].id],
        [this.reportsData[3].name,this.reportsData[3].id]
      ]);

      var options = {
        title: 'Games Reports',
        pieHole: 0.4,
      };  
      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);

    }
  }
  async getData(){
   var data = await Preferences.get({
      key:'participantForm'
    })
    return data.value
  }
}
