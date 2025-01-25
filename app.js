//Lista para almacenar nombres
let amigos = [];

//Funcion para agregar un nombre a la lista
function agregarAmigo () {
    let campoDeIngreso = document.getElementById('amigo');
    let amigo = campoDeIngreso.value;

    //Validar ingreso
    if (amigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    //Agregar nombre a la lista y limpiar campo
    amigos.push(amigo);
    campoDeIngreso.value='';

    //Actualizar lista
    actualizarLista();
}


//Funcion para actualizar la lista visible
function actualizarLista() {
    let listaElemento = document.querySelector('#listaAmigos');

        //Limpiar lista existente
        let listaHTML = '';
        let index = 0;
        while (index < amigos.length) {
                listaHTML += `<li>${amigos[index]}</li>`;
                index++;
        }

        //Actualizar contenido de la lista en un paso
        listaElemento.innerHTML = listaHTML;

}

//Funcion para seleccionar aleatoriamente un amigo
function sortearAmigo() {

    //Validar que la lista no esta vacia
    if (amigos.length === 0) {
        alert('La lista de amigos está vacía. Agregue nombres.');
        return;
        }

    //Generar un index aleatorio y mostrar el nombre seleccionado
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultadoElemento = document.getElementById('resultado');

    resultadoElemento.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}