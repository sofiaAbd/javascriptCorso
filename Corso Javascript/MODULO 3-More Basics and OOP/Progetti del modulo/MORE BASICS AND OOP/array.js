


let colori = ['rosso','verde','giallo']; // elementi aggiunti nell'array
let unsh = colori.unshift('blu')// aggiunto alla prima posizione un nuovo elemento
let pop= colori.pop();       // rimuove l'ultimo elemento dell'array
let push = colori.push('bianco');// aggiunge un nuovo elemento all'ultima posizione
colori = colori.sort();// ordino array

console.log(colori);// valori dell'array crescente
//colori = colori.reverse();// valori dell'array decrescente

console.log(colori.length)// lunghezza dell'array

colori.forEach(function(elem,index){// ciclare array
    console.log(elem+' '+index);
});


// array multidimensionale

let multi= [['anna',45],['paolo',10],['luca',25],['alex',55]];


console.log(multi);




