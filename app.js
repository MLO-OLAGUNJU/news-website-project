const API_KEY = "f60a9aa5b8464d848a8a19da1998538e";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => {
  fetchNews("Nigeria");
});

async function fetchNews(query) {
  const res = await fetch(`${url} ${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  bindData(data.articles);
}

const bindData = (articles) => {
  const cardsContainer = document.getElementById("cards-container");
  const newsCardTemplate = document.getElementById("template-news-card");

  cardsContainer.innerHTML = "";

  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    cardsContainer.appendChild(cardClone);
  });
};
