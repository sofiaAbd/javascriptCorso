

   let studenti = ['anna','marco','antonio','luca']

   console.log(studenti)

   studenti.forEach(function(elem,index){
    console.log(elem+' '+index);
});

console.log(studenti[2])



    function myFunc(nome,nazione,eta,indirizzo){



    return nome+'  '+nazione+'  '+eta+'  '+indirizzo
}

    console.log(myFunc('anna','italia',34,'medicina'))



    let students = {stud1:'anna',stud2:'marco',stud3:'luca',stud4:'marta'}

           students.stud5 ='antonio'
     console.log(students)


          class Products {
              

            telefono = ''
            jeans = ''
            pc= ''
                  

            constructor(telefono,jeans,pc){

                this.jeans = jeans
                this.pc=pc
                this.telefono = telefono

            }
          }

          let oggetto = new Products('Smartphone','Blue','Notebook')
               
          
  
          console.log(oggetto)