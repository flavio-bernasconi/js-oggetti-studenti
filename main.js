console.log("PRIMA PARTE");
// creo il primo oggetto studenteUno
var studenteUno = {
  nome : "Gon",
  cognome : "Fricks",
  eta : 12
}
//x corrisponde al valore della chiave
for (var x in studenteUno) {
  console.log(studenteUno[x]);
}
////////////
console.log("SECONDA PARTE");
//creo altri oggetti stundente
var studenteDue = {
  nome : "edward",
  cognome : "elric",
  eta : 14
}
var studenteTre = {
  nome : "ken",
  cognome : "kaneki",
  eta : 17
}

//creo un array che contiene gli oggetti stundente
var studenti = [studenteUno,studenteDue,studenteTre];
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
var etaInserita = prompt("inserisci nuovo eta");

//creo un oggetto dove le chiavi hanno un valore definito da variabili
var newStudente = {
  nome : nomeInserito,
  cognome : cognomeInserito,
  eta : etaInserita
}
//oppure lascio l oggetto vuoto (newStudente) e definisco
//qui le sue proprieta
// newStudente.nome = nomeInserito;
// newStudente.cognome = cognomeInserito;
// newStudente.eta = etaInserita;

console.log(newStudente);






//
