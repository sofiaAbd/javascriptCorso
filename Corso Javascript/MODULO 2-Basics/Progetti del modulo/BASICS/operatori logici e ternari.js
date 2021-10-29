
       // operatori logici
let codice_01 =100;                 
let codice_02 =200;                 // != diverso da 
let codice_03 =300;                 // && operatore AND
let codice_04 = 300;                // || operatore OR
                                    // === identico a

                                    
if(codice_01==codice_02&&codice_01!=codice_02){// restituisce true se entrambi le condizioni
                                                  //risultano vere altrimenti resistuirà false

    console.log(false);
}

else if (codice_03===codice_04||codice_03<=codice_04){//restituisce false se entrambi le condizioni
                                                       // risultano false altrimenti restituirà true

    console.log(true);
}

    // operatori ternari

    let tern = 5<3?true:false;
    console.log(tern);
    
    let stop = false, age = 18;

     age >= 18 ? (
    alert("Marco potrà guidare l'automobile")
   
) : (
    stop = true,
    alert("Marco non potrà ancora guidare l'automobile")
);










