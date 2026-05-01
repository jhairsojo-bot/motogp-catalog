// Este modulo se encarga solo de cargar los datos externos.
export async function obtenerMotos() {
  const respuesta = await fetch("./data/data.json");

  if (!respuesta.ok) {
    throw new Error("No se pudo cargar el archivo data.json.");
  }

  return await respuesta.json();
}
