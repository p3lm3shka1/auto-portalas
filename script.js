const carForm = document.getElementById("carForm");
const carsDiv = document.getElementById("cars");
const carCountEl = document.getElementById("carCount");

let carCount = 0;

function updateCarCount() {
  carCountEl.textContent = carCount;
}

updateCarCount();

carForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value;
  const image = document.getElementById("image").value;
  const fuel = document.getElementById("fuel").value;
  const priceValue = document.getElementById("price").value;
  const price = Number(priceValue);
  const year = document.getElementById("year").value;

  // ❌ VALIDATION
  if (name.length < 3) {
    alert("Pavadinimas turi būti bent 3 simbolių.");
    return;
  }

  if (priceValue === "" || price <= 0 || isNaN(price)) {
    alert("Kaina turi būti didesnė nei 0.");
    return;
  }

  // ✅ CREATE CARD
  const carCard = document.createElement("div");
  carCard.classList.add("car-card");

  // 🔥 spalva pagal kurą
  carCard.classList.add(fuel);

  carCard.innerHTML = `
    <img src="${image}" alt="car">
    <h3>${name}</h3>
    <p>${description}</p>
    <p>Auto kaina: ${price}</p>
    <p>Auto kuras: ${fuel}</p>
    <p>Auto metai: ${year}</p>
    <button>Ištrinti</button>
  `;

  const deleteBtn = carCard.querySelector("button");

  deleteBtn.addEventListener("click", function () {
    carCard.remove();
    carCount--;
    updateCarCount();
  });

  carsDiv.appendChild(carCard);

  carCount++;
  updateCarCount();

  carForm.reset();
});
