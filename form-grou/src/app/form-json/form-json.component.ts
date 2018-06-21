import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-json',
  templateUrl: './form-json.component.html',
  styleUrls: ['./form-json.component.css']
})
export class FormJsonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formJson = {
    "name": name,
    "durationTimeMillis":0,
    "project":"",
    "tags":[],
    "notify":[],
    "properties": {
      "requests": [],
      "numConn": 0,
      "parallelLoaders": 1,
      "groupName": "default",
      "monitTargets" : "zero://1.1.1.1:9100?key=1.1.1.1:8000"
    }

  }
}
