import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  grou: any;
  test: any;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.grou = {};
  }

  criar(frm: FormGroup) {
    console.log(this.grou);
    console.log(this.test);
  }
}






// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }
