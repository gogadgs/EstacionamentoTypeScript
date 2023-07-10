import { Veiculo } from './interface.ts';
export declare const patio: () => {
    ler: () => Veiculo[];
    adicionar: (veiculo: Veiculo, salva?: boolean) => void;
    remover: (placa: string) => void;
    salvar: (veiculos: Veiculo[]) => void;
    renderizar: () => void;
};
//# sourceMappingURL=patio.d.ts.map