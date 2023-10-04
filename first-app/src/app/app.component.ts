import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  message: string = 'Benvenuto';
  nrStudenti: number = 16;
  textColor: string = 'blue';
  timer:any;
  nome:string = 'Mario';


  ngOnInit(): void {
    /*
    cancello il codice: non parte il conteggio
    this.timer = setInterval(() => {
      this.nrStudenti--;
      if(this.nrStudenti<8) {
        this.textColor = 'red';
      }
    },1000);*/
  }

  reset(): void
  {
    clearInterval(this.timer);
    this.nrStudenti = 15;
    this.textColor = 'blue';
  }

  avvia(): void {
    this.timer = setInterval(() => {
      this.nrStudenti--;
      if(this.nrStudenti<8) {
        this.textColor = 'red';
      }
    },1000);
  }

  
}
