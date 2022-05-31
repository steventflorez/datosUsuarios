import {
    data
} from "./data.js";


const container = document.querySelector("#container");

const table = document.createElement("table");
const tr = document.createElement("tr");
const thNombre = document.createElement("th");
const thApellido = document.createElement("th");
const thEdad = document.createElement("th");
const thEmail = document.createElement("th");
const thTelefono = document.createElement("th");

thNombre.textContent = "Nombre";
thApellido.textContent = "Apellido";
thEdad.textContent = "Edad";
thEmail.textContent = "Email";
thTelefono.textContent = "Telefono";


table.append(tr);

tr.appendChild(thNombre);
tr.appendChild(thApellido);
tr.appendChild(thEdad);
tr.appendChild(thEmail);
tr.appendChild(thTelefono);

container.appendChild(table)


data.map(function (dato) {
    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    const tdApellido = document.createElement("td");
    const tdEdad = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdTelefono = document.createElement("td");

    tdNombre.textContent = dato.nombre;
    tdApellido.textContent = dato.apellidos;
    tdEdad.textContent = dato.edad;
    tdEmail.textContent = dato.email;
    tdTelefono.textContent = dato.telefono;

    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdEdad);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelefono);

    table.appendChild(tr);


})

