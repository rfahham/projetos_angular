import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }

  @Input() titulo;
  @Input() url;

}
