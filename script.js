// CONFIGURACIÓN DE LA TIENDA
// Ecuador: escribe 593 + tu número sin el cero inicial.
const WHATSAPP_NUMBER = "593997420086";

// Estas son las 14 páginas reales del catálogo que enviaste.
const PRODUCTS = [
  {id:1,name:"Página de catálogo 01",category:"Camisetas",image:"assets/products/catalogo-01.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"},
  {id:2,name:"Página de catálogo 02",category:"Camisetas",image:"assets/products/catalogo-02.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"},
  {id:3,name:"Página de catálogo 03",category:"Camisetas",image:"assets/products/catalogo-03.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"},
  {id:4,name:"Página de catálogo 04",category:"Camisetas",image:"assets/products/catalogo-04.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"},
  {id:5,name:"Página de catálogo 05",category:"Camisetas",image:"assets/products/catalogo-05.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"},
  {id:6,name:"Página de catálogo 06",category:"Camisetas",image:"assets/products/catalogo-06.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"},
  {id:7,name:"Página de catálogo 07",category:"Camisetas",image:"assets/products/catalogo-07.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"},
  {id:8,name:"Página de catálogo 08",category:"Camisetas",image:"assets/products/catalogo-08.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"},
  {id:9,name:"Página de catálogo 09",category:"Camisetas",image:"assets/products/catalogo-09.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"},
  {id:10,name:"Página de catálogo 10",category:"Camisetas",image:"assets/products/catalogo-10.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"},
  {id:11,name:"Página de catálogo 11",category:"Camisetas",image:"assets/products/catalogo-11.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"},
  {id:12,name:"Página de catálogo 12",category:"Camisetas",image:"assets/products/catalogo-12.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"},
  {id:13,name:"Página de catálogo 13",category:"Camisetas",image:"assets/products/catalogo-13.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"},
  {id:14,name:"Página de catálogo 14",category:"Camisetas",image:"assets/products/catalogo-14.jpg",description:"Incluye varios diseños de camisetas. Revisa los modelos y precios que aparecen en la imagen.",sizes:"Consulta tallas y disponibilidad"}
];

const grid = document.querySelector("#product-grid");

function whatsappUrl(message) {
  const number = WHATSAPP_NUMBER.replace(/\\D/g, "");
  const text = encodeURIComponent(message);
  if (!number || number.includes("XXXXXXXXX")) return "https://wa.me/?text=" + text;
  return "https://wa.me/" + number + "?text=" + text;
}

function renderProducts(category = "Todos") {
  const list = category === "Todos" ? PRODUCTS : PRODUCTS.filter(p => p.category === category);
  grid.innerHTML = list.map(p => `
    <article class="product">
      <div class="product-visual product-photo catalog-page">
        <img src="${p.image}" alt="${p.name} de URBAN STREETWEAR" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.description}<br>${p.sizes}</p>
        <div class="product-bottom">
          <span class="price">Ver diseños</span>
          <button class="small-btn" data-order="${p.id}">Consultar ↗</button>
        </div>
      </div>
    </article>`).join("");
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-order]");
  if (!button) return;
  const product = PRODUCTS.find(p => p.id === Number(button.dataset.order));
  const message = `¡Hola, URBAN STREETWEAR! Quiero consultar los diseños de la ${product.name}, además de tallas, precios y disponibilidad.`;
  window.open(whatsappUrl(message), "_blank", "noopener");
});

const generalMessage = "¡Hola, URBAN STREETWEAR! Quiero consultar el catálogo de camisetas, las tallas, los precios y la disponibilidad.";
document.querySelector("#contact-button").href = whatsappUrl(generalMessage);
document.querySelector("#floating-whatsapp").href = whatsappUrl(generalMessage);
document.querySelector("#year").textContent = new Date().getFullYear();
renderProducts();
