// Array para almacenar los nombres ingresados
let listaAmigos = [];

//Implementa una función para agregar amigos
function agregarAmigo()
{
    //Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector
    let nombreAmigo = document.getElementById("amigo").value;
    //Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
    if (nombreAmigo == '')
    {
        alert("Por favor, inserte un nombre.");
    }
    console.log(nombreAmigo);

    //Actualizar el array de amigos: Añadir el valor al arreglo usando el método.push().
    listaAmigos.push(nombreAmigo);
    //Limpiar el campo de entrada después de añadir el nombre
    document.getElementById('amigo').value = '';
    console.log(listaAmigos);
}



/*Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> 
dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() 
para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que 
no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y 
crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.*/

/*// Supongamos que este es tu arreglo de amigos
let listaAmigos = ['Carlos', 'Ana', 'Luis', 'Pedro', 'Marta'];

// Función para agregar amigos como elementos <li> a una lista HTML
function mostrarAmigos() {
  // Obtener el elemento de la lista en el HTML
  const lista = document.getElementById('friendList');
  
  // Limpiar la lista existente antes de agregar los nuevos elementos
  lista.innerHTML = "";

  // Recorrer el arreglo de amigos
  for (let i = 0; i < amigos.length; i++) {
    // Crear un nuevo elemento <li> para cada amigo
    const li = document.createElement('li');
    
    // Asignar el texto del amigo al elemento <li>
    li.textContent = amigos[i];

    // Agregar el elemento <li> a la lista
    lista.appendChild(li);
  }
}

















/* NOTAS: 
Mostrar un nombre sorteado:
console.log(nombreDeLaLista(index))

Saber el tamanio de la lista:
nombreDeLaLista.length*/