/**
 * Esta funcion permite tomar una carta del Arreglo De Cartas (DECK)
 * @param {Array<String>} deck Toma como argumento el DECK (Arreglo de cartas)
 * @returns {String} Devuelve una carta que fue tomada del DECK mediante .pop()
 */
export const pedirCarta = (deck) => {

    if(!deck)
        throw new Error ('El parametro debe la funcion pedirCarta() de ser un arreglo de String');
    else if( deck.length === 0 ) 
        throw new Error ('El deck se encuentra vacio.');

    const carta = deck.pop();
    return carta;
}