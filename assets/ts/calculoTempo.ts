export const calculoTempo = (milisegundos:number) : string=>{
        const minutos = Math.floor(milisegundos/ 60000);
        const segundos =Math.floor(milisegundos % 60000) / 1000;
        return `
        ${minutos}m  e ${segundos}s
        
        `;
}