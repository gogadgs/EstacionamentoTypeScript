 interface Veiculo{
    nome?:string;
    placa?:string;
    entrada:Date | string;
    clientId?:string;
}
interface Pessoa{
    nome:string;
    CPF:string;
}

interface Cliente extends Pessoa{
    veiculos:Veiculo[];
}

export { Cliente, Veiculo };

