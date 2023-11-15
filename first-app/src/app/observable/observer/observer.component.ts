import { Component } from '@angular/core';
import { RandomEmitterService } from '../random-emitter.service';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})

// Dichiarare come parametro del costruttore
// un parametro private, farà sì che quando viene
// costruito l'oggetto, verrà passata l'istanza dell'oggetto
// servizio che è stata creata a livello root
//
// Controlla @Injectable({  providedIn: 'root' }) nel servizio RandomEmitterService
// Quanto meccanismo si chiama Dependency Injection
export class ObserverComponent {

  numeri:number[] = [];
  stato:string = "Non stai osservando";

  constructor(private randomService:RandomEmitterService) { }

  observer: any;

  osserva():void {
    this.stato = "Stai osservando";
    this.observer = this.randomService.numberEmitter.subscribe( {
      next: (numero) => {
        this.numeri.push(numero);
        this.stato = "Stai ricevendo numeri";
      },
      error: (errore) =>{ this.stato = "Errore";
      this.observer.unsubscribe();
      },
      complete: () =>{
        this.stato = "Hai smesso di osservare";
        this.observer.unsubscribe();
      }  
    });
  }


}
