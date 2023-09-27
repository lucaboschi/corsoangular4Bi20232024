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

  ngOnInit(): void {
    setInterval(() => {
      this.nrStudenti--;
      if(this.nrStudenti<8) {
        this.textColor = 'red';
      }
    },2000);
  }
}
