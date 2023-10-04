import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessaggiComponent } from './messaggi/messaggi.component';

@NgModule({
  declarations: [
    AppComponent,
    MessaggiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MessaggiComponent]
})
export class AppModule { }
