import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepInjService {

  messaggi:String[] = ['ciao','buongiorno','buonasera'];

  constructor() { }

  add(nuovoMessaggio:String): void
  {
    this.messaggi.push(nuovoMessaggio);
  }

  remove(indice:number): void
  {
    this.messaggi.splice(indice, 1);
  }

  update(indice:number, nuovoMessaggio:String): void
  {
    this.messaggi[indice] = nuovoMessaggio;
  }
}

