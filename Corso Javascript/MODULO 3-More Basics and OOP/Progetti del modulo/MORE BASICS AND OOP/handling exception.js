

          try {

            let exc = 5/0;  // inserisco le istruzioni da eseguire

            
          } catch (error) {  // interviene se si presenta un eccezione
            
          }
                finally{

                console.log('Eccezione Gestita')    
                }



                

                try {
                  let und;
                  
                } catch (error) {
                  
                  
                }
                         finally{

                             console.log('Eccezione Gestita');
                         }
  



      
                         function getRectArea(width, height) {
                          if (width<height) {
                            throw 'Errore';
                          }
                        }
                        
                        try {
                          console.log(getRectArea(3,5));
                        } catch (error) {
                          
                          
                        }