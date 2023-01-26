import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formular-adaugare',
  templateUrl: './formular-adaugare.component.html',
  styleUrls: ['./formular-adaugare.component.css']
})
export class FormularAdaugareComponent {

  @ViewChild('campNume') numeInput: any;
  @ViewChild('campNumar') numarInput: any;
  acordAdaugare:boolean=true;
  


  @Input() nume='';
  @Input() numar='';

  @Output () adaugaContact = new EventEmitter<{numeFinal:string,numarFinal:string}>();
  @Output() refreshLista = new EventEmitter();
  @Output() afiseazaContacte = new EventEmitter();

  adaugaNume(event:Event){
    this.nume=(<HTMLInputElement>event.target).value;
  }
  adaugaNumar(event:Event){
    this.numar=(<HTMLInputElement>event.target).value;
  }
  eventAdauga(){
    if(this.numeInput.nativeElement.value!=='' && this.numarInput.nativeElement.value!==''){
        if(this.numarInput.nativeElement.value.length<7 || typeof(this.numarInput.nativeElement.value.length)!='number'){
          alert('Numarul trebuie sa aiba minim 7 cifre si sa fie format doar din cifre.');
          this.acordAdaugare=false;
        }else if(this.numeInput.nativeElement.value.length<3){
          alert('Numele trebuie sa aiba minim 3 caractere.');
          this.acordAdaugare=false;
        }else{
          this.acordAdaugare=true;
        }

          if(this.acordAdaugare){
              this.adaugaContact.emit({numeFinal:this.nume,numarFinal:this.numar});
              this.numeInput.nativeElement.value='';
              this.numarInput.nativeElement.value='';
              this.nume='';
              this.numar='';
          }
     }else{
      alert('Completati toate campurile!');
     }
  

  }
  eventRefresh(){
    this.refreshLista.emit();
  }
  eventAfiseaza(){
  this.afiseazaContacte.emit();
}
}
