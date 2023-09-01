// Función para filtrar las tarjetas
function filterCards() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();

  const categoryFilter = document
    .getElementById("categoryFilter")
    .value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const nombre = card
      .querySelector(".doctor-info h4")
      .textContent.toLowerCase();
    const categoria = card
      .querySelector(".doctor-info p")
      .textContent.toLowerCase();

    if (
      (nombre.includes(searchInput) || categoria.includes(searchInput)) &&
      (categoryFilter === "" || categoria.includes(categoryFilter))
    ) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });

  // Mostrar u ocultar el botón "Limpiar" según si los campos están vacíos o no
  const clearButton = document.getElementById("clearButton");
  if (searchInput || categoryFilter) {
    clearButton.style.display = "inline-block";
  } else {
    clearButton.style.display = "none";
  }
}

// Función para limpiar los filtros
function clearFilters() {
  document.getElementById("searchInput").value = "";
  document.getElementById("categoryFilter").value = "";
  document.getElementById("clearButton").style.display = "none";

  // Mostrar todas las tarjetas nuevamente
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.display = "flex";
  });
}

// Obtener una lista de todas las categorías, incluyendo las que tienen comas
const categorias = doctoresInfo.map((doctor) =>
  doctor.especialidad.toLowerCase()
);

// Crear un conjunto para almacenar categorías únicas después de dividirlas
const categoriasUnicas = new Set();

// Dividir las categorías que contienen comas y agregarlas al conjunto de categorías únicas
categorias.forEach((categoria) => {
  const categoriasSeparadas = categoria.split(",").map((cat) => cat.trim());
  categoriasSeparadas.forEach((cat) => categoriasUnicas.add(cat));
});

// Obtener el elemento del selector
const categoryFilter = document.getElementById("categoryFilter");

// Agregar opciones al selector
categoriasUnicas.forEach((categoria) => {
  const option = document.createElement("option");
  option.value = categoria.toLowerCase(); // Valor en minúsculas para facilitar la comparación

  // Convierte la primera letra de cada palabra en mayúscula
  const palabras = categoria.split(" ");
  const palabrasMayuscula = palabras.map((palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  });

  option.textContent = palabrasMayuscula.join(" "); // Vuelve a unir las palabras
  categoryFilter.appendChild(option);
});
