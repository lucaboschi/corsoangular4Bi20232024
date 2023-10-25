import { Component, OnInit } from '@angular/core';
import { DepInjService } from '../dep-inj.service';

@Component({
  selector: 'app-dep-inj-table',
  templateUrl: './dep-inj-table.component.html',
  styleUrls: ['./dep-inj-table.component.css']
})
export class DepInjTableComponent implements OnInit{

  messaggi!: String[];

  constructor(private depService:DepInjService)
  {
    
  }

  ngOnInit(): void {
    this.messaggi = this.depService.messaggi;    // funziona dato che sto passando un riferimento, NON un valore.
  }

}
