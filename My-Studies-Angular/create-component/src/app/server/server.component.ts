import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
    .online{
      display: flex;
      color: red;
      justify-content: center;
    }
    .offline{
      display: flex;
      justify-content: center;
      color: blue;
    }
    `
  ]
})

export class ServerComponent{
  // reproduzir propriedades no modelo
  serverId: number = 10;
  serverStatus: string = "OffLine";

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
