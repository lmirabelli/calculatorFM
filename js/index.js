let puntajeInputs = () => {
    for(let data of inputs){
        data.value = 1
    };
}

puntajeInputs()

class tactica {
    constructor(puesto,acronimo,nombre){
        this.puesto = puesto,
        this.acronimo = acronimo,
        this.nombre = nombre
    }
}

// Reinicializacion de datos

let blanqueoData = () => {
    error.innerHTML = ''
    arqueroHTML.innerHTML = ''
    arqueros = []
    carrileroHTML.innerHTML = ''
    carrileros = []
    centralesHTML.innerHTML = ''
    centrales = []
    lateralesHTML.innerHTML = ''
    laterales = []
    mediocentrosHTML.innerHTML = ''
    mediocentros = []
    centrocampistasHTML.innerHTML = ''
    centrocampistas = []
    mediapuntasHTML.innerHTML = ''
    mediapuntas = []
    mediapuntaCentralHTML.innerHTML = ''
    mediapuntaCentral = []
    delanterosHTML.innerHTML = ''
    delanteros = []
}

// ---------------------------

let procesar = () => {
    
    let name;
    blanqueoData()

    // verificacion y formatizacion de los campos de puntaje
    for(let data of inputs){

        name = data.id;
        name == 'aereo' && (name = 'alcance aereo');
        name == 'controlGK' && (name = 'control (arquero)');
        name == 'punos' && (name = 'puños');
        name == 'mando' && (name = 'mando en el area');
        name == 'pasesGK' && (name = 'pases (arquero)');
        name == 'sManos' && (name = 'saque con la mano');
        name == 'sPuerta' && (name = 'saque de puerta');
        name == 'oneToOne' && (name = '1 vs 1');
        name == 'sEsquina' && (name = 'saques de esquina');
        name == 'sLargos' && (name = 'saque largos');
        name == 'tLejanos' && (name = 'tiro lejanos');
        name == 'tLibres' && (name = 'tiro libres');
        name == 'jEquipo' && (name = 'juego en equipo');
        name == 'rFisica' && (name = 'recuperacion fisica')
    
        if(idioma == 'esp'){
            data.value == '' && (data.value = 1, error.innerHTML += `<p>${name} tiene un valor invalido y es reemplazado por 1</p>`);
            data.value > 20 && (data.value = 20, error.innerHTML += `<p>${name} supera el maximo y es reemplazado por 20</p>`)
            data.value < 1 && (data.value = 1, error.innerHTML += `<p>${name} es menor al minimo y es reemplazado por 1</p>`)
        }else{
            data.value == '' && (data.value = 1, error.innerHTML += `<p>${name} has an invalid value and is replaced by 1</p>`);
            data.value > 20 && (data.value = 20, error.innerHTML += `<p>${name} exceeds the maximum and is replaced by 20</p>`)
            data.value < 1 && (data.value = 1, error.innerHTML += `<p>${name} is less than the minimum and is replaced by 1</p>`)
        }

        data.value < 4 ? data.className = 'muyMalo' : data.value < 8 ? data.className = 'malo' : data.value < 12 ? data.className = 'normal' : data.value < 15 ? data.className = 'bueno' : data.className = 'elite'
    }

    // ----------------------------------------------------

    // adquisicion de puntajes en variables

let aereo = parseInt(document.getElementById('aereo').value)
let blocaje = parseInt(document.getElementById('blocaje').value)
let comunicacion = parseInt(document.getElementById('comunicacion').value)
let controlArquero = parseInt(document.getElementById('controlGK').value)
let excentricidad = parseInt(document.getElementById('excentricidad').value)
let punos = parseInt(document.getElementById('punos').value)
let mando = parseInt(document.getElementById('mando').value)
let pasesArquero = parseInt(document.getElementById('pasesGK').value)
let reflejos = parseInt(document.getElementById('reflejos').value)
let salidas = parseInt(document.getElementById('salidas').value)
let saqueMano = parseInt(document.getElementById('sManos').value)
let saquePuerta = parseInt(document.getElementById('sPuerta').value)
let oneToOne = parseInt(document.getElementById('oneToOne').value)
let cabeceo = parseInt(document.getElementById('cabeceo').value)
let centros = parseInt(document.getElementById('centros').value)
let control = parseInt(document.getElementById('control').value)
let entradas = parseInt(document.getElementById('entradas').value)
let marcaje = parseInt(document.getElementById('marcaje').value)
let pases = parseInt(document.getElementById('pases').value)
let pk = parseInt(document.getElementById('penales').value)
let regate = parseInt(document.getElementById('regate').value)
let remate = parseInt(document.getElementById('remate').value)
let sEsquina = parseInt(document.getElementById('sEsquina').value)
let sLargos = parseInt(document.getElementById('sLargos').value)
let tecnica = parseInt(document.getElementById('tecnica').value)
let tLejano = parseInt(document.getElementById('tLejano').value)
let tLibres = parseInt(document.getElementById('tLibres').value)
let agresividad = parseInt(document.getElementById('agresividad').value)
let anticipacion = parseInt(document.getElementById('anticipacion').value)
let colocacion = parseInt(document.getElementById('colocacion').value)
let concentracion = parseInt(document.getElementById('concentracion').value)
let decisiones = parseInt(document.getElementById('decisiones').value)
let desmarques = parseInt(document.getElementById('desmarques').value)
let determinacion = parseInt(document.getElementById('determinacion').value)
let jEquipo = parseInt(document.getElementById('jEquipo').value)
let lider = parseInt(document.getElementById('liderazgo').value)
let sacrificio = parseInt(document.getElementById('sacrificio').value)
let serenidad = parseInt(document.getElementById('serenidad').value)
let talento = parseInt(document.getElementById('talento').value)
let valentia = parseInt(document.getElementById('valentia').value)
let vision = parseInt(document.getElementById('vision').value)
let aceleracion = parseInt(document.getElementById('aceleracion').value)
let agilidad = parseInt(document.getElementById('agilidad').value)
let salto = parseInt(document.getElementById('salto').value)
let equilibrio = parseInt(document.getElementById('equilibrio').value)
let fuerza = parseInt(document.getElementById('fuerza').value)
let rFisica = parseInt(document.getElementById('rFisica').value)
let resistencia = parseInt(document.getElementById('resistencia').value)
let velocidad = parseInt(document.getElementById('velocidad').value)

 // --------------------------------------------------------------------

promediandoPosiciones(aereo, blocaje,comunicacion,controlArquero,excentricidad,punos,mando,pasesArquero,reflejos,salidas,saqueMano,saquePuerta,oneToOne,cabeceo,centros,control,entradas,marcaje,pases,pk,regate,remate,sEsquina,sLargos,tecnica,tLejano,tLibres,agresividad,anticipacion,colocacion,concentracion,decisiones,desmarques,determinacion,jEquipo,lider,sacrificio,serenidad,talento,valentia,vision,aceleracion,agilidad,salto,equilibrio,fuerza,rFisica,resistencia,velocidad)



// (((((  )/)*primaria)+(((  )/)*secundaria))/2)*10


traduccionRoles()

// creando el objeto a imprimir


arqueros.push(new tactica(porteroDefensa.toFixed(2),gkdf,pordf))
arqueros.push(new tactica(porteroCierreDefensa.toFixed(2),gkcdf,porcierredf))
arqueros.push(new tactica(porteroCierreApoyo.toFixed(2),gkcap,porcierreap))
arqueros.push(new tactica(porteroCierreAtaque.toFixed(2),gkcat,porcierreat))

carrileros.push(new tactica(carrileroDefensa.toFixed(2),crdf,cardef))
carrileros.push(new tactica(carrileroApoyo.toFixed(2),crap,carap))
carrileros.push(new tactica(carrileroAtaque.toFixed(2),crat,carat))
carrileros.push(new tactica(carrileroCompletoApoyo.toFixed(2),crcap,cmpcarap))
carrileros.push(new tactica(carrileroCompletoAtaque.toFixed(2),crcat,cmpcarat))
carrileros.push(new tactica(carrileroInversoDefensa.toFixed(2),cridf,icardef))
carrileros.push(new tactica(carrileroInversoApoyo.toFixed(2),criap,icarap))
carrileros.push(new tactica(carrileroInversoAtaque.toFixed(2),criat,icarat))

centrales.push(new tactica(centralLateralDefensa.toFixed(2),ctltdf,dflatdf))
centrales.push(new tactica(centralLateralApoyo.toFixed(2),ctltap,dflatap))
centrales.push(new tactica(centralLateralAtaque.toFixed(2),ctltat,dflatat))
centrales.push(new tactica(centralPracticoDefensa.toFixed(2),ctpdf,dfprdf))
centrales.push(new tactica(centralPracticoTapon.toFixed(2),ctptp,dfprtp))
centrales.push(new tactica(centralPracticoCubrir.toFixed(2),ctpcb,dfprcu))
centrales.push(new tactica(centralDefensa.toFixed(2),ctdf,dfdf))
centrales.push(new tactica(centralTapon.toFixed(2),cttp,dftp))
centrales.push(new tactica(centralCubrir.toFixed(2),ctcu,dfcu))
centrales.push(new tactica(centralToqueDefensa.toFixed(2),ctTdf,dftoquedf))
centrales.push(new tactica(centralToqueTapon.toFixed(2),ctTtp,dftoquetp))
centrales.push(new tactica(centralToqueCubrir.toFixed(2),ctTcu,dftoquecu))
centrales.push(new tactica(liberoApoyo.toFixed(2),libap,libapoyo))
centrales.push(new tactica(liberoAtaque.toFixed(2),libat,libataque))

laterales.push(new tactica(lateralDefensa.toFixed(2),latdf,fbdf))
laterales.push(new tactica(lateralApoyo.toFixed(2),latdf,fbap))
laterales.push(new tactica(lateralAtaque.toFixed(2),latdf,fbat))
laterales.push(new tactica(lateralPracticoDefensa.toFixed(2),latdf,fbpdf))

mediocentros.push(new tactica(mediocentroDefensa.toFixed(2),mcdf,mdcentrodf))
mediocentros.push(new tactica(mediocentroApoyo.toFixed(2),mcap,mdcentroap))
mediocentros.push(new tactica(pivoteOrganizadorDefensa.toFixed(2),pvorgdf,pivotorgdf))
mediocentros.push(new tactica(pivoteOrganizadorApoyo.toFixed(2),pvorgap,pivotorgap))
mediocentros.push(new tactica(centroRecuperadorDefensa.toFixed(2),recdf,ctrrecdf))
mediocentros.push(new tactica(centroRecuperadorApoyo.toFixed(2),recap,ctrrecap))
mediocentros.push(new tactica(pivoteDefensivo.toFixed(2),pvodef,pivotdf))
mediocentros.push(new tactica(mediocierre.toFixed(2),mdcr,mcierre))
mediocentros.push(new tactica(regista.toFixed(2),rg,reg))
mediocentros.push(new tactica(organizadorIntinerante.toFixed(2),oit,orgint))
mediocentros.push(new tactica(segundoVolanteApoyo.toFixed(2),sgvolap,segvolanteap))
mediocentros.push(new tactica(segundoVolanteAtaque.toFixed(2),sgvolat,segvolanteat))

centrocampistas.push(new tactica(centrocampistaDefensa.toFixed(2),cmdf,mfdf))
centrocampistas.push(new tactica(centrocampistaApoyo.toFixed(2),cmap,mfap))
centrocampistas.push(new tactica(centrocampistaataque.toFixed(2),cmat,mfat))
centrocampistas.push(new tactica(pivoteOrganizadorDefensa.toFixed(2),pvodef,pivotorgdf))
centrocampistas.push(new tactica(pivoteOrganizadorApoyo.toFixed(2),pvorgap,pivotorgap))
centrocampistas.push(new tactica(todoterreno.toFixed(2),ttap,tdterreno))
centrocampistas.push(new tactica(organizadorAdelantadoApoyo.toFixed(2),oadap,orgadelap))
centrocampistas.push(new tactica(organizadorAdelantadoAtaque.toFixed(2),oadat,orgadelat))
centrocampistas.push(new tactica(centroRecuperadorDefensa.toFixed(2),recdf,ctrrecdf))
centrocampistas.push(new tactica(centroRecuperadorApoyo.toFixed(2),recap,ctrrecap))
centrocampistas.push(new tactica(organizadorIntinerante.toFixed(2),oit,orgint))
centrocampistas.push(new tactica(mezzalaApoyo.toFixed(2),mzap,mezap))
centrocampistas.push(new tactica(mezzalaAtaque.toFixed(2),mzat,mezat))
centrocampistas.push(new tactica(interiorMixto.toFixed(2),imx,intmx))
centrocampistas.push(new tactica(centrocampistaDeBandaDefensa.toFixed(2),cbdf,cbandadf))
centrocampistas.push(new tactica(centrocampistaDeBandaApoyo.toFixed(2),cbap,cbandaap))
centrocampistas.push(new tactica(centrocampistaDeBandaAtaque.toFixed(2),cbat,cbandaat))
centrocampistas.push(new tactica(extremoApoyo.toFixed(2),extap,wgap))
centrocampistas.push(new tactica(extremoAtaque.toFixed(2),extat,wgat))
centrocampistas.push(new tactica(extremoDefensivoDefensa.toFixed(2),exddf ,extdefdf))
centrocampistas.push(new tactica(extremoDefensivoApoyo.toFixed(2),exdap,extdefap))
centrocampistas.push(new tactica(extremoInversoApoyo.toFixed(2),exiap,wginap))
centrocampistas.push(new tactica(extremoInversoAtaque.toFixed(2),exiat ,wginat))
centrocampistas.push(new tactica(organizadorDeBandaApoyo.toFixed(2),oabap,orgbandaap))
centrocampistas.push(new tactica(organizadorDeBandaAtaque.toFixed(2),oabat ,orgbandaat))

mediapuntas.push(new tactica( extremoApoyo.toFixed(2),extap,wgap))
mediapuntas.push(new tactica( extremoAtaque.toFixed(2),extat,wgat))
mediapuntas.push(new tactica( organizadorAdelantadoApoyo.toFixed(2),oadap,orgadelap))
mediapuntas.push(new tactica( organizadorAdelantadoAtaque.toFixed(2),oadat,orgadelat))
mediapuntas.push(new tactica( delanteroInteriorApoyo.toFixed(2),delintap,interiorfwap))
mediapuntas.push(new tactica( delanteroInteriorAtaque.toFixed(2),delintat,interiorfwat))
mediapuntas.push(new tactica( trequarista.toFixed(2),treq,quartista))
mediapuntas.push(new tactica( delanteroObjEscoradoApoyo.toFixed(2),delobjescap,objetivoap))
mediapuntas.push(new tactica( delanteroObjEscoradoAtaque.toFixed(2),delobjescat,objetivoat))
mediapuntas.push(new tactica( buscadorEspacios.toFixed(2),busqesp,bespacios))
mediapuntas.push(new tactica( extremoInversoApoyo.toFixed(2),exiap,wginap))
mediapuntas.push(new tactica( extremoInversoAtaque.toFixed(2),exiat,wginat))

mediapuntaCentral.push(new tactica( mediapuntaApoyo.toFixed(2),mpap,mpuntaap))
mediapuntaCentral.push(new tactica( mediapuntaAtaque.toFixed(2),mpat,mpuntaat))
mediapuntaCentral.push(new tactica( organizadorAdelantadoApoyo.toFixed(2),oadap,orgadelap))
mediapuntaCentral.push(new tactica( organizadorAdelantadoAtaque.toFixed(2),oadat,orgadelat))
mediapuntaCentral.push(new tactica( trequarista.toFixed(2),treq,quartista))
mediapuntaCentral.push(new tactica( enganche.toFixed(2),eng,egche))
mediapuntaCentral.push(new tactica( delanteroSorpresa.toFixed(2),delsor,sorpresa))

delanteros.push(new tactica( segundoDelanteroApoyo.toFixed(2),segdelap ,segundodelap))
delanteros.push(new tactica( segundoDelanteroAtaque.toFixed(2),segdelat ,segundodelat))
delanteros.push(new tactica( delanteroAvanzado.toFixed(2),delav ,delavanz))
delanteros.push(new tactica( delanteroObjetivoApoyo.toFixed(2),delobjap ,delaobjetivoap))
delanteros.push(new tactica( delanteroObjetivoAtaque.toFixed(2),delobjat ,delobjetivoat))
delanteros.push(new tactica( ariete.toFixed(2),ari ,nuevedearea))
delanteros.push(new tactica( delanteroCompletoApoyo.toFixed(2),delcmpap ,delancmpap))
delanteros.push(new tactica( delanteroCompletoAtaque.toFixed(2),delcmpat ,delancmpat))
delanteros.push(new tactica( delanteroPresionanteDefensa.toFixed(2),delprdf ,delanprdf))
delanteros.push(new tactica( delanteroPresionanteApoyo.toFixed(2),delprap ,delanprap))
delanteros.push(new tactica( delanteroPresionanteAtaque.toFixed(2),delprat ,delanprat))
delanteros.push(new tactica( trequarista.toFixed(2),treq ,quartista))
delanteros.push(new tactica( falsoNueve.toFixed(2),f9 ,nueve))


// mediocentros.push(new tactica( .toFixed(2), ,' '))



 // imprimiendo en el DOM
 // Arqueros
for(posicion of arqueros){
    posicion.puesto < limiteMuyMalo ? posicion.acronimo = 'muyMalo' : posicion.puesto < limiteMalo ? posicion.acronimo = 'malo' : posicion.puesto < limiteNormal ? posicion.acronimo = 'normal': posicion.puesto < limiteBueno ? posicion.acronimo = 'bueno' : posicion.acronimo = 'elite'
    arqueroHTML.innerHTML += `<div class="pos"><p class="${posicion.acronimo}">${posicion.nombre}</p><p class="${posicion.acronimo}"> ${posicion.puesto}</p></div>`
}

//carrileros
for(posicion of carrileros){
    posicion.puesto < limiteMuyMalo ? posicion.acronimo = 'muyMalo' : posicion.puesto < limiteMalo ? posicion.acronimo = 'malo' : posicion.puesto < limiteNormal ? posicion.acronimo = 'normal': posicion.puesto < limiteBueno ? posicion.acronimo = 'bueno' : posicion.acronimo = 'elite'
    carrileroHTML.innerHTML += `<div class="pos"><p class="${posicion.acronimo}">${posicion.nombre}</p><p class="${posicion.acronimo}"> ${posicion.puesto}</p></div>`
}
//centrales
for(posicion of centrales){
    posicion.puesto < limiteMuyMalo ? posicion.acronimo = 'muyMalo' : posicion.puesto < limiteMalo ? posicion.acronimo = 'malo' : posicion.puesto < limiteNormal ? posicion.acronimo = 'normal': posicion.puesto < limiteBueno ? posicion.acronimo = 'bueno' : posicion.acronimo = 'elite'
    centralesHTML.innerHTML += `<div class="pos"><p class="${posicion.acronimo}">${posicion.nombre}</p><p class="${posicion.acronimo}"> ${posicion.puesto}</p></div>`
}
//laterales
for(posicion of laterales){
    posicion.puesto < limiteMuyMalo ? posicion.acronimo = 'muyMalo' : posicion.puesto < limiteMalo ? posicion.acronimo = 'malo' : posicion.puesto < limiteNormal ? posicion.acronimo = 'normal': posicion.puesto < limiteBueno ? posicion.acronimo = 'bueno' : posicion.acronimo = 'elite'
    lateralesHTML.innerHTML += `<div class="pos"><p class="${posicion.acronimo}">${posicion.nombre}</p><p class="${posicion.acronimo}"> ${posicion.puesto}</p></div>`
}

//mediocentros
for(posicion of mediocentros){
    posicion.puesto < limiteMuyMalo ? posicion.acronimo = 'muyMalo' : posicion.puesto < limiteMalo ? posicion.acronimo = 'malo' : posicion.puesto < limiteNormal ? posicion.acronimo = 'normal': posicion.puesto < limiteBueno ? posicion.acronimo = 'bueno' : posicion.acronimo = 'elite'
    mediocentrosHTML.innerHTML += `<div class="pos"><p class="${posicion.acronimo}">${posicion.nombre}</p><p class="${posicion.acronimo}"> ${posicion.puesto}</p></div>`
}

//centrocampistas
for(posicion of centrocampistas){
    posicion.puesto < limiteMuyMalo ? posicion.acronimo = 'muyMalo' : posicion.puesto < limiteMalo ? posicion.acronimo = 'malo' : posicion.puesto < limiteNormal ? posicion.acronimo = 'normal': posicion.puesto < limiteBueno ? posicion.acronimo = 'bueno' : posicion.acronimo = 'elite'
    centrocampistasHTML.innerHTML += `<div class="pos"><p class="${posicion.acronimo}">${posicion.nombre}</p><p class="${posicion.acronimo}"> ${posicion.puesto}</p></div>`
}

//mediapuntas
for(posicion of mediapuntas){
    posicion.puesto < limiteMuyMalo ? posicion.acronimo = 'muyMalo' : posicion.puesto < limiteMalo ? posicion.acronimo = 'malo' : posicion.puesto < limiteNormal ? posicion.acronimo = 'normal': posicion.puesto < limiteBueno ? posicion.acronimo = 'bueno' : posicion.acronimo = 'elite'
    mediapuntasHTML.innerHTML += `<div class="pos"><p class="${posicion.acronimo}">${posicion.nombre}</p><p class="${posicion.acronimo}"> ${posicion.puesto}</p></div>`
}

//mediapunta central
for(posicion of mediapuntaCentral){
    posicion.puesto < limiteMuyMalo ? posicion.acronimo = 'muyMalo' : posicion.puesto < limiteMalo ? posicion.acronimo = 'malo' : posicion.puesto < limiteNormal ? posicion.acronimo = 'normal': posicion.puesto < limiteBueno ? posicion.acronimo = 'bueno' : posicion.acronimo = 'elite'
    mediapuntaCentralHTML.innerHTML += `<div class="pos"><p class="${posicion.acronimo}">${posicion.nombre}</p><p class="${posicion.acronimo}"> ${posicion.puesto}</p></div>`
}

//delanteros
for(posicion of delanteros){
    posicion.puesto < limiteMuyMalo ? posicion.acronimo = 'muyMalo' : posicion.puesto < limiteMalo ? posicion.acronimo = 'malo' : posicion.puesto < limiteNormal ? posicion.acronimo = 'normal': posicion.puesto < limiteBueno ? posicion.acronimo = 'bueno' : posicion.acronimo = 'elite'
    delanterosHTML.innerHTML += `<div class="pos"><p class="${posicion.acronimo}">${posicion.nombre}</p><p class="${posicion.acronimo}"> ${posicion.puesto}</p></div>`
}
document.getElementById('pje').style.display="flex";

}



process && process.addEventListener('click',() => procesar())
