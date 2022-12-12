function MensajeTipoSeguro(){
    if(document.getElementById("PBO").selected == true){
        alert("Cubre  la  Protección  Básica  Obligatoria  (PBO)  más  daños  a  propiedades  de terceros, incendio e inundaciones.\nCosto de alquiler diario: $ 9.50 por día.");
    
    }else if(document.getElementById("PED").selected == true){
        alert("Cubre  la  Protección  Extendida  de  Daños(PED)  más  gastos  médicos  para  los ocupantes del vehículo.\nCosto de alquiler diario: $ 11.25 por día")
    }else{
        alert("Cubre daños al vehículo rentado y daños a vehículos terceros involucrados en un accidente de tránsito. \nCosto de alquiler diario: $ 5.45 por día.");
    }
}

function calcular(){
    //calculo de dias
    var dias;
    calcDias();
    function calcDias() {
        var timeStart = new Date(document.getElementsByName("fechaRetiro")[0].value);
        var timeEnd = new Date(document.getElementsByName("fechadevolucion")[0].value);
        if (timeEnd > timeStart)
        {
            var diff = timeEnd.getTime() - timeStart.getTime();
            dias = Math.round(diff / (1000 * 60 * 60 * 24));
        }
        else if (timeEnd != null && timeEnd < timeStart) 
        {
            alert("La fecha final debe ser mayor a la fecha inicial");
        }
    }
    if(dias < 3 || dias > 365)
    {
        alert("Los dias de renta deben ser como minimo 3 y como maximo 365");
        dias = undefined;
    }
    if(dias == undefined){
        return;
    }
    document.getElementsByName("dias")[0].value = dias;

    //calculo monto diario
    //tarifa diaria seguro
    var tds;
    if(document.getElementById("PBO").selected == true){
        tds = 9.50;
    }else if(document.getElementById("PED").selected == true){
        tds = 11.25;
    }else{
        tds = 5.45;
    }

    //tarifa diaria vehiculo
    var tdv;
    if(document.getElementById("COM").selected == true){
        tdv = parseFloat(document.getElementById("COM").value);
    }else if(document.getElementById("MED").selected == true){
        tdv = parseFloat(document.getElementById("MED").value);
    }else if(document.getElementById("4WD").selected == true){
        tdv = parseFloat(document.getElementById("4WD").value);
    }else if(document.getElementById("FAM").selected == true){
        tdv = parseFloat(document.getElementById("FAM").value);
    }
    
    //tarifa diaria
    var td = tds + tdv;
    if(dias > 30 && dias < 120){
        td -= td*0.15;
    }else if(dias >= 120 && dias <= 365){
        td -= td*0.25;
    }
    document.getElementsByName("td")[0].value = parseFloat(td);

    //porcentaje de descuento por pais
    var desc = 0;
    var region = document.getElementById("nacionalidad").options.selectedIndex;
    region = document.getElementById("nacionalidad").options[region];
    if(region.id == "Americas" || region.id == "Europe"){
        desc = 0.10;
    }else if(region.id == "Africa"){
        desc = 0.05;
    }

    //total a pagar
    var TP = td*dias-((td*dias)*desc);
    document.getElementsByName("totalPagar")[0].value = TP;
}

function guardar(){
    localStorage.setItem('retiro', document.getElementsByName("fechaRetiro")[0].value);
    localStorage.setItem('devolucion', document.getElementsByName("fechadevolucion")[0].value);
    localStorage.setItem('nacionalidad', document.getElementById("nacionalidad").options.selectedIndex);
    localStorage.setItem('vehiculo', document.getElementById("tipoVehiculo").options.selectedIndex);
    localStorage.setItem('seguro', document.getElementById("seguro").options.selectedIndex);
}

function cargar(){
    document.getElementsByName("fechaRetiro")[0].value = localStorage.getItem('retiro');
    document.getElementsByName("fechadevolucion")[0].value = localStorage.getItem('devolucion');
    document.getElementById("nacionalidad").options.selectedIndex = localStorage.getItem('nacionalidad');
    document.getElementById('tipoVehiculo').options.selectedIndex = localStorage.getItem('vehiculo');
    document.getElementById('seguro').options.selectedIndex = localStorage.getItem('seguro');
}