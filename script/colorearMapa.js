let tonosTurquesa = [   '#020e10',
                        '#052b31',
                        '#084852',
                        '#0b6473',
                        '#0e8194',
                        '#119eb4',
                        '#1cb6cf',
                        '#64cedf',
                        '#87dbe6',
                        '#abe7ee',
                        '#cff3f6',
                        '#f3fffe'];

let tonosNaranja = ['#3d2700',
                    '#593a00',
                    '#754c00',
                    '#915f00',
                    '#ad7100',
                    '#c98400',
                    '#db9615',
                    '#e2a940',
                    '#e9bb6a',
                    '#f0ce94',
                    '#f8e0bf',
                    '#fff3e9'];

let tonosMajenta = [];

/*let datosDePrueba = {   provincias: [   'JUJUY',
                                        'BUENOS AIRES',
                                        'T. DEL FUEGO',
                                        'SANTA CRUZ',
                                        'SALTA',
                                        'SAN LUIS',
                                        'CATAMARCA',
                                        'LA RIOJA',
                                        'CHUBUT',
                                        'TUCUMAN',
                                        'SANTA FE',
                                        'RIO NEGRO',
                                        'CORDOBA',
                                        'CABA',
                                        'ENTRE RIOS',
                                        'LA PAMPA',
                                        'CORRIENTES',
                                        'S.DEL ESTERO',
                                        'MENDOZA',
                                        'NEUQUEN',
                                        'FORMOSA',
                                        'CHACO',
                                        'MISIONES',
                                        'SAN JUAN'],
                        vim: [  -1.34, 
                                -0.89,
                                -0.63,
                                -0.63, 
                                0.16, 
                                1.59, 
                                2.71, 
                                2.98, 
                                3.72, 
                                4.02, 
                                5.82, 
                                6.03, 
                                6.65,
                                7.74,
                                8.22,
                                8.61,
                                12.06,
                                12.50,
                                13.38,
                                14.05,
                                14.13,
                                14.63,
                                19.94,
                                23.27]    
                    };
                        

*/

// Function to copy computed styles to SVG elements
function copyStylesInline(destinationNode, sourceNode) {
    const containerElements = ["svg", "g"];
    for (let cd = 0; cd < destinationNode.childNodes.length; cd++) {
        const child = destinationNode.childNodes[cd];
        const sourceChild = sourceNode.childNodes[cd];
        
        if (child.nodeType !== 1 || sourceChild.nodeType !== 1) {
            continue;
        }
        
        if (containerElements.indexOf(child.tagName) !== -1) {
            copyStylesInline(child, sourceChild);
            continue;
        }
        
        const computedStyle = getComputedStyle(sourceChild);
        if (computedStyle == null) continue;
        
        for (let st = 0; st < computedStyle.length; st++) {
            child.style.setProperty(
                computedStyle[st],
                computedStyle.getPropertyValue(computedStyle[st])
            );
        }
    }
}

function convertSvgToPng() {

// Get the SVG element
const svgElement = document.getElementById('mapaDeArgentina');

// Clone the SVG element to avoid modifying the original
const clonedSvgElement = svgElement.cloneNode(true);
copyStylesInline(clonedSvgElement, svgElement);

const svgData = new XMLSerializer().serializeToString(clonedSvgElement);

// Create a canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Create an image element
const img = new Image();
img.onload = function() {
    // Draw the image onto the canvas
    ctx.drawImage(img, 0, 0);

    // Get the PNG data from the canvas
    const pngData = canvas.toDataURL('image/png');

    // Set the PNG image source to the generated PNG data
    const pngImage = document.getElementById('pngImage');
    pngImage.src = pngData;

    // Display the PNG image
    pngImage.style.display = 'block';
};

// Set the SVG data as the source of the image element
img.src = 'data:image/svg+xml;base64,' + btoa(svgData);

}




function redondearDecimales(numero, decimales) {
    numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');   // Expresion regular para numeros con un cierto numero de decimales o mas
    if (numeroRegexp.test(numero)) {         // Ya que el numero tiene el numero de decimales requeridos o mas, se realiza el redondeo
        return Number(numero.toFixed(decimales));
    } else {
        return Number(numero.toFixed(decimales)) === 0 ? 0 : numero;  // En valores muy bajos, se comprueba si el numero es 0 (con el redondeo deseado), si no lo es se devuelve el numero otra vez.
    }
}


function removerElementosDeArray(matriz) {

    let cantidadDeElementosDeMatriz = matriz.length;

    for (let i = 0; i < cantidadDeElementosDeMatriz; i++) {

        matriz[i].remove();

    }//fin bucle for

}//fin function removerElementosDeArray


function pintarMapa(provincia, tonosDeColor){

    switch(provincia)  {

        case 'BUENOS AIRES':

            document.getElementById('BuenosAires').style.fill = tonosDeColor;

        break;

        case 'CABA':

            document.getElementById('CapitalFederal').style.fill = tonosDeColor;

        break;

        case 'CAPITAL FEDERAL':

            document.getElementById('CapitalFederal').style.fill = tonosDeColor;

        break;

        case 'CATAMARCA':

            document.getElementById('Catamarca').style.fill = tonosDeColor;

        break;

        case 'CHACO':

            document.getElementById('Chaco').style.fill = tonosDeColor;

        break;

        case 'CHUBUT':

            document.getElementById('Chubut').style.fill = tonosDeColor;

        break;

        case 'CORDOBA':

            document.getElementById('Cordoba').style.fill = tonosDeColor;

        break;

        case 'CORRIENTES':

            document.getElementById('Corrientes').style.fill = tonosDeColor;

        break;

        case 'ENTRE RIOS':

            document.getElementById('EntreRios').style.fill = tonosDeColor;

        break;

        case 'FORMOSA':

            document.getElementById('Formosa').style.fill = tonosDeColor;

        break;

        case 'JUJUY':

            document.getElementById('Jujuy').style.fill = tonosDeColor;

        break;

        case 'LA PAMPA':

            document.getElementById('LaPampa').style.fill = tonosDeColor;

        break;

        case 'LA RIOJA':

            document.getElementById('LaRioja').style.fill = tonosDeColor;

        break;

        case 'MENDOZA':

            document.getElementById('Mendoza').style.fill = tonosDeColor;

        break;

        case 'MISIONES':

            document.getElementById('Misiones').style.fill = tonosDeColor;

        break;

        case 'NEUQUEN':

            document.getElementById('Neuquen').style.fill = tonosDeColor;

        break;

        case 'RIO NEGRO':

            document.getElementById('RioNegro').style.fill = tonosDeColor;

        break;

        case 'SANTIAGO DEL ESTERO':

            document.getElementById('SantiagoDelEstero').style.fill = tonosDeColor;

        break;

        case 'S.DEL ESTERO':

            document.getElementById('SantiagoDelEstero').style.fill = tonosDeColor;

        break;

        case 'SALTA':

            document.getElementById('Salta').style.fill = tonosDeColor;

        break;

        case 'SAN JUAN':

            document.getElementById('SanJuan').style.fill = tonosDeColor;

        break;

        case 'SAN LUIS':

            document.getElementById('SanLuis').style.fill = tonosDeColor;

        break;

        case 'SANTA CRUZ':

            document.getElementById('SantaCruz').style.fill = tonosDeColor;

        break;

        case 'SANTA FE':

            document.getElementById('SantaFe').style.fill = tonosDeColor;

        break;

        case 'TIERRA DEL FUEGO':

            document.getElementById('TierraDelFuego').style.fill = tonosDeColor;

        break;
        
        case 'T. DEL FUEGO':

            document.getElementById('TierraDelFuego').style.fill = tonosDeColor;

        break;

        case 'TUCUMAN':

            document.getElementById('Tucuman').style.fill = tonosDeColor;

        break;

    }//fin switch

}//fin function pintarMapa


function eliminarFilasDeTabla(idDeCuerpoDeTabla){

    //Obtenemos el cuerpo de tabla.
    let cuerpoDeTabla = document.getElementById(idDeCuerpoDeTabla);

    //Obtenemos todas las filas de la tabla.
    let filasDeCuerpoDeTabla = cuerpoDeTabla.querySelectorAll('tr');

    //Removemos todas las filas de tabla.
    removerElementosDeArray(filasDeCuerpoDeTabla);

}//fin function eliminarFilasDeTabla


function devolverArrayDeColores(colorElegido)   {

    let tonosDeColores = [];

    switch  (colorElegido) {

        case 'turquesa':

            tonosDeColores = tonosTurquesa;

        break;

        case 'naranja':

            tonosDeColores = tonosNaranja;

        break;

        case 'majenta':

            tonosDeColores = tonosMajenta;

        break;

    }//fin switch

    return tonosDeColores;

}//fin function devolverArrayDeColores


function devolverIntervalos(datosNumericos) {

    //Declaramos array para almacenar los intervalos.
    let intervalos = [];

    //Declaramos variable para almacenar antidad de datos.
    let cantidadDeDatos = 24;

    //Declaramos variable para almacenar numero de intervalos.
    let numeroDeIntervalos =   Math.round( 1 + (3.322 * Math.log( cantidadDeDatos ) ) );

    //Almacenamos el valor mas grande de los datos numericos.
    let valorMaximo = Math.max.apply(null, datosNumericos);

    //Almacenamos el valor mas chico de los datos numericos.
    let valorMinimo = Math.min.apply(null, datosNumericos);

    //Almacenamos el rango.
    let rango = (valorMaximo - valorMinimo);

    //Almacenamos la amplitud.
    let amplitud = (rango/numeroDeIntervalos);

    //Almacenamos el inicio del intervalo a.
    let inicioDeIntervalo_a = valorMinimo;

    //Almacenamos el inicio del intervalo b.
    let inicioDeIntervalo_b = (valorMinimo + amplitud);

    //Declaramos array para almacenar los valores del intervalo a.
    let intervalo_a = [];

    //Declaramos array para almacenar los valores del intervalo b.
    let intervalo_b = [];

    //Incertamos el valor inicial en el intervalo a.
    intervalo_a.push(inicioDeIntervalo_a);

    //Incertamos el valor inicial en el intervalo b.
    intervalo_b.push(inicioDeIntervalo_b);

    //Sumamos la amplitud a cada intervalo y l oalmacenamos en su respectivo array.
    for (let i = 1; i < numeroDeIntervalos; i++) {

        inicioDeIntervalo_a += amplitud;

        inicioDeIntervalo_b += amplitud;

        intervalo_a.push(inicioDeIntervalo_a);

        intervalo_b.push(inicioDeIntervalo_b);

    }//fin bucle for.
    
    //Almacenamos los array de intervalos a y b en el array principal.
    intervalos[0] = intervalo_a;

    intervalos[1] = intervalo_b;

    return intervalos;

}//fin function devolverIntervalos


function imprimirEscalaDeColores(cuerpoDeTablaDeEscalaDeColores, colorElegido, tonosDeColores, intervalos, cantidadDeDecimales) {

    for (let i = 0; i < 12; i++) {

        let fila = document.createElement('tr');

        let celdaDeIntervalos = document.createElement('td');

        let celdaTonoDeColor = document.createElement('td');

        fila.setAttribute('class', colorElegido + i);

        celdaDeIntervalos.textContent = '(' + intervalos[0][i].toFixed(cantidadDeDecimales) + ' / ' + intervalos[1][i].toFixed(cantidadDeDecimales) + ')';

        celdaTonoDeColor.textContent = tonosDeColores[i];

        fila.append(celdaDeIntervalos);

        fila.append(celdaTonoDeColor);

        cuerpoDeTablaDeEscalaDeColores.append(fila);

    }//fin bucle for

}//fin function imprimirEscalaDeColores


function imprimirColoresPorProvincias(intervalos, datosNumericos, colorElegido, provincias, cantidadDeDecimales, tonosDeColores)    {

    //Almacenamos la cantidad de provincias (23 provincias + Capital Federal).
    let cantidadDeProvincias = 24;

    //Almacenamos la cantidad de intervalos.
    let cantidadDeIntervalos = 12;

    //Utilizamos un bucle para recorrer las 23 provincias + capital federal.
    for (let i = 0; i < cantidadDeProvincias; i++) {
            
        //Recorremos la cantidad de intervalos.
        for (let j = 0; j < cantidadDeIntervalos; j++) {

            if(j < 11) {

                if(datosNumericos[i] >= intervalos[0][j] && datosNumericos[i] < intervalos[1][j])   {

                    let filaTablaProvincias =  document.createElement('tr');

                    let celdaProvincia = document.createElement('td');

                    let celdaValor = document.createElement('td');

                    let celdaColor = document.createElement('td');

                    filaTablaProvincias.setAttribute('class', colorElegido + j);

                    celdaProvincia.textContent = provincias[i];

                    celdaValor.textContent = datosNumericos[i].toFixed(cantidadDeDecimales);

                    celdaColor.textContent = tonosDeColores[j];

                    filaTablaProvincias.append(celdaProvincia);

                    filaTablaProvincias.append(celdaValor);

                    filaTablaProvincias.append(celdaColor);

                    cuerpoDeTablaDeColoresPorProvincia.append(filaTablaProvincias);

                    pintarMapa(provincias[i], tonosDeColores[j]);
                    
                }// fin if(datosNumericos[i] >= intervalos[0][j] && datosNumericos[i] < intervalos[1][j])

            } else if (j === 11)   { //fin if(j < 11) {

                if(datosNumericos[i] >= intervalos[0][j])   {

                    let filaTablaProvincias =  document.createElement('tr');

                    let celdaProvincia = document.createElement('td');

                    let celdaValor = document.createElement('td');

                    let celdaColor = document.createElement('td');

                    filaTablaProvincias.setAttribute('class', colorElegido + j);

                    celdaProvincia.textContent = provincias[i];

                    celdaValor.textContent = datosNumericos[i].toFixed(cantidadDeDecimales);

                    celdaColor.textContent = tonosDeColores[j];

                    filaTablaProvincias.append(celdaProvincia);

                    filaTablaProvincias.append(celdaValor);

                    filaTablaProvincias.append(celdaColor);

                    cuerpoDeTablaDeColoresPorProvincia.append(filaTablaProvincias);

                    pintarMapa(provincias[i], tonosDeColores[j]);

                }//fin if(datosNumericos[i] >= intervalos[0][j])

            }//fin  else if ( j === 11)

        }// fin bucle for j

    }// fin bucle for i

}//fin function imprimirColoresPorProvincias


function calcularIntervalos(provincias, datosNumericos)   {

    //Obtenemos el boton del formulario.
    let botonColorearMapa = document.getElementById('botonColorearMapa');

    //Declaramos array para almacenar los tonos de colores (Turquesa, Naranja, Majenta)
    let tonosDeColores = [];

    //Detectamos cuando se hace click sobre el boton del formulario.
    botonColorearMapa.addEventListener('click', () => {

        //Declaramos array para almacenar los intervalos a y b.
        let intervalos = [];

        //Obtenemos el color elegido.
        let colorElegido = document.getElementById('selectColores').value;

        //Obtenemos la cantidad de decimales elegido.
        let cantidadDeDecimales = document.getElementById('cantidadDeDecimales').value;

        //Eliminamos las filas de la tabla escala de colores.
        eliminarFilasDeTabla('cuerpoDeTablaDeEscalaDeColores');

        //Eliminamos las filas de la tabla colores por provincia.
        eliminarFilasDeTabla('cuerpoDeTablaDeColoresPorProvincia');

        //Almacenamos los tono de colores.
        tonosDeColores = devolverArrayDeColores(colorElegido);

        //Devolvemos los intervalos.
        intervalos = devolverIntervalos(datosNumericos);

        //Llamamos a la función para imprimir escala de colores.
        imprimirEscalaDeColores(cuerpoDeTablaDeEscalaDeColores, colorElegido, tonosDeColores, intervalos, cantidadDeDecimales);

        //Llamamos a la función para imprimir los colores por provincias y colorear el mapa.
        imprimirColoresPorProvincias(intervalos, datosNumericos, colorElegido, provincias, cantidadDeDecimales, tonosDeColores);

        //Llamamos a la función para imprimir mapa en formato PNG.
        convertSvgToPng();

    });

}//fin function calcularIntervalos


function volcarDatosDeExcelEnAmatriz () {

    //Obtenemos el area de arrastre.
    let areaDeArrastre = document.getElementById('drop-area');

    //Al detectar un archivo soltado, se ejecuta la función
    areaDeArrastre.addEventListener('dragover', function (e) {

        e.preventDefault();

    });//fin areaDeArrastre.addEventListener

    //Cuando se suelta un Ecxel en el area.
    areaDeArrastre.addEventListener('drop', function (e) {

        e.preventDefault();

        //Se obtienen las filas del ecxel.
        let files = e.dataTransfer.files;

        //Si hay almenos una fila.
        if (files.length > 0) {

            //Declaramos array para almacenar las provincias.
            let provincias = [];

            //Declaramos array para almacenar los datos numericos.
            let datosNumericos = [];

            //Obtenemos la primer fila.
            let file = files[0];

            //Almacenamos la información leída.
            let reader = new FileReader();

            //Cuando se termina de cargar, se ejecuta la función.
            reader.onload = function (e) {

                //Los Uint8Array representan un array de enteros sin signo de 8 bits.
                let data = new Uint8Array(e.target.result);

                let workbook = XLSX.read(data, { type: 'array' });

                let firstSheetName = workbook.SheetNames[0];

                let worksheet = workbook.Sheets[firstSheetName];

                let jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                let cantidadDeElementosDeMatriz = jsonData.length;

                //Recorremos los elementos de la matriz.
                for (let i = 0; i < cantidadDeElementosDeMatriz; i++) {

                    //Las provincias estan en la primer columna del ecxel.
                    provincias.push(jsonData[i][0]);

                    //Los datos numericos estan en la segunda columna del ecxel.
                    datosNumericos.push(jsonData[i][1]);

                }//fin bucle for

                //Llamamos a la función para calcular los intervalos, pasando el array provincias y el array datosNumericos.
                calcularIntervalos(provincias, datosNumericos);
            
            };

            reader.readAsArrayBuffer(file);

        }//fin if (files.length > 0)

    }); //finj areaDeArrastre.addEventListener

}//fin function volcarDatosDeExcelEnAmatriz


volcarDatosDeExcelEnAmatriz();

//calcularIntervalos(datosDePrueba.provincias, datosDePrueba.vim);