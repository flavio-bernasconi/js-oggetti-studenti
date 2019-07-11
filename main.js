console.log("PRIMA PARTE");
// creo il primo oggetto studenteUno
var studenteUno = {
  nome : "flavio",
  cognome : "bernasconi",
  eta : 12
}
//x corrisponde al valore della chiave
for (var valoreKey in studenteUno) {
  console.log(studenteUno[valoreKey]);
}
////////////
console.log("SECONDA PARTE");
//creo un array che contiene gli oggetti stundente
var studenti = [
  { nome : "marco ",cognome : "sassi",eta : 14 },
  { nome : "matteo",cognome : "rossi", eta : 17 },
  { nome : "mirco",cognome : "neri", eta : 17 }
]
//inizializzo un ciclo for della lunghezza dell array stundenti
//dove stampo il valore della chiave nome e cognome per ognuno di loro
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + " " + studenti[i].cognome);
}
//////////////
console.log("TERZA  PARTE");
//l utente inserisce 3 prompt che valorizza una variabile
var nomeInserito = prompt("inserisci nuovo nome");
var cognomeInserito = prompt("inserisci nuovo cognome");
var etaInserita = parseInt(prompt("inserisci nuovo eta"));

//creo un oggetto dove le chiavi hanno un valore definito da variabili

studenti.push({nome : nomeInserito ,cognome : cognomeInserito , eta : etaInserita });
console.log(studenti);







//
