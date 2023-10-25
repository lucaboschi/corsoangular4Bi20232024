import { Component, OnInit } from '@angular/core';
import { IStudente } from 'src/app/common/studente.interface';
import { StudentiService } from '../studenti.service';

@Component({
  selector: 'app-studenti-service-form',
  templateUrl: './studenti-service-form.component.html',
  styleUrls: ['./studenti-service-form.component.css']
})
export class StudentiServiceFormComponent {

  studenti:IStudente[] = [];

  constructor(private studentiService:StudentiService){}

  

  aggiungiStudente(inputNome:HTMLInputElement, inputCognome:HTMLInputElement, inputClasse:HTMLInputElement):void{
    let nuovStudente:IStudente = {
      nome:inputNome.value,
      cognome:inputCognome.value,
      classe:inputClasse.value
    };

    inputNome.value = '';
    inputCognome.value = '';
    inputClasse.value = '';
    this.studentiService.add(nuovStudente);
  }

  

}
