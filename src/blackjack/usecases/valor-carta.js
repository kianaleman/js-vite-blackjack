/**
 * Esta funcion devuelve el valor de la carta obtenida
 * @param {String} carta Es la carta que se obtuvo
 * @returns {Number} Retorna el valor de la carta, si la carta es un 10 de corazones la carta vale 10pts
 */
export const valorCarta = ( carta ) => {

    if(!carta)
        throw new Error('El parametro que recibe la funcion valorCarta() debe de ser un String, osea la carta que se obtuvo.');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
