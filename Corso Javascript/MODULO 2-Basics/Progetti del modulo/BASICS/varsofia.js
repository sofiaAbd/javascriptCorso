
let add = 2;
console.log(add+add);

let object = {giorno: 28, mese: 'ottobr[e', anno:'2021'};

console.log(object);

let array = [2021,'ottobre',28];



//operatori log.tern.

let primo = 50;
let secondo = 100;
let terzo = 150;
let quarto = 150;

if(primo==secondo&&primo!=secondo){
    
    console.log(false);
}

else if (terzo===quarto||terzo<=quarto){
    
    console.log(true);
}
else if (terzo===quarto||terzo<=quarto){
    
    console.log(false);
}

//operatori aritm. e di confronto

let addz = 18+2;
let prod = 5*2;
let div = 24/6;
let mod = 80%4;

console.log(addz+'\n'+prod+'\n'+div+'\n'+mod);
console.log(addz, prod, div, mod);
//if/else


let uno = 25;
let due = 20;

if (uno<due){
    console.log(true);
}

else if (uno>due){
    console.log(true);
}
else if (uno>due){
    console.log(false);
}


//CREARE UNA STRUTTURA DI CONTROLLO IN CUI VERIFICHI SE L'UTENTE ANTONIO PUò GUIDARE L'AUTOMOBILE 

let nome = 'antonio';
let age = 16;

if(age>=18){
    console.log(nome,'può guidare');
}
else {
    console.log(18-age, 'anni per guidare');
}


// let stud = 'Marco';
// let ore = 180;

// ore<= 200 ? (
//     alert('Marco promosso') 
    
// ) : (
//    ore>= 200,
//    alert ('Marco non è ammesso') 
// );

//controllo switch

let colore = 4;

switch(colore){
    case 1:
    console.log('rosso');
    break;
    case 2:
    console.log('giallo');
    break;
    case 3:
    console.log('blu');
    break;
    case 4:
    console.log('bianco');
    break;
    default:
    console.log("colore non trovato");
    break;
}



// costrutto di iterazione

let a;

  for (a=46;a>32;a--){ //a=a-5  //a--

    if(a==43){
      continue; 
  }

     console.log(a);
  }
  
  
  
 // construtto di iterazione while 

 let b= 0;

 while (b<=18){

   b+=6;

   console.log(b);
 } 
 
 
 let c = 2;

do{
    

console.log(c);
c  =4;
} while(c<18);
 