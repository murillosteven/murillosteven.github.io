//siempre se ocupa el URL, se debe analizar lo que devuelve
const API_URL = "https://si0sgs.github.io/EstateAgency/datos/propiedades.json";

//este es el metodo usando XHR
//const xhr = new XMLHttpRequest();
//function onRequestHandler(){
//    if(this.readyState === 4 && this.status === 200){
        // El readyState devuelve:
        // 0 = UNSET, no se ha llamado al metodo open
        // 1 = OPENED, no se ha llamado al metodo open
        // 2 = HEADERS_RECEIVED, se está llamando al metodo send()
        // 3 = LOADING, está cargando, es decir, esta recibiendo la respuesta
        // 4 = DONE, se ha completado la operacion
//        let datos = JSON.parse(this.response);
//        console.log(datos);
//        console.log(datos.propiedades.length);
//        mostrar(datos);
//    }
//}
//xhr.addEventListener("load", onRequestHandler);
//xhr.open("GET", `${API_URL}`);
//xhr.send();

//este es el metodo usando fetch
fetch(`${API_URL}`)
.then((response) => response.json())
.then((propiedades) => {
    mostrar(propiedades);
});

//funcion para mostrar los datos
function mostrar(datos){
    for(let i = 0; i < datos.propiedades.length; i++){
        document.getElementById("datosPropiedades").innerHTML +=
        `
        <div class="col-md-4">
            <div class="card-box-a card-shadow">
                <div class="img-box-a">
                    <img src="`+datos.propiedades[i].imagen+`" alt="" class="img-a img-fluid">
                </div>
            <div class="card-overlay">
        <div class="card-overlay-a-content">
        <div class="card-header-a">
            <h2 class="card-title-a">
                <a href="#">`+datos.propiedades[i].clasificacion+`</a>
            </h2>
            <p class="link-a">`+datos.propiedades[i].descripcion+`</p>
        </div>
        <div class="card-body-a">
            <div class="price-box d-flex">
                <span class="price-a">`+datos.propiedades[i].tipo+` | $ `+datos.propiedades[i].precio+`</span>
            </div>
        </div>
        <div class="card-footer-a">
            <ul class="card-info d-flex justify-content-around">
            <li>
                <h4 class="card-info-title">Area</h4>
                <span>`+datos.propiedades[i].detalle.area+`m
                    <sup>2</sup>
                </span>
            </li>
            <li>
                <h4 class="card-info-title">Rooms</h4>
                <span>`+datos.propiedades[i].detalle.rooms+`</span>
            </li>
            <li>
                <h4 class="card-info-title">Floors</h4>
                <span>`+datos.propiedades[i].detalle.floors+`</span>
            </li>
            <li>
                <h4 class="card-info-title">Garages</h4>
                <span>`+datos.propiedades[i].detalle.garages+`</span>
            </li>
            </ul>
        </div>
        </div>
        </div>
        </div>
        </div>`
    }
}