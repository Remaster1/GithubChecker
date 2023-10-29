const seacrhVal = document.getElementById("searchVal");
const searchBtn = document.getElementById("searchBtn");
const card = document.getElementById("card");
const load = document.getElementById("load");
const decor = document.getElementById("decor");
let data;
searchBtn.addEventListener("click", getCard);
async function getCard() {
  card.classList.add("d-none");
  load.classList.remove("d-none");
  decor.classList.add("d-none");
  const response = await fetch(
    `https://api.github.com/users/${searchVal.value}`
  );
  if (response.ok) {
    data = await response.json();
    genCard();
  } else {
    decor.classList.remove("d-none");
  }
  load.classList.add("d-none");
}

function genCard() {
  card.innerHTML = `<img src="${data.avatar_url}" />
    <h1>${data.login}</h1>
    <p>${data.bio}</p>
    <nav>
      <div class="blue">
        <i class="fas fa-map"></i>
        <span>${data.location}</span>
      </div>
      <div class="yellow">
        <i class="fas fa-heart"></i>
        <span>${data.followers}</span>
      </div>
      <div class="green">
        <i class="fas fa-star"></i>
        <span>${data.following}</span>
      </div>
      <div class="red">
        <i class="fas fa-book"></i>
        <span>${data.public_repos}</span>
      </div>
    </nav>
    <a href="${data.url}">Description <i class="far fa-external-link"></i></a>`;
  card.classList.remove("d-none");
}
