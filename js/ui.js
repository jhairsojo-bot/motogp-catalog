import { buscarMotosLineal } from "./search.js";
import { ordenarMotosBurbuja } from "./sort.js";

const app = document.querySelector("#app");
const CLAVE_BUSQUEDA = "motogpUltimaBusqueda";
const CLAVE_ORDEN = "motogpUltimoOrden";

export function renderHome() {
  app.innerHTML = `
    <section class="section hero" id="home">
      <div>
        <span class="eyebrow">MotoGP racing catalog</span>
        <h1>Motos prototipo por equipo y livery</h1>
        <p>
          Explora una coleccion de motos MotoGP separadas por equipo. Una misma moto puede
          aparecer en distintas versiones visuales segun su livery de competicion.
        </p>
        <div class="hero-actions">
          <a href="#dashboard" class="button button-primary" data-route="dashboard">Ver catalogo</a>
          <a href="#features" class="button button-secondary" data-route="features">Funciones</a>
        </div>
      </div>

      <aside class="hero-board">
        <div class="board-row">
          <div>
            <strong>Equipos reales</strong>
            <span>Ducati, Honda, KTM, Yamaha y Aprilia</span>
          </div>
          <div class="board-number">11</div>
        </div>
        <div class="board-row">
          <div>
            <strong>Algoritmos</strong>
            <span>Busqueda lineal y ordenamiento burbuja</span>
          </div>
          <div class="board-number">2</div>
        </div>
        <div class="board-row">
          <div>
            <strong>Datos JSON</strong>
            <span>Consumidos con fetch y async/await</span>
          </div>
          <div class="board-number">JS</div>
        </div>
      </aside>
    </section>

    ${crearFeatures()}
    ${crearFooter()}
  `;
}

export function renderFeatures() {
  app.innerHTML = `
    ${crearFeatures()}
    ${crearFooter()}
  `;
}

export function renderDashboard(motos) {
  const busquedaGuardada = localStorage.getItem(CLAVE_BUSQUEDA) || "";
  const ordenGuardado = localStorage.getItem(CLAVE_ORDEN) || "anio-desc";

  app.innerHTML = `
    <section class="section">
      <div class="dashboard-title">
        <div>
          <span class="eyebrow">Dashboard</span>
          <h1>Catalogo MotoGP</h1>
          <p>Filtra por nombre, equipo o marca. Ordena por año o velocidad maxima.</p>
        </div>
        <div class="counter" id="counter"></div>
      </div>

      <div class="controls">
        <input
          id="searchInput"
          class="search-input"
          type="search"
          placeholder="Buscar moto, equipo o marca"
          value="${busquedaGuardada}"
        >

        <select id="sortSelect" class="select-input">
          <option value="anio-desc" ${ordenGuardado === "anio-desc" ? "selected" : ""}>Año: mayor a menor</option>
          <option value="anio-asc" ${ordenGuardado === "anio-asc" ? "selected" : ""}>Año: menor a mayor</option>
          <option value="velocidad-desc" ${ordenGuardado === "velocidad-desc" ? "selected" : ""}>Velocidad: mayor a menor</option>
          <option value="velocidad-asc" ${ordenGuardado === "velocidad-asc" ? "selected" : ""}>Velocidad: menor a mayor</option>
        </select>
      </div>

      <div class="cards-grid" id="cardsContainer"></div>
    </section>
  `;

  const searchInput = document.querySelector("#searchInput");
  const sortSelect = document.querySelector("#sortSelect");
  const cardsContainer = document.querySelector("#cardsContainer");
  const counter = document.querySelector("#counter");

  function actualizarDashboard() {
    const textoBusqueda = searchInput.value;
    const orden = sortSelect.value;

    localStorage.setItem(CLAVE_BUSQUEDA, textoBusqueda);
    localStorage.setItem(CLAVE_ORDEN, orden);

    const motosFiltradas = buscarMotosLineal(motos, textoBusqueda);
    const motosOrdenadas = ordenarMotosBurbuja(motosFiltradas, orden);

    counter.textContent = `${motosOrdenadas.length} motos`;
    pintarCards(cardsContainer, motosOrdenadas);
  }

  searchInput.addEventListener("input", actualizarDashboard);
  sortSelect.addEventListener("change", actualizarDashboard);

  actualizarDashboard();
}

export function renderError(mensaje) {
  app.innerHTML = `
    <section class="section">
      <div class="error-message">${mensaje}</div>
    </section>
  `;
}

function crearFeatures() {
  return `
    <section class="section" id="features">
      <span class="eyebrow">Innovación 2026</span>
      <h2 class="section-title">Explora la Nueva Era</h2>
      <p class="section-intro">
        Este prototipo utiliza tecnologías web modernas para ofrecerte un análisis detallado 
        de los cambios técnicos y aerodinámicos de la próxima temporada.
      </p>

      <div class="features-grid">
        <article class="feature-card">
          <div class="feature-icon"></div>
          <h3>Experiencia Fluida</h3>
          <p>Navegación instantánea entre escuderías mediante arquitectura SPA, permitiendo comparar datos sin tiempos de espera.</p>
        </article>
        
        <article class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Datos de Ingeniería</h3>
          <p>Fichas técnicas dinámicas cargadas en tiempo real para visualizar la potencia y aerodinámica de cada prototipo.</p>
        </article>
        
        <article class="feature-card">
          <div class="feature-icon">🔍</div>
          <h3>Análisis Comparativo</h3>
          <p>Utiliza algoritmos de ordenamiento para clasificar las motos por velocidad punta o año de evolución técnica.</p>
        </article>
      </div>
    </section>
  `;
}

function crearFooter() {
  return `
    <footer class="footer">
      <div class="footer-content">
        <span>Proyecto MotoGP Catalog</span>
        <span>Erickson Sojo, Jose Perea, Ashley Ruiz, Andres Soto</span>
      </div>
    </footer>
  `;
}

function pintarCards(contenedor, motos) {
  if (motos.length === 0) {
    contenedor.innerHTML = `<div class="empty-message">No se encontraron motos con esa busqueda.</div>`;
    return;
  }

  contenedor.innerHTML = motos.map((moto) => crearCardMoto(moto)).join("");
}

function crearCardMoto(moto) {
  return `
    <article class="moto-card">
      <div class="moto-image-box">
        <img
          class="moto-image"
          src="${moto.imagen}"
          alt="${moto.nombre} - ${moto.equipo}"
          onerror="this.classList.add('is-hidden'); this.nextElementSibling.classList.add('show');"
        >
        <div class="image-fallback">Agrega la imagen local:<br>${moto.imagen}</div>
      </div>

      <div class="moto-content">
        <div class="moto-top">
          <h3>${moto.nombre}</h3>
          <span class="year-badge">${moto.anio}</span>
        </div>
        <p class="moto-info"><strong>Equipo:</strong> ${moto.equipo}</p>
        <p class="moto-info"><strong>Marca:</strong> ${moto.marca}</p>
        <p class="moto-info speed">${moto.velocidadMaxima} km/h</p>
      </div>
    </article>
  `;
}
