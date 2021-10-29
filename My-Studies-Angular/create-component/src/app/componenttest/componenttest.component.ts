import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-componenttest',
    templateUrl: './componenttest.component.html',
    styleUrls: ['./componenttest.component.css']
})
export class ComponentTestComponent implements OnInit {

    teste_1 = "Primeiro teste";
    botao = false;
    servindoStatus = "Status não Funciona!"

    constructor(){
        setTimeout(() => {
            this.botao = true;
        }, 5000);
    }

    ngOnInit(){}

    onReset(){
        this.servindoStatus = '';
    }

    onChangeStatus(){
        this.servindoStatus = "Status Servido com Sucesso" + this.teste_1;
    }

    // Ele capta os eventos ocorridos 
    // dentro do campo input e atualiza a variavel 
    // teste_1 = "Primeiro teste"    
    onAtualizaTeste_1(event: Event){
        this.teste_1 = (<HTMLInputElement>event.target).value;
    }
}