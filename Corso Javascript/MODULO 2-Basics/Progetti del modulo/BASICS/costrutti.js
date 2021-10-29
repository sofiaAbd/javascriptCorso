
// costrutti di controllo

let num1 = 50;
let num2 = 25;

if (num1>num2){

    console.log(true);
}
  else {
       console.log(false);

  }

   if (num2<num1){

    console.log('RIPROVA');            
                                        

  }
     
  if (50>30) {

    if (30 == 30) {
  
      console.log(true);
    } }else {
      
      console.log(false);
    }

  // costrutto controllo switch 

  let mese = 4;

  switch(mese){

    case 1: 
    console.log("Gennaio");
    break;// comando break(interrompe ciclo)
    case 2:
    console.log("Febbraio");
    break;
    case 3:
        console.log("Marzo");
    break;
    
    default:
        console.log("not found values");
    break;

  }

  // costrutto di iterazione  for


 

  let a;

  for (a=50;a>20;a--){ //a=a-5

    if(a==45){
      continue; //comando continue
  }

     console.log(a);
  }

   

  // construtto di iterazione while (itera finchè la condizione risulta vera)

  let b= 0;

  while (b<=18){

    b+=2;

    console.log(b);
  }

  // costrutto di iterazione do-while (esegue almeno un iterazione anche se risulta falsa)

  let c = 1;

do{
    

console.log(c);
c+=3;
} while(c<10);





