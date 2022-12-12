const API_URL = "https://restcountries.com/v3.1/all";
//este es el metodo usando fetch
function mostrarNacionalidades(){
    fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((paises) => {
        mostrar(paises);
    });
}

//funcion para mostrar los datos
function mostrar(datos){
    for(let i = 0; i < datos.length; i++){
        document.getElementById("nacionalidad").innerHTML +=
        `
        <option id="`+ datos[i].region +`" value="`+datos[i].cca3+`">`+datos[i].name.common+`</option>
        `
    }
    document.getElementById("nacionalidad").options.selectedIndex = 25;
    cargar();
}
