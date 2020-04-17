import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: ApiService) { }

  count = {
    updated_at: "",
    deaths: "",
    confirmed: "",
    recovered: "",
    active: ""
  }
  worldcounttable: any;

  public options: any = {
    chart: {
      type: 'scatter',
      height: 700
    },
    title: {
      text: 'Sample Scatter Plot'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function () {
        return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) + ' y: ' + this.y.toFixed(2);
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function () {
          return Highcharts.dateFormat('%e %b %y', this.value);
        }
      }
    },
    series: [
      {
        name: 'Normal',
        turboThreshold: 500000,
        data: [[new Date('2018-01-25 18:38:31').getTime(), 2]]
      },
      {
        name: 'Abnormal',
        turboThreshold: 500000,
        data: [[new Date('2018-02-05 18:38:31').getTime(), 7]]
      }
    ]
  }

  ngOnInit() {
    Highcharts.chart('container', this.options);
    this.getCovidCount()
    this.getWorldCount()
  }

  getCovidCount() {
    this.service.getTimelinedata().subscribe((data) => {
      data = data.data
      this.count["updated_at"] = data[0]["updated_at"]
      this.count["deaths"] = data[0]["deaths"]
      this.count["confirmed"] = data[0]["confirmed"]
      this.count["recovered"] = data[0]["recovered"]
      this.count["active"] = data[0]["active"]
    })
  }
  
  getWorldCount() {
    this.service.getWorldCount().subscribe((data) => {
      this.worldcounttable = data.data;
    })
  }
}


