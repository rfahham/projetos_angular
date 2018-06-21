import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fotos: Object [] = [];

  constructor(http: Http) {

    let stream = http.get('http://localhost:3000/v1/fotos')
    stream.subscribe(res => {
      this.fotos = res.json();
      console.log(this.fotos)

    });

  }

}
