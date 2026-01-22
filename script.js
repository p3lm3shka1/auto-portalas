const carForm = document.getElementById("carForm");
carsDiv = document.getElementById("cars");

carForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const image = document.getElementById("image").value;
  const fuel = document.getElementById("fuel").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;

  const carCard = document.createElement("div");
  carCard.className = "car-card";

  carCard.innerHTML = `
  <img src=${image} alt="car">
  <h3>${name}</h3>
  <p>${description}</p>
  <p>Auto kaina: ${price}</p>
  <p>Auto kuras: ${fuel}</p>
  <p>Auto metai: ${year}</p>
  <button>Istrinti</button>
  `;

  const deleteBtn = carCard.querySelector("button");

  deleteBtn.addEventListener("click", function () {
    carCard.remove();
  });

  carsDiv.appendChild(carCard);

  carForm.reset();
});
