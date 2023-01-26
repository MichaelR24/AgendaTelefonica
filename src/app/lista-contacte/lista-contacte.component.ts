import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-lista-contacte',
  templateUrl: './lista-contacte.component.html',
  styleUrls: ['./lista-contacte.component.css']
})
export class ListaContacteComponent {
    @Input () acordDeAfisare:boolean=false;

    @Input() contacteLista: {nume:string,numar:string}[]=[];
    
    stergeElement(index:number){
      this.contacteLista.splice(index,1);
    }

    }
   
    

     

    



  



