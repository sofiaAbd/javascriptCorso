
let accesso = 18
let userAge = 22
let nome = 'Marco'


 if (userAge>=accesso){

  console.log(nome +' '+ 'potrà guidare l auto')
  
 }

 else if(userAge<accesso){

      console.log(nome + ' '+ 'non potrà guidare l auto')
 }



      if (userAge!=accesso){
             
        for(userAge=22;userAge>accesso;userAge--)

        console.log(userAge)

      }

      else{

           for(accesso= 18;accesso<userAge;accesso++){

            console.log(accesso)
           }
      }
                  


      let days = 7;

  switch(days){

    case 1: 
    console.log('Lunedi');
    break;// comando break(interrompe ciclo)
    case 2:
    console.log('Martedì');
    break;
    case 7:
        console.log('Mercoledì');
    break;
    
    default:
        console.log("Day not found");
    break;

  }
   



