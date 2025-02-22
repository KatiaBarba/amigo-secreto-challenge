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
    // Actualizar la lista en pantalla
    actualizarLista();
}

/*Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> 
dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
Para crear un <li> dinámicamente en JavaScript, usamos document.createElement("li") 
y lo agregamos a una lista con appendChild().*/

    function actualizarLista() 
    {

    //Tareas específicas:

    //Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() 
    //para seleccionar la lista donde se mostrarán los amigos.

        let lista = document.getElementById("listaAmigos"); // Seleccionamos la lista en HTML

    //Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que 
    //no haya duplicados al actualizar.

        lista.innerHTML = "";

    //Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y 
    //crear elementos de lista (<li>) para cada título.

        // Recorrer el arreglo de amigos
        for (let i = 0; i < listaAmigos.length; i++) 
        {
        // Crear un nuevo elemento <li> para cada amigo
        const nuevoElemento = document.createElement('li');
        
        // Asignar el texto del amigo al elemento <li>
        nuevoElemento.textContent = listaAmigos[i]; // Se usa la variable i como index del array

        // Agregar el elemento <li> a la lista <ul>
        lista.appendChild(nuevoElemento);
        }
    }


















    /* NOTAS: 
    Mostrar un nombre sorteado:
    console.log(nombreDeLaLista(index))

    Saber el tamanio de la lista:
    nombreDeLaLista.length*/