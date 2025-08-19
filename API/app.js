const tablaBody = document.querySelector("#tablaUsuarios tbody");
const boton = document.getElementById("btnUsuarios");
const estado = document.getElementById("estado");

async function cargarUsuarios() {
  try {
    // UI: loading
    boton.disabled = true;
    estado.textContent = "Cargando...";
    tablaBody.innerHTML = `<tr><td class="center" colspan="4">Cargando...</td></tr>`;

    // Llamada a la API
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await resp.json(); // Convertimos a JSON

    // Render
    tablaBody.innerHTML = ""; // limpiamos
    usuarios.forEach(user => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
      `;
      tablaBody.appendChild(tr);
    });

    estado.textContent = "Listo ✅";
  } catch (err) {
    console.error(err);
    estado.textContent = "Error al cargar usuarios";
    tablaBody.innerHTML = `<tr><td class="center" colspan="4">Ocurrió un error. Reintentá.</td></tr>`;
  } finally {
    boton.disabled = false;
  }
}

boton.addEventListener("click", cargarUsuarios);
