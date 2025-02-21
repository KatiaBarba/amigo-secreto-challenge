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

/*Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.