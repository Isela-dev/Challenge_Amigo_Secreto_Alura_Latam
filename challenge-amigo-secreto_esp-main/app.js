// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creamos una lista vacía donde guardaremos los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtenemos el nombre que escribió el usuario en el campo de texto
    let amigo = document.getElementById("amigo").value;
    
    // Verificamos si el campo está vacío
    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return; // Si está vacío, salimos de la función y no agregamos nada
    }

    // Agregamos el nombre a la lista
    listaAmigos.push(amigo);

    // Limpiamos el campo de texto después de agregar el nombre
    document.getElementById("amigo").value = "";

    // Mostramos la lista actualizada de amigos en la página
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
    let listaHTML = "";
    
    // Recorremos la lista de amigos y la agregamos a una lista en HTML
    for (let i = 0; i < listaAmigos.length; i++) {
        listaHTML += `<li>${listaAmigos[i]}</li>`;
    }
    
    // Mostramos la lista en el elemento con id "listaAmigos"
    document.getElementById("listaAmigos").innerHTML = listaHTML;
}

// Función para realizar el sorteo y elegir un amigo secreto aleatorio
function sortearAmigo() {
    // Verificamos si hay amigos en la lista
    if (listaAmigos.length === 0) {
        alert("¡Primero debes agregar algunos amigos!");
        return; // Si no hay amigos, no hacemos el sorteo
    }

    // Elegimos un número aleatorio para seleccionar un amigo de la lista
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Mostramos el resultado del sorteo en la página
    let amigoSecreto = listaAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `¡El amigo secreto es: ${amigoSecreto}!`;
}
