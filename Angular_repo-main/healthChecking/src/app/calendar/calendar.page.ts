import { Component, OnInit } from '@angular/core';
declare var google:any;
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadCharts();
  }

  loadCharts(){
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['days', 'Chances'],
        ['Mo', 30],
        ['Tu', 60],
        ['We', 20],
        ['Th', 50],
        ['Fr', 25],
        ['Sa', 40],
        ['Su', 35],
      
      ]);

      var options = {
        chart: {
          title: '',
          subtitle: '',
        },
        bars: 'vertical',
        vAxis: {title: 'Year', titleTextStyle: {color: 'black'}},
        series: [{color: 'black', visibleInLegend: true}, {color: 'black', visibleInLegend: false}],
        colors: ['black']

      };

      var chart = new google.charts.Bar(document.getElementById('test-card'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    }

  }

}
