const imageElement = document.getElementById("main-image");
const openBtn = document.getElementById("btn-open");
const closeBtn = document.getElementById("btn-close");
const letterContainer = document.getElementById("modal-container")

openBtn.addEventListener("click", openLetter);
closeBtn.addEventListener("click", closeLetter);

function openLetter() {
  imageElement.src = "assets/2.svg";
  setTimeout(() => {
    imageElement.src = "assets/3.svg";
    showLetter()
  }, 2000);
}

function closeLetter() {
  imageElement.src = "assets/1.svg";
}

async function showLetter() {
  const response = await fetch("modal.html");
  const html = await response.text();
  letterContainer.innerHTML = html;

  const modal = document.getElementById("loveModal");
  const card = document.getElementById("modalCard");
  const closeBtn = document.getElementById("closeLoveModal");

  setTimeout(() => {
    modal.classList.remove("opacity-0", "pointer-events-none");
    card.classList.remove("opacity-0", "scale-90");
  }, 50);

  closeBtn.addEventListener("click", () => {
    modal.classList.add("opacity-0", "pointer-events-none");
    card.classList.add("opacity-0", "scale-90");

    setTimeout(() => {
      letterContainer.innerHTML = "";
    }, 500);
  });
}
