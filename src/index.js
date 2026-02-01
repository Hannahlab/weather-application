function handleSearchSubmit(event) {
  event.preventDefault();

  const input = document.getElementById("search-form-input");
  const city = document.getElementById("city");

  city.textContent = input.value;
}

document
  .getElementById("search-form")
  .addEventListener("submit", handleSearchSubmit);
