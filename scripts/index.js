
class Activity {
    constructor(id, title, description, imgUrl){ 
        this.id = id;
        this.title= title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor(){
        this.activities = [];
        this.id = 0;
    }

    // Retornar todas las actividades 
    getAllActivities(){
        return this.activities;
    };
    

    
    //metodo que me permite crear una nueva instancia de actividad y guardarla.
    createActivity(title, description, imgUrl){
        if(!title || !description || !imgUrl){
            alert('Debe llenar todos los campos. Por favor completelos.')
            return
        }
        this.id++;
        const nuevaActividad = new Activity(this.id, title, description, imgUrl)
        this.activities.push(nuevaActividad);
    }

    //metodo para eliminar actividad
    deleteActivity(id){
            //Correcion de metodo por uno mas corto y con la misma funcionalidad.
        this.activities = this.activities.filter(actividad => actividad.id != id);
        
    }
};

// Actividad 1
const repository = new Repository();

//Actividad 2

function nuevaFunction (Activity){ //Recibe por parámetro un objeto instancia de Activity.
    const{id, title, description, imgUrl} = Activity; //2 - Extraer sus propiedades en variables utilizando destructuring.
    
    const tituloTjt = document.createElement('h3');//3 - Crear los elementos HTML que formarán parte de la tarjeta.
    const descripcionTjt = document.createElement('p');
    const imgTjt = document.createElement('img');
    
    tituloTjt.textContent = title;// 4 - Asignar los valores a las propiedades correspondientes a cada uno de los elementos.
    descripcionTjt.textContent = description;
    imgTjt.src = imgUrl;

    const Tarjeta = document.createElement('div'); // 6 - Crear un elemento <div> que será la tarjeta donde incluiremos todos los demás elementos.

    Tarjeta.appendChild(tituloTjt);//7 - “Appendear” al nuevo <div> los elementos creados anteriormente .
    Tarjeta.appendChild(descripcionTjt);
    Tarjeta.appendChild(imgTjt);
    
    Tarjeta.classList.add('tarjeta')// 8 - Asignar al <div> la clase CSS que tengas implementada para darle estilos.

    Tarjeta.addEventListener('click',function(){
        repository.deleteActivity(id);
        ConvertirHtml();
    })

    return Tarjeta; // 9 - Retornar el <div> finalizado con todos los elementos correspondientes dentro.    
}

// Actividad  3

function ConvertirHtml(){
    const contenedorTjt = document.getElementById("actividades_contenedor"); // 1 - Seleccionar el contenedor donde queremos agregar las actividades.

    contenedorTjt.innerHTML = ''; // 2 - Vaciar el contenido actual del contenedor. Se puede hacer manipulando la propiedad innerHTML.

    const datos = repository.getAllActivities(); // 3 - Obtener el listado completo de actividades mediante el método correspondiente de una instancia de Repository.
    const datosHtml = datos.map(function(actividad) { // 4 - “Mapear” el listado de actividades para convertirlos todos en elementos HTML.
        return nuevaFunction(actividad);
    })

    datosHtml.forEach(tarjeta => { // 5 - “Appendear” todos los elementos HTML del nuevo array dentro del contenedor seleccionado. 
        contenedorTjt.appendChild(tarjeta);
    });
}


// Avtividad 4 HANDLER

function handler(){
    const title = document.getElementById("titulo-actividad"); // 1,2 - 
    const description = document.getElementById("descripcion-actividad");
    const img = document.getElementById("imagen-actividad");

    const titleValue = title.value;
    const descriptionValue = description.value;
    const imgValue = img.value;

    repository.createActivity(titleValue, descriptionValue, imgValue); // 4 - 

    title.value = "";
    description.value = "";
    img.value = "";

    ConvertirHtml(); // 5 - 
    
}

//Actividad 5

const agregar = document.getElementById('agregar-actividad');

agregar.addEventListener('click', handler);

