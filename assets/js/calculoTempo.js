export const calculoTempo = (milisegundos) =>{
    const minutos = Math.floor(-milisegundos / 600000);
    const segundos =Math.floor((-milisegundos % 60000)/1000);
    return `
    ${minutos}m  e ${segundos}s
    
    `;
}