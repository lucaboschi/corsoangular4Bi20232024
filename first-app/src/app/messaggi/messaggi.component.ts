import { Component } from '@angular/core';

@Component({
  selector: 'app-messaggi',
  templateUrl: './messaggi.component.html',
  styleUrls: ['./messaggi.component.css']
})

export class MessaggiComponent {
  // messaggi:string[] = [];  // assegno un array vuoto, altrimenti va in errore
  // messaggi2 = [];   posso fare anche così, ma non sarebbe tipizzata
  // Nel primo modo, in fase di scrittura del codice, mi darebbe errore se assegno
  // un intero ad un vettore di stringhe

  // invece di creare un vettore vuoto, gli assegno dei valori
  // per fare dei test
  messaggi: string[]=[];
  nuovoMessaggio:string='';

  aggiungiMessaggio():void
  {
    this.messaggi.push(this.nuovoMessaggio);
    this.nuovoMessaggio = '';
  }

  eliminaMessaggio(i:number):void
  {
    this.messaggi.splice(i,1);
  }
}
