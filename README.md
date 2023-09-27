# corsoangular4Bi20232024

## Link interessanti

[Repository Andrea Trentini] [https://github.com/andreatrentini/corsoangular4Bi20232024]

[Node JS] [https://nodejs.org/it]
[Angular]  [https://angular.io/]
[Bootstrap] [https://getbootstrap.com/]
[Material] [https://m3.material.io/]

## Node
Node.js® è un runtime JavaScript costruito sul motore JavaScript V8 di Chrome.

npm:  Node Package Manager


Terminal:  node -v  restituisce la versione attuale.
In Codespace è già installato.

#### Comandi npm
npm -v   restituisce la versione attuale (già installato in Codespace)
npm install -g @angular/cli
npm install -g npm@10.1.0     -g : global mode

Angular non è installato su Codespace.

## Angular

### Installare Angular
1. Installare Node JS
2. Installare Angular CLI (Common Line Interface)
```
npm install @angular*cli
```

npm install -g npm@10.1.0     -g : global mode

### Comandi Angular

Help:
```
ng --help
```

#### Con quale ambiente stiamo lavorando:
```
ng version
```

#### Creare una nuova area di lavoro:
```
ng new nome    (ad esempio:      ng new prima-applicazione)
```

NB: nei nome dei servizi, non utilizzare la notazione a cammello; per le parole composte, utilizzare come separatore il trattino

Alla creazione, ci chiede se vogliamo gestire anche il routing. Per ora, diciamo di no.
Poi ci chiede quale foglio di stile utilizzare: per default, CSS.

Se vado nei file, noto che ha creato una cartella con il nome che ho inventato (first-app).

NB: i file che abbiamo nella cartella dell'applicazione non sono l'applicazione angular. L'applicazione è fatta da 5 file: html, css e alcuni file javacript.


#### Alcuni file
angular.json: tiene traccia e gestisce la nostra applicazione
package.json: definisce una serie di parametri (nome, versione dell'applicazione). La parte più importante sono le dependencies: tutte le librerie ed i package necessari per il funzionamento di questo progetto.
I file del node_ modules non vengono salvati nel commit. Come faccio a portare via questi file? La node_modules può essere installata su ogni macchina facendo semplicemente un npm install.
Ad esempio, se cancello la cartella node_modules, mi posiziono nella cartalla del progetto con un CD (ad esempio, cd first-app) e poi lancio il comando npm install.
Come fa a capire di non portarsi in giro la cartella node_ modules?
C'è un file chiamato .gitignore in cui è indicato cosa deve ignorare git. Quando eseguiamo ng new, crea questo file: quindi, siamo sicuri che non verrà portato in giro.

src: cartella principale

##### index.html: 
file dell'applicazione.
Alla riga 11, c'è scritto: <app-root></app-root>

In HTML, tra parentesi angolari è ripoartato normalmente un tag.
app-root : è un COMPONENTE.
Per essere inserito in una pagina web, deve avere un nome e l'inserimento avviene come si gestisce un qualsiasi altro tag.
app-root contiene codice HTML che viene iniettato in quel punto.
index.html non viene mai modificato.
La modifica della pagina viene fatta modificando app-root oppure introducendo altri componenti.

##### styles.css
Permette di definire lo stile globale per i vari componenti

##### cartella assets
Va a finire anche nel buid dell'applicazione.
Contiene i multimedia utilizzati nella mia applicazione (immagini, video, ...).
La cartella assets è l'unica che manterrà il proprio contenuto nel build finale dell'applicazione.

##### favicon.ico
La predefinita è la A di angular. Si può anche personalizzare.

##### app
Contiene tutti i file della nostra applicazione.

##### I componenti di una applicazione
In Angular posso creare una serie di elementi.
Il più importante è il COMPONENT.
La costruzione di un'applicazione Angular è fatta da un insieme di component. Suddiviso la mia applicazione in una serie di component: un component per la barra dei menù, un component per la parte a sinistra, uno per il footer, ...
Questo mi permette riusabilità dei componenti, maggiore gestione.
Ho poi dei meccanismi per fare in modo che i componenti di parlino tra di loro.
Un componente è l'unione di tre cose.
1) Ho una classe che definisce il mio componente: classe typescript.
Tramite questa, definisco la Business logic: cosa fa il mio componente.
2) Vista del componente. Viene definito in html. 
3) Stile del componente. Definito con css.

Un component è identificato da un SELETTORE (ad esempio, app-root è un selettore, la radice della mia applicazione); un selettore è un nome di un tag.

In Angular, i nomi dei file vengono definiti in modo particolare.
app.component.css: foglio di stile 
app.component.html: template
app.component.ts: business logic
app.component.spec.ts: test automatici per quel componente

app.module.ts: non fa parte del componente, ma è il file più importante. Contiene i moduli della mia applicazione. Quello che viene utilizzato per il build dell'applicazione è solo quello che viene dichiarato in questo file. Se creo dei componenti ma non li inserisco nel file app.module.ts, questi non verranno utilizzati nella build.

##### app.component.ts
```
import { Component } from '@angular/core';
```

Indico quali sono le cose che utilizzo nel mio codice.

Quando davanti ad una parola chiave cìè una chiocciola, quella diventa un decoratore che definisce che cosa c'è sotto.

@Component
Nella riga 8, chi dice ad Angular che export class AppComponent è un component? La @Component che sta sopra.

Il @Component ha una serie di proprietà:
1) selector: nome del component
2) template: file html
3) style: ho un array di fogli di stile

Trovo scritto templateUrl, styleUrls: permette di richiamare dei file.
Posso scrivere anche: template, style: scrivo direttamente il codice in quel punto.


##### app.component.html
Posso cancellare tutto che c'è scritto e personalizzare il mio componente.
Ad esempio, scrivo: <h1>First-app</h1>

##### app.component.css
Descrivo lo stile del componente.


##### app.module.ts
Le nuove versioni non prevedono questo file.
Che cosa trovo dentro?

@NgModule: 
viene importato NgModule, Browser e AppComponent dichiarato prima.

declaration: tutti i componenti che voglio usare nella mia applicazione, devono essere presenti nell'array declaration. Quello che è fuori dall'array, per Angular non esiste.

imports: se voglio moduli particolari, li devo importare

providers: non più usato. Consentirebbe di definire dei servizi. Adesso si usa però un altro sistema.

bootstrap: il primo componente che viene fatto partire

Nella classe AppModule generalmente non si scrive nulla.
export class AppModule { }

Quello che conta è il decoratore della classe.



#### Eseguire l'applicazione
1) Faccio il build dei file e li carico in un server.
2) Faccio il build dell'applicazione; mando in esecuzione il web server di sviluppo per testare la nostra applicazione. PEr far ciò, utilizzo il comando ng serve.
A quel punto, cliccando in basso sulle porte, dalla finestra che si apre, in indirizzo locale, clicco sull'icona del mondo.


##### Dichiarazione di variabili in typescript
nome: tipo
inoltre, posso assegnare un valore

nome: tipo = valore

Ad esempio:
```
export class AppComponent {
  message: String = 'Benvenuto'
}
```
NB: message è un attributo di una classe, non una variabile.

##### Visualizzazione di un attributo di una classe in html
###### String Interpolation
Modalità di tipo: one-way binding
Per visualizzare l'attributo utilizzo la tecnica:

String interpolation: prendo una attributo della business  logic e lo visualizza nel template.
Come lo realizzo?
Vado nel file html e, utilizzando il tag che voglio (ad esempio, h2), scrivo tra doppie parentesi graffe il nome dell'attributo:

<h2>{{message}}</h2>

Altro esempio.

Nella file TS:
```
export class AppComponent {
  message: String = 'Benvenuto'
  nrStudenti: number = 16;
}
```

Nel file HTML:
```
<p>There are {{nrStudenti}} studenti</p>
```

###### Property Binding
Modalità di tipo: one-way binding.
Creo un collegamento tra una proprietà di un tag html ed un attributo della classe. Modalità operativa: metto la proprietà tra parentesi quadrate.

In TS: 
```
export class AppComponent {
  message: String = 'Benvenuto';
  nrStudenti: number = 16;
  textColor: String = 'blue';
}
```

In HTML:
```
<p [style.color]="textColor">There are {{nrStudenti}} studenti</p>
```

###### Two-way Binding
modalità di tipo: two-way binding.

#### Libreria zone.js
La libreria, quando cambiano i valori degli attributi, aggiorna la pagina. Facciamo un esempio: Vogliamo far diminuire il numero di studenti di una classe, eventualmente cambiando colore.

#### metodo OnInit

export class AppComponent implements OnInit

Il metodo OnInit viene eseguito quando è terminato il render del componente nel browser.
```
ngOnInit(): void {
    setInterval(() => {
      this.nrStudenti--;
      if(this.nrStudenti<8) {
        this.textColor = 'red';
      }
    },2000);
  }
```
Per accedere all'attributo della classe, devo scrivere: this.nrStudenti
Quello che noto è che, nella pagina web, i valori vengono aggiornati senza che io faccia nulla; ci pensa la libreria zone.js.