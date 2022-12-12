function mostrarTodo(){
    var index = document.getElementById("tipoVehiculo").options.selectedIndex;
    if(index == 0){
        document.getElementById("imgVista").src = "images/Compacto1.png";
        document.getElementById("infTCar").innerHTML = "KIA PICANTO, Año 2016";
        document.getElementById("img1").src = "images/Compacto1.png";
        document.getElementById("img2").src = "images/Compacto2.png";
        document.getElementById("img3").src = "images/Compacto3.png";
    }else if(index == 1){
        document.getElementById("imgVista").src = "images/Mediano1.png";
        document.getElementById("infTCar").innerHTML = "HONDA CITY CAR, Año 2017";
        document.getElementById("img1").src = "images/Mediano1.png";
        document.getElementById("img2").src = "images/Mediano2.png";
        document.getElementById("img3").src = "images/Mediano3.png";
    }else if(index == 2){
        document.getElementById("imgVista").src = "images/TodoTerreno1.png";
        document.getElementById("infTCar").innerHTML = "TOYOTA FJ CRUISER, Año 2016";
        document.getElementById("img1").src = "images/TodoTerreno1.png";
        document.getElementById("img2").src = "images/TodoTerreno2.png";
        document.getElementById("img3").src = "images/TodoTerreno3.png";
    }else if(index == 3){
        document.getElementById("imgVista").src = "images/Familiar1.png";
        document.getElementById("infTCar").innerHTML = "TOYOTA SIENNA, Año 2018";
        document.getElementById("img1").src = "images/Familiar1.png";
        document.getElementById("img2").src = "images/Familiar2.png";
        document.getElementById("img3").src = "images/Familiar3.png";
    }
}

function mostrarImagen(num){
    var index = document.getElementById("tipoVehiculo").options.selectedIndex;
    if(index == 0){
        if(num == 1){
            document.getElementById("imgVista").src = "images/Compacto"+num+".png";
            document.getElementById("infTCar").innerHTML = "KIA PICANTO, Año 2016";
        }else if(num == 2){
            document.getElementById("imgVista").src = "images/Compacto"+num+".png";
            document.getElementById("infTCar").innerHTML = "FORD FIESTA ST, Año 2015";
        }else if(num == 3){
            document.getElementById("imgVista").src = "images/Compacto"+num+".png";
            document.getElementById("infTCar").innerHTML = "PEUGEOT 308, Año 2018";
        }
    }else if(index == 1){
        if(num == 1){
            document.getElementById("imgVista").src = "images/Mediano"+num+".png";
            document.getElementById("infTCar").innerHTML = "HONDA CITY CAR, Año 2017";
        }else if(num == 2){
            document.getElementById("imgVista").src = "images/Mediano"+num+".png";
            document.getElementById("infTCar").innerHTML = "MERCEDES SLS, Año 2015";
        }else if(num == 3){
            document.getElementById("imgVista").src = "images/Mediano"+num+".png";
            document.getElementById("infTCar").innerHTML = "FORD FIESTA ST, Año 2016";
        }
    }else if(index == 2){
        if(num == 1){
            document.getElementById("imgVista").src = "images/TodoTerreno"+num+".png";
            document.getElementById("infTCar").innerHTML = "TOYOTA FJ CRUISER, Año 2016";
        }else if(num == 2){
            document.getElementById("imgVista").src = "images/TodoTerreno"+num+".png";
            document.getElementById("infTCar").innerHTML = "TOYOTA Prado, Año 2018";
        }else if(num == 3){
            document.getElementById("imgVista").src = "images/TodoTerreno"+num+".png";
            document.getElementById("infTCar").innerHTML = "NISSAN JUKE, Año 2017";
        }
    }else if(index == 3){
        if(num == 1){
            document.getElementById("imgVista").src = "images/Familiar"+num+".png";
            document.getElementById("infTCar").innerHTML = "TOYOTA SIENNA, Año 2018";
        }else if(num == 2){
            document.getElementById("imgVista").src = "images/Familiar"+num+".png";
            document.getElementById("infTCar").innerHTML = "DODGE GRAND CARAVANE, Año 2015";
        }else if(num == 3){
            document.getElementById("imgVista").src = "images/Familiar"+num+".png";
            document.getElementById("infTCar").innerHTML = "HYUNDAI ELANTRA, Año 2016";
        }
    }
}