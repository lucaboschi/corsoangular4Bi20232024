import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessaggiComponent } from './messaggi/messaggi.component';
import { DepInjContainerComponent } from './dep-inj/dep-inj-container/dep-inj-container.component';
import { DepInjFormComponent } from './dep-inj/dep-inj-form/dep-inj-form.component';
import { DepInjTableComponent } from './dep-inj/dep-inj-table/dep-inj-table.component';
import { StudentiServiceTableComponent } from './studenti-service/studenti-service-table/studenti-service-table.component';
import { StudentiServiceFormComponent } from './studenti-service/studenti-service-form/studenti-service-form.component';
import { StudentiServiceContainerComponent } from './studenti-service/studenti-service-container/studenti-service-container.component';
import { ObservableContainerComponent } from './observable/observable-container/observable-container.component';
import { ObserverComponent } from './observable/observer/observer.component';
import { LogEmitterComponent } from './subject/log-emitter/log-emitter.component';
import { SubjectContainerComponent } from './subject/subject-container/subject-container.component';
import { ReceiverAComponent } from './subject/receiver-a/receiver-a.component';
import { ReceiverBComponent } from './subject/receiver-b/receiver-b.component';

@NgModule({
  declarations: [
    AppComponent,
    MessaggiComponent,
    DepInjContainerComponent,
    DepInjFormComponent,
    DepInjTableComponent,
    StudentiServiceTableComponent,
    StudentiServiceFormComponent,
    StudentiServiceContainerComponent,
    ObservableContainerComponent,
    ObserverComponent,
    LogEmitterComponent,
    SubjectContainerComponent,
    ReceiverAComponent,
    ReceiverBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
