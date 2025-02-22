// Array para almacenar los nombres ingresados
let listaAmigos = [];

//PRIMERA FUNCION. Implementa una función para agregar amigos
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

/* SEGUNDA FUNCION. Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> 
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

/* TERCERA FUNCION. Escribe una función que seleccione de manera aleatoria uno de los nombres 
almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.*/

    function sortearAmigo()
    {

//Tareas específicas:
//Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

    if (listaAmigos.length === 0)
    {
        alert("Por favor, ingresa los nombres de tus amigos.");
        return;
    }

// Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar 
// un índice aleatorio del arreglo.

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

// Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre 
// correspondiente en el arreglo.

    let amigoSecreto = listaAmigos[indiceAleatorio];

// Mostrar el resultado: Actualizar el contenido del elemento de resultado 
// utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.

    document.getElementById("resultado").innerHTML = (`🎉 Tu amigo secreto es <strong>${amigoSecreto}</strong>!`);
    }






/* Como funcionan las funciones Math.random() y Math.floor()?
Cuando los combinamos en la función sortearAmigo(), estamos generando un índice aleatorio válido para el array amigos.

let indiceAleatorio = Math.floor(Math.random() * amigos.length);

Math.random() genera un número decimal entre 0 y 1.
Ejemplo: 0.7345
Multiplicamos por amigos.length (el tamaño del array).
Si hay 5 amigos, 0.7345 * 5 = 3.6725
Math.floor() redondea hacia abajo para obtener un índice válido.
Math.floor(3.6725) = 3
Se usa este índice para obtener un nombre del array:

let amigoSorteado = amigos[indiceAleatorio];*/
