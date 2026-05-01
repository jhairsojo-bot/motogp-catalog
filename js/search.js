// Busqueda lineal: revisa cada moto una por una.
export function buscarMotosLineal(motos, texto) {
  const resultado = [];
  const busqueda = texto.toLowerCase().trim();

  if (busqueda === "") {
    return motos;
  }

  for (let i = 0; i < motos.length; i++) {
    const moto = motos[i];
    const campos = `${moto.nombre} ${moto.equipo} ${moto.marca}`.toLowerCase();

    if (campos.includes(busqueda)) {
      resultado.push(moto);
    }
  }

  return resultado;
}
