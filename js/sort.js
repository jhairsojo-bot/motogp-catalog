// Ordenamiento burbuja: compara elementos vecinos y los intercambia.
export function ordenarMotosBurbuja(motos, criterio) {
  const copia = [...motos];

  for (let i = 0; i < copia.length - 1; i++) {
    for (let j = 0; j < copia.length - i - 1; j++) {
      const actual = copia[j];
      const siguiente = copia[j + 1];

      if (debeIntercambiar(actual, siguiente, criterio)) {
        const temporal = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = temporal;
      }
    }
  }

  return copia;
}

function debeIntercambiar(actual, siguiente, criterio) {
  if (criterio === "anio-desc") {
    return actual.anio < siguiente.anio;
  }

  if (criterio === "anio-asc") {
    return actual.anio > siguiente.anio;
  }

  if (criterio === "velocidad-desc") {
    return actual.velocidadMaxima < siguiente.velocidadMaxima;
  }

  if (criterio === "velocidad-asc") {
    return actual.velocidadMaxima > siguiente.velocidadMaxima;
  }

  return false;
}
