import { calculoTempo } from './calculoTempo.ts';
import { Veiculo } from './interface.ts';

export const patio  = ()=>{
    const  patioElement = (query : string):HTMLInputElement | null => document.querySelector(query);

    /* funções closures  */
    const ler = ():Veiculo[] =>{

   return localStorage.patio?JSON.parse(localStorage.patio):[];
     

    }
    const adicionar = (veiculo:Veiculo & {cupom?: string},salva?:boolean)=>{
        const linha = document.createElement("tr");
        
      
        linha.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
            <button type="button" class="delete" data-placa="${veiculo.placa}">X</button>
            </td>
        
        
        `
       
     
       linha.querySelector(".delete")?.addEventListener("click",()=>{
        remover(veiculo.placa);
       })

        patioElement("#patio")?.appendChild(linha);
        if (salva) salvar([...ler(),veiculo]);
      

    }
    const remover  = (placa:string)=>{
            const {entrada}  = ler().find(veiculo=>{veiculo.placa === placa})
            const {nome}  = ler().find(veiculo=>{veiculo.placa === placa})
            const tempo  = calculoTempo(new Date().getTime() - new Date(entrada).getTime());

            if(confirm(`o veiculo ${nome} permaneceu por ${tempo} Deseja encerrar a ocupação da vaga?`)) return;
            salvar(ler().filter(veiculo=>veiculo.placa!==placa));
            renderizar();
    }

    const salvar = (veiculos:Veiculo[])=>{

       localStorage.setItem("patio",JSON.stringify(veiculos));
        
    }
    /*  função para manipular o DOM  renderizar */
    const renderizar = ()=>{
        
            patioElement("#patio")!.innerHTML = "";
            const patio = ler();
            patio.length?
            patio.forEach(veiculo=>adicionar(veiculo)):
            "não foi adicionado veiculo";
    }

    return{
        ler,
        adicionar,
        remover,
        salvar,
        renderizar
    }
   
};

