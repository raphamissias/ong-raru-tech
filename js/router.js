import { renderNews } from "./pages/home.js";

const routes = {
  "/": "/pages/home.html",
  "/about": "/pages/about.html",
  "/projects": "/pages/projects.html",
  "/donates": "/pages/donates.html",
};

const app = document.querySelector("#app");

// Renderiza a página de acordo com a URL.
async function renderRoute() {
  const path = window.location.pathname;

  const page = routes[path];

  if (!page) {
    app.innerHTML = `
      <h1>404</h1>
      <p>Página não encontrada.</p>
    `;
    return;
  }

  const response = await fetch(page);
  const html = await response.text();

  app.innerHTML = html;

  if (path === "/") {
    renderNews();
  }
}

// Identifica se o alvo do click é um caminho de URL, envia para a URL e chama a renderização.
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-route]");

  if (!link) return;

  e.preventDefault();

  const path = link.getAttribute("href");

  history.pushState({}, "", path);

  renderRoute();
});

// Dispara ao Voltar ou Avançar no navegador
window.addEventListener("popstate", renderRoute);

renderRoute();
