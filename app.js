let input =document.querySelector('input');
input.innerHTML = "Hola  "
// Array para almacenar los nombres ingresados
let listaAmigos = [];

console.log(listaAmigos)

//Implementa una función para agregar amigos
//que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos
function agregarAmigo()
{
    //Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
    let nombreIngresado = document.getElementById("amigo").value;
    //Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if (nombreIngresado == '')
    {
        alert("Por favor, inserte un nombre.");
    }
    console.log(nombreIngresado);
    //Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
    listaAmigos.push(nombreIngresado);
    //Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
    //limpiarCaja();
    document.getElementById('amigo').value = '';

}

/*function limpiarCaja(){
  document.getElementById('amigo').value = '';
}
// mostrar un nombre sorteado
// console.log(nombreSorteado(index))
// saber el tamanio de la lista
//numerosSorteados.length*/