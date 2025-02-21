let input =document.querySelector('input');
input.innerHTML = "Hola  "
// Array para almacenar los nombres ingresados
let listaAmigos = [];

console.log(listaAmigos)

//Implementa una función para agregar amigos
function agregarAmigo()
{
    //Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector
    let nombreIngresado = document.getElementById("amigo").value;
    //Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
    if (nombreIngresado == '')
    {
        alert("Por favor, inserte un nombre.");
    }
    console.log(nombreIngresado);
    //Actualizar el array de amigos: Añadir el valor al arreglo usando el método.push().
    listaAmigos.push(nombreIngresado);
    //Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
    document.getElementById('amigo').value = '';
}

/* NOTAS: 
Mostrar un nombre sorteado:
console.log(nombreDeLaLista(index))

Saber el tamanio de la lista:
nombreDeLaLista.length*/