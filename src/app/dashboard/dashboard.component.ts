import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

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

  ngOnInit() {

    this.getCovidCount()
  }


  getCovidCount() {

    this.service.getTimelinedata().subscribe((data) => {
      this.count["updated_at"] = data[0]["updated_at"]
      this.count["deaths"] = data[0]["deaths"]
      this.count["confirmed"] = data[0]["confirmed"]
      this.count["recovered"] = data[0]["recovered"]
      this.count["active"] = data[0]["active"]
    })
  }
}
