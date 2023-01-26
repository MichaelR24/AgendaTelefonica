import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  proiect="Agenda Telefonica";
  JsonContacte = '';
  
contacteDeAfisat:string=localStorage.getItem('contacte')!;
contacteFinale:{nume:string,numar:string}[]=JSON.parse(this.contacteDeAfisat);
contacte: {nume:string,numar:string}[]=JSON.parse(this.contacteDeAfisat);

seAfiseaza:boolean=false;

 

  trimiteDate(dateContact:{numeFinal:string,numarFinal:string}){
    this.contacte.push({nume:dateContact.numeFinal,numar:dateContact.numarFinal});
    this.JsonContacte = JSON.stringify(this.contacte);
    localStorage.setItem('contacte',this.JsonContacte);
    
  }
  afiseaza(){
    this.contacteDeAfisat=localStorage.getItem('contacte')!;
    this.contacteFinale=JSON.parse(this.contacteDeAfisat);
    this.seAfiseaza=!this.seAfiseaza;

  }
  updateLista(){
    this.contacteDeAfisat=localStorage.getItem('contacte')!;
    this.contacteFinale=JSON.parse(this.contacteDeAfisat);
  }

  
}
