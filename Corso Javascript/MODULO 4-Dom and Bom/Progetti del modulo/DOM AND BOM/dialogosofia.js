    // DIALOGo BOX

    // let name=prompt("Ciao come ti chiami?");
    // alert("Benvenuto nel nostro gruppo");
    // let age=prompt("Quanti anni hai?");
    // if ( age == null){ 
    //  alert("Non hai scritto la tua età!");}
    //  else if ( age < 18){ 
    //     alert("il gruppo non è adatto a te!");}
     
    //   else{
     
    // (prompt("quali programmi conosci? ",));}
   
    // if(confirm("Complimenti Test Terminato") == true){
    //     alert("Grazie per aver eseguito il test");
    //    }
    //    else{
    //    confirm(" Riprovare per uscire "); }
   
//String

let txt = 'BUONGIONO !!!';
let sln = txt.length; // lunghezza caratteri 
console.log(sln);

sln= 'BUONA SERA';
let n= sln.replace('BUONA SERA','Buona sera');  // sostituisce valore iniziale
console.log(n);

let t1= '2021';
let t2 = 'anno';
let t3= t1.concat(t2); // concatena due valori
console.log(t3);

let tr= '     Javascript      ';  //rimuove spaziature da entrambi i lati
console.log(tr.trim());




   // object Math

   console.log(Math.E);// eulero
   console.log(Math.PI);// pigreco
   console.log(Math.abs(6));//valore assoluto passato come parametro ritorna 5
   console.log(Math.abs('string'));//valore assoluto passato come parametro ritorna NaN
   console.log(Math.abs([]));//valore assoluto passato come parametro ritorna 0
   console.log(Math.ceil(5.3));// forza il decimale al numero più grande
   console.log(Math.floor(4.6));//forza il decimale al numero più piccolo
   console.log(Math.sqrt(81));// radice quadrata
   console.log(Math.round(9.7));//se decimale minore di 5 arrotonda a 9 se = >5 arrotonda a 10
   console.log(Math.pow(9,2));// esponenziale
   console.log(Math.floor(Math.random()*5)+1);// numeri casuali da 1 a 5
   console.log(Math.floor(Math.random()*5)+1);// numeri casuali da 1 a 5
   console.log(Math.floor(Math.random()*5)+1);// numeri casuali da 1 a 5
   console.log(Number.MAX_VALUE);// valore massimo assoluto di Number
   console.log(Number.MIN_VALUE);
   
   
//object date
   
let data = new Date();

console.log(data.getDay());
console.log(data.getFullYear());
console.log(data.getHours());
console.log(data.getMonth());
console.log(data.getMinutes());

data.setFullYear(2021,09,28);
console.log(data);

let date = new Date("March 09, 2021 18:00:00");
date.setDate(date.getDate()-15);

console.log(date);

//typeof


let num = 5
let str = 'fabio'
let bool = true
let obj = {};
let fun = function(){
}
let nan = isNaN
console.log(typeof(num));
console.log(typeof(str));
console.log(typeof(bool));
console.log(typeof(obj));
console.log(typeof(fun));
console.log(isNaN('STRINGA'));

//debug