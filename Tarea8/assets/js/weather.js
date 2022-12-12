onload = function pos(){

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    
    function success(pos) {
        const crd = pos.coords;
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        cargar(pos);
    }
      
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    var posicion = navigator.geolocation.getCurrentPosition(success, error, options);
    
}

function cargar(pos){
const API_URL = "https://api.openweathermap.org/data/2.5/weather?lat="+pos.coords.latitude+"&lon="+pos.coords.longitude+"&appid=94c3cb67891a98a6dc0a29a6362c1f50"
const xhr = new XMLHttpRequest();
function onRequestHandler(){
   if(this.readyState === 4 && this.status === 200){
        // El readyState devuelve:
        // 0 = UNSET, no se ha llamado al metodo open
        // 1 = OPENED, no se ha llamado al metodo open
        // 2 = HEADERS_RECEIVED, se está llamando al metodo send()
        // 3 = LOADING, está cargando, es decir, esta recibiendo la respuesta
        // 4 = DONE, se ha completado la operacion
       let datos = JSON.parse(this.response);
       console.log(datos);
       mostrar(datos);
   }
}
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}`);
xhr.send();
}


//funcion para mostrar los datos
function mostrar(datos){
        document.getElementById("lug").innerHTML =
        datos.name;
        document.getElementById("tem").innerHTML =
        datos.main.temp-273.15;
        document.getElementById("hum").innerHTML =
        datos.main.humidity;
        document.getElementById("vie").innerHTML =
        datos.wind.speed;

        var iconcode = datos.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $('#tiempoIcon').attr('src', iconurl);
}