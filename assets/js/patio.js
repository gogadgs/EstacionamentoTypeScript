"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import { calculoTempo } from '../js/calculoTempo.js';

export const patio = () => {

    const patioElement= (query) => document.querySelector(query);
    /* funções closures  */
    const ler = () => {
        return localStorage.patio?JSON.parse(localStorage.patio):[];
    };
    const adicionar = (veiculo,salva) => {
        const linha = document.createElement("tr");
        
        linha.innerHTML = `
        <td>${veiculo.nome}</td>
        <td>${veiculo.placa}</td>
        <td>${veiculo.entrada}</td>
        <td>
        <button type="button" class="delete" data-placa="${veiculo.placa}">X</button>
        </td>
        

        
        `;
        linha.querySelector(".delete")?.addEventListener("click",()=>{
            remover(veiculo.placa);
           })
        

        patioElement("#patio")?.appendChild(linha);
        if(salva!=true){
        salvar([...ler(),veiculo]);
        }
    };
    const remover = (placa) => {

        

        const veiculo = ler().find((veiculo) => veiculo.placa === placa);
            if (!veiculo) {
              console.log("Veículo não encontrado.");
              return;
            }

            const { entrada, nome } = veiculo;
            const tempo = calculoTempo(new Date().getTime() - new Date(entrada).getTime());

        if(confirm(`o veiculo ${nome} permaneceu por ${tempo} Deseja encerrar a ocupação da vaga?`)) {
        salvar(ler().filter((veiculo)=> veiculo.placa !== placa));
        renderizar();
        }
    };
    const salvar = (veiculos) => {
        localStorage.setItem("patio",JSON.stringify(veiculos));
    };
    /*  função para manipular o DOM  renderizar */
    const renderizar = () => {

        patioElement("#patio").innerHTML = "";
        const patio = ler();
        patio.length?
        patio.forEach(veiculo=>adicionar(veiculo,false)):
        "não foi adicionado veiculo";
    };
    return {
        ler,
        adicionar,
        remover,
        salvar,
        renderizar
    };
};
exports.patio = patio;
