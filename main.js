const resultado = document.querySelector("#resultado");
const tipo = document.querySelector("#tipo");
const ciudad = document.querySelector("#ciudad");
const buscar = document.querySelector(".buscar");

const datosBusqueda = {
  tipo: "",
  ciudad: "",
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarPropiedades(propiedades);
});

tipo.addEventListener("change", (e) => {
  datosBusqueda.tipo = e.target.value;

  filtrarPropiedad();
});

ciudad.addEventListener("change", (e) => {
  datosBusqueda.ciudad = e.target.value;
  filtrarPropiedad();
});

function mostrarPropiedades(propiedades) {
  limpiarHTML();
  propiedades.forEach((propiedad) => {
    const propiedadHTML = document.createElement("article");
    propiedadHTML.classList.add("card");
    propiedadHTML.innerHTML = `
                  <img src=${propiedad.img} alt=${propiedad.titulo} class="card-img-top"/>
                  <div class='card-body'>
                  <h5>${propiedad.titulo}</h5>
                  <p>${propiedad.descripcion}</p>
                  <p>${propiedad.ciudad}</p>
                  <a href="#" class="btn btn-dark">Ver propiedad</a>
                  </div>
                  `;

    resultado.appendChild(propiedadHTML);
  });
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function filtrarPropiedad() {
  const resultado = propiedades.filter(filtarTipo).filter(filtrarCiudad);

  if (resultado.length) {
    mostrarPropiedades(resultado);
  } else {
    noResultado();
  }
}

function noResultado() {
  limpiarHTML();
  const mensaje = document.createElement("p");
  mensaje.classList.add("mensaje-error");
  mensaje.textContent = "No hay resultados";
  resultado.appendChild(mensaje);
}

function filtarTipo(propiedad) {
  if (datosBusqueda.tipo) {
    return propiedad.tipo === datosBusqueda.tipo;
  }
  return propiedad;
}

function filtrarCiudad(propiedad) {
  if (datosBusqueda.ciudad) {
    return propiedad.ciudad === datosBusqueda.ciudad;
  }
  return propiedad;
}
