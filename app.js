// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    const input = document.getElementById("amigo"); // Capturar el input
    const nombre = input.value.trim(); // Obtener y limpiar espacios
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Validación de campo vacío
        return;
    }
    
    listaAmigos.push(nombre); // Agregar el nombre al array
    actualizarLista(); // Actualizar la lista en la interfaz
    input.value = ""; // Limpiar el campo de entrada
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar
    
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
