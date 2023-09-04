/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I datatype possono essere:
1) stringhe: un insieme di caratteri, che devono essere inseriti all'interno di due apostrofi -o due virgolette- (es. 'palla').
2) numeri: 1, 2.5930, 10000000, 1/3. Qui le virgolette non andranno scritte, poiché renderebbero il numero una stringa. 
3) booleani: che sono "true" e "false. Ci permettono di capire se un valore è vero o falso. Per esempio se inseriamo nella console (3 < 5) avremo come risultato -true-. Viceversa con (3 > 5) il risultato sarà -false-.
4) undefined: quando una variabile non viene definita o quando è definita ma non le è stata assegnata alcun valore. Per esempio se creiamo una variabile con il nome "città" ma ad essa non associamo nessun valore, la risposta della console sarà -undefined-. 
5) null: quando volontariamente assegniamo a una variabile l'assenza di un valore.*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Guido";
// Ho usato myName invece di name poiché altrimenti mi segnava come "deprecated" la variabile.
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let sum = 12 + 20;
console.log(sum);
// altrimenti anche creando due variabili num1 e num2; una terza variabile sum = num1 + num2

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// myName = "Masi";
// console.log(myName);

// Possiamo vedere come all'interno della console risulti "Assignment to constant variable", poiché la variabile const non può cambiare, essa rimane per l'appunto costante.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let substraction = 4 - x;
// risultato = -8

console.log(substraction);

let substraction2 = x - 4;
// risultato = 8

console.log(substraction2);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);
// La console mi consegna false, le due stringhe sono effettivamente diverse.

// Possiamo usare anhce console.log(!(name1 === name2));
// La console mi consegna "true", le due stringhe sono effettivamente diverse.
name1 = name1.toLowerCase();
name2 = name2.toLowerCase();

console.log(name2);
// A questo punto anche la stringa di name2 è in minuscolo.

console.log(name1 === name2);
// La console mi consegna "true", le due variabili sono adesso uguali.
