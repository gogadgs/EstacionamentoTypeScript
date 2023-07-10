"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import { patio } from "../js/patio.js";
const Patio = (0, patio)();
(() => {
    var _a;
    const $ = (query) => document.querySelector(query);
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b;
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        !placa === true || !nome === true ?
            alert("nome e placa são campos obrigatórios") :
            console.log(`Nome: ${nome}, Placa:${placa}`);
        Patio.adicionar({
            nome,
            placa,
            entrada: new Date().toLocaleTimeString() +" " +  new Date().toLocaleDateString(),
        });
        Patio.renderizar();
        Patio.remover();
    });
})();
