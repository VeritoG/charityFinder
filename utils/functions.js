

const functions = {
    simplificarString: (cadena) => {
        // Ignorar Case Sensitivity - Convertir a Mayúsculas:
        cadena = cadena.toUpperCase();
        // Ignorar diacríticos (tildes, diéresis) - reemplazar por versión simple
        cadena = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // Ignorar signos de puntuación y caracteres especiales (excepto espacios) - los Borra
        cadena = cadena.normalize("NFD").replace(/[^0-9a-zA-Z\s]/g, "");
        // Corregir ocasiones donde haya ingresado doble-espacio: lo reemplaza por espaciado simple.
        cadena = cadena.replace(/ +(?= )/g, '')
        // Ignorar Espacios al principio y final - Limpiar
        cadena = cadena.trim();
        // logger.test(stringObtenido)
        return cadena
    },
   
}

module.exports = functions;


