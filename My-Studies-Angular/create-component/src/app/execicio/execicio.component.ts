import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-execicio',
  templateUrl: './execicio.component.html',
  styleUrls: ['./execicio.component.css']
})
export class ExecicioComponent implements OnInit {

  showSecret = false;
  log1 = [];

  onToggleDisplay(){
    this.showSecret = !this.showSecret;
    this.log1;
  }

  constructor() { }


  ngOnInit(): void {
  }

}
