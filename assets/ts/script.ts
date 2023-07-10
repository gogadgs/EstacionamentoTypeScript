import { patio } from '../ts/patio.ts';

const Patio = patio();


(()=>{
    const  $ = (query : string):HTMLInputElement | null => document.querySelector(query);
    $("#cadastrar")?.addEventListener('click',()=>{
        const nome = $("#nome")?.value;
        const placa= $("#placa")?.value;
        


        !placa === true  || !nome === true ?
        alert("nome e placa são campos obrigatórios"):
        Patio.adicionar({
            nome,
            placa,
            entrada:new Date().toISOString(),
            
     },true);

     Patio.renderizar();

    

        
     
  });
    
    
    
 
})
();

