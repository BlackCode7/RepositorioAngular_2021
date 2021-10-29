import { Component, OnInit } from "@angular/core";

@Component({
  selector:'app-servers',
  templateUrl:'servers.component.html',
  styleUrls:['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServe = false;
  serverCreationStatus = "No server was created!"
  serverName = 'TestServerHere';
  // condicional of the *ngIf
  serverCreated = false;
  servers = ['TesteServer', 'TesteServer 2'];

  constructor(){
    // In constructor we set the enable of the button
    // event of the button
    setTimeout(() => {
      this.allowNewServe = true;
    },10)
  }
  ngOnInit(){}  
  
  onCreateServer(){
    // condicional of the *ngIf
    this.serverCreated = true;
    this.servers.push(this.serverName);
    //event of the interpolation
    this.serverCreationStatus = "Server was created! " + this.serverName;
  }
  //Input form-control
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;    
  }

 
}


