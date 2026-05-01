import { obtenerMotos } from "./dataService.js";
import { renderDashboard, renderError, renderFeatures, renderHome } from "./ui.js";

const navLinks = document.querySelectorAll(".nav-link");
const navLinksContainer = document.querySelector("#navLinks");
const menuButton = document.querySelector("#menuButton");

let motos = [];

async function iniciarAplicacion() {
  try {
    motos = await obtenerMotos();
    navegar();
  } catch (error) {
    renderError(error.message);
  }
}

function navegar() {
  const ruta = obtenerRuta();

  actualizarNavbar(ruta);

  if (ruta === "dashboard") {
    renderDashboard(motos);
    return;
  }

  if (ruta === "features") {
    renderFeatures();
    return;
  }

  renderHome();
}

function obtenerRuta() {
  const hash = window.location.hash.replace("#", "");
  return hash || "home";
}

function actualizarNavbar(ruta) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.route === ruta);
  });
}

window.addEventListener("hashchange", navegar);

menuButton.addEventListener("click", () => {
  navLinksContainer.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-route]");

  if (link) {
    navLinksContainer.classList.remove("open");
  }
});

iniciarAplicacion();
