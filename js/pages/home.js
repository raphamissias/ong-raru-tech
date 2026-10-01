import { news } from "../../database/news.js";
import { showSuccessToast, showErrorToast } from "../toasts.js";

export const renderNews = async () => {
  const newsContainer = document.querySelector(".news-container");

  if (!newsContainer) return;

  newsContainer.innerHTML = "";

  news.map((item) => {
    newsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <article class="news-card">
          <div class="news-card-image">
            <img src="${item.img.src}" alt="${item.img.alt}" />
          </div>
          <div class="news-card-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <a href="#"> Leia mais → </a>
          </div>
        </article>
      `,
    );
  });
};

renderNews();

const waitForForm = () => {
  const form = document.querySelector("#userForm");

  if (form) {
    submitUserData();
    return;
  }

  const observer = new MutationObserver(() => {
    const form = document.querySelector("#userForm");

    if (form) {
      observer.disconnect();
      submitUserData();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

const submitUserData = () => {
  const form = document.querySelector("#userForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (isUserAlreadyRegistered()) {
      console.log("Usuário já registrado.");
      showErrorToast();
      return;
    }

    const user = {
      nome: document.querySelector("#nome").value,
      email: document.querySelector("#email").value,
      telefone: document.querySelector("#telefone").value,
    };

    localStorage.setItem(user.nome, JSON.stringify(user));

    console.log("Dados salvos:", user);
    showSuccessToast();
  });
};

waitForForm();

const isUserAlreadyRegistered = () => {
  const nome = document.querySelector("#nome").value;
  const user = JSON.parse(localStorage.getItem(nome));

  if (user) return true;
};
