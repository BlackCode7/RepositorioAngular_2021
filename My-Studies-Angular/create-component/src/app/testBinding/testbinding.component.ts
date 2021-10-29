import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-testbinding',
    templateUrl: './testbinding.component.html',
    styleUrls: ['./testbinding.component.css']
})

export class TestbindingComponent implements OnInit {
    serveName = 'TesteServeName';
    desabilitaBotao = false;
    criandoStatus = "Status não foi criado!"

    constructor(){
        //Habilitando oBotão        
        setTimeout(() => {
            this.desabilitaBotao = true;
        }, 2000);
        
    }      

    ngOnInit(){} 

    onCreateServer(){
        this.criandoStatus = "Server was Created! " + this.serveName
    }

    onUpdateServeName(event: Event){
        this.serveName = (<HTMLInputElement>event.target).value;
    }
}