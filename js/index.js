let process = document.getElementById('process');
let error = document.getElementById('error')
let arqueroHTML = document.getElementById('arqueros');
let carrileroHTML = document.getElementById('carrileros')
let centralesHTML = document.getElementById('centrales')
let lateralesHTML = document.getElementById('laterales')
let mediocentrosHTML = document.getElementById('mediocentros')
let centrocampistasHTML = document.getElementById('centrocampistas')
let mediapuntasHTML = document.getElementById('mediapuntas');
let mediapuntaCentralHTML = document.getElementById('mediapuntaCentral');
let delanterosHTML = document.getElementById('delanteros');
let inputs = document.querySelectorAll('input')
let limiteMuyMalo = 45;
let limiteMalo = 63;
let limiteNormal = 68;
let limiteBueno = 75;
let primaria = 0.7;
let secundaria = 0.3;
let gkdf;
let gkcdf;
let gkcap;
let gkcat;
let crdf;
let crap;
let crat;
let crcap;
let crcat;
let cridf;
let criap;
let criat;
let ctltdf;
let ctltap;
let ctltat;
let ctpdf;
let ctpcb;
let ctptp;
let ctdf;
let cttp;
let ctcu;
let ctTdf;
let ctTtp;
let ctTcu;
let libap;
let libat;
let latdf;
let latap;
let latat;
let latPdf;
let mcdf;
let mcap;
let recdf;
let recap;
let pvorgdf;
let pvorgap;
let pvodef;
let mdcr;
let rg;
let oit;
let cmdf;
let cmap;
let cmat;
let ttdf;
let ttap;
let oadap;
let oadat;
let mzap;
let mzat;
let imx;
let sgvolap;
let sgvolat;
let cbdf;
let cbap;
let cbat;
let extap;
let extat;
let exddf;
let exdap;
let oabap;
let oabat;
let exiap;
let exiat;
let delintap;
let delintat;
let treq;
let delobjescap;
let delobjescat;
let busqesp;
let eng;
let delsor;
let mpap;
let mpat;
let segdelap;
let segdelat;
let delav;
let delobjap;
let delobjat;
let ari;
let delcmpap;
let delcmpat;
let delprdf;
let delprap;
let delprat;
let f9;
let arqueros = []
let carrileros = []
let centrales = []
let laterales = []
let mediocentros = []
let centrocampistas = []
let mediapuntas = []
let mediapuntaCentral = []
let delanteros = [];
console.log(window.innerWidth)
for(let data of inputs){
    data.value = 1
};

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
    
    
        data.value == '' && (data.value = 1, error.innerHTML += `<p>${name} tiene un valor invalido y es reemplazado por 1</p>`);
        data.value > 20 && (data.value = 20, error.innerHTML += `<p>${name} supera el maximo y es reemplazado por 20</p>`)
        data.value < 1 && (data.value = 1, error.innerHTML += `<p>${name} es menor al minimo y es reemplazado por 1</p>`)

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

 // Promediando Arqueros

porteroDefensa = (((((aereo + blocaje + comunicacion + mando + reflejos + saquePuerta + colocacion + concentracion + agilidad)/9)*primaria)+(((saqueMano + oneToOne + anticipacion + decisiones + salto + velocidad)/6)*secundaria))/2)*10;
porteroCierreDefensa = (((((mando + reflejos + saquePuerta + oneToOne + anticipacion + colocacion + concentracion + agilidad)/8)*primaria)+(((aereo + blocaje + comunicacion + controlArquero +pasesArquero + salidas +saqueMano +decisiones + serenidad + vision +aceleracion + resistencia + velocidad)/13)*secundaria))/2)*10
porteroCierreApoyo = (((((mando + reflejos + saquePuerta + oneToOne + anticipacion + colocacion + concentracion + agilidad)/8)*primaria)+(((aereo + blocaje + comunicacion + controlArquero +pasesArquero + salidas +saqueMano +decisiones + serenidad + vision +aceleracion + resistencia + velocidad)/13)*secundaria))/2)*10
porteroCierreAtaque = (((((mando + reflejos + saquePuerta + oneToOne + anticipacion + colocacion + concentracion + agilidad)/8)*primaria)+(((aereo + blocaje + excentricidad + comunicacion + controlArquero +pasesArquero + salidas +saqueMano +decisiones + serenidad + vision +aceleracion + resistencia + velocidad)/14)*secundaria))/2)*10

// Promediando Defensas

carrileroDefensa =(((((entradas + marcaje + anticipacion + colocacion + jEquipo + sacrificio + aceleracion + resistencia)/8)*primaria)+(((centros + control + pases + regate + tecnica + concentracion + decisiones + desmarques + agilidad + velocidad)/10)*secundaria))/2)*10
carrileroApoyo = (((((centros + entradas + marcaje + regate + desmarques + jEquipo + sacrificio + aceleracion +resistencia)/9)*primaria)+(((control + pases + tecnica + anticipacion + colocacion + concentracion + decisiones + agilidad + velocidad)/9)*secundaria))/2)*10
carrileroAtaque = (((((centros + entradas + regate + tecnica + desmarques + jEquipo + sacrificio + aceleracion + resistencia + velocidad)/10)*primaria)+(((control + marcaje + pases + anticipacion + colocacion + concentracion + decisiones + talento + agilidad)/9)*secundaria))/2)*10
carrileroCompletoApoyo = (((((centros + control + pases + regate + tecnica + decisiones + desmarques + jEquipo + sacrificio + aceleracion + resistencia + velocidad)/12)*primaria)+(((entradas + anticipacion + serenidad + talento + agilidad + equilibrio )/6)*secundaria))/2)*10
carrileroCompletoAtaque =  (((((centros + control + pases + regate + tecnica + decisiones + desmarques + jEquipo + sacrificio + talento + aceleracion + resistencia + velocidad)/13)*primaria)+(((entradas + anticipacion + serenidad + agilidad + equilibrio  )/5)*secundaria))/2)*10
carrileroInversoDefensa =  (((((entradas + marcaje + pases + anticipacion + colocacion + decisiones + jEquipo + sacrificio )/8)*primaria)+(((control + regate + tecnica + concentracion + desmarques + aceleracion + agilidad + resistencia + velocidad )/9)*secundaria))/2)*10
carrileroInversoApoyo =  ((((( entradas + marcaje + pases + decisiones +desmarques + jEquipo + sacrificio + resistencia )/8)*primaria)+(((control + regate + tecnica + anticipacion + colocacion + concentracion + serenidad + aceleracion + agilidad + velocidad )/10)*secundaria))/2)*10
carrileroInversoAtaque = ((((( entradas + marcaje + pases + regate + tecnica + decisiones + desmarques +jEquipo + sacrificio + aceleracion + resistencia )/11)*primaria)+(((control + tLejano + anticipacion + colocacion + concentracion + serenidad + talento + agilidad + velocidad  )/9)*secundaria))/2)*10
centralLateralDefensa = ((((( cabeceo + centros + entradas + marcaje + colocacion + salto + fuerza + resistencia )/8)*primaria)+(((regate + agresividad + anticipacion + concentracion + decisiones + sacrificio + serenidad + valentia + velocidad  )/9)*secundaria))/2)*10
centralLateralApoyo = (((((cabeceo + centros + entradas + marcaje + regate + colocacion + salto + fuerza + resistencia + velocidad )/10)*primaria)+(((agresividad + anticipacion + concentracion + decisiones + desmarques + sacrificio + serenidad + valentia  )/8)*secundaria))/2)*10
centralLateralAtaque = (((((cabeceo + centros + entradas + marcaje + regate + desmarques + salto +fuerza + resistencia + velocidad  )/10)*primaria)+(((agresividad + anticipacion + colocacion + concentracion + decisiones + sacrificio +serenidad + valentia  )/8)*secundaria))/2)*10
centralPracticoDefensa = (((((cabeceo + entradas + marcaje + colocacion + salto + fuerza  )/6)*primaria)+(((agresividad + anticipacion + concentracion + valentia + velocidad  )/5)*secundaria))/2)*10
centralPracticoTapon = ((((( cabeceo + entradas + agresividad + colocacion + valentia + salto + fuerza )/7)*primaria)+(((marcaje + anticipacion + concentracion +velocidad  )/4)*secundaria))/2)*10
centralPracticoCubrir = ((((( entradas + marcaje + anticipacion + colocacion + concentracion + velocidad  )/6)*primaria)+(((cabeceo + valentia + salto + fuerza  )/4)*secundaria))/2)*10
centralDefensa = ((((( cabeceo + entradas + marcaje + colocacion + salto + fuerza )/6)*primaria)+(((agresividad + anticipacion + concentracion + decisiones + serenidad + valentia + velocidad  )/7)*secundaria))/2)*10
centralTapon = ((((( cabeceo + entradas + agresividad + colocacion + decisiones + valentia + salto + fuerza )/8)*primaria)+(((marcaje + anticipacion + concentracion +serenidad  )/4)*secundaria))/2)*10
centralCubrir = ((((( entradas + marcaje + anticipacion + colocacion + concentracion + decisiones + velocidad )/7)*primaria)+(((cabeceo + serenidad + valentia + salto + fuerza )/5)*secundaria))/2)*10
centralToqueDefensa = (((((cabeceo + entradas + marcaje + pases + colocacion + serenidad + salto + fuerza)/8)*primaria)+(((control + tecnica + agresividad + anticipacion + concentracion + decisiones + valentia + vision + velocidad  )/9)*secundaria))/2)*10
centralToqueTapon = ((((( cabeceo + entradas + pases + agresividad + colocacion + decisiones + serenidad + valentia + salto + fuerza )/10)*primaria)+(((control + marcaje + tecnica + anticipacion + concentracion + vision + velocidad  )/7)*secundaria))/2)*10
centralToqueCubrir = (((((entradas + marcaje + pases + anticipacion + colocacion + concentracion + decisiones + serenidad + velocidad  )/9)*primaria)+(((cabeceo + control + tecnica + valentia + vision + salto + fuerza  )/7)*secundaria))/2)*10
liberoApoyo = (((((control + entradas + marcaje + pases + anticipacion + colocacion + concentracion + decisiones + jEquipo + serenidad + vision + velocidad  )/12)*primaria)+(((cabeceo + regate + tecnica + talento + valentia + agilidad + salto + equilibrio + fuerza + resistencia  )/10)*secundaria))/2)*10
liberoAtaque = (((((control + entradas + marcaje + pases + regate + anticipacion + colocacion + concentracion + decisiones + jEquipo + serenidad + talento + vision + velocidad  )/14)*primaria)+(((cabeceo + tecnica + tLejano + valentia + aceleracion + agilidad + salto + equilibrio + fuerza +resistencia  )/10)*secundaria))/2)*10
lateralDefensa = (((((entradas + marcaje + anticipacion + colocacion + concentracion  )/5)*primaria)+(((centros + pases + decisiones + jEquipo + serenidad + resistencia + velocidad  )/7)*secundaria))/2)*10
lateralApoyo = ((((( entradas + marcaje + anticipacion + colocacion + concentracion + jEquipo + sacrificio )/7)*primaria)+(((centros + pases + regate + tecnica + decisiones + serenidad + resistencia + velocidad  )/8)*secundaria))/2)*10
lateralAtaque = ((((( centros + entradas + anticipacion + colocacion + jEquipo + sacrificio + resistencia + velocidad )/8)*primaria)+(((control + marcaje + pases + regate + tecnica + concentracion + decisiones + desmarques + serenidad + aceleracion + agilidad  )/11)*secundaria))/2)*10
lateralPracticoDefensa = (((((entradas + marcaje + anticipacion + colocacion + fuerza  )/5)*primaria)+(((cabeceo + agresividad + concentracion + jEquipo + valentia + velocidad  )/6)*secundaria))/2)*10

// Promediando Medios

mediocentroDefensa = ((((( entradas + anticipacion + colocacion + concentracion + jEquipo )/5)*primaria)+(((marcaje + pases + agresividad + decisiones + sacrificio + serenidad + fuerza + resistencia + velocidad  )/9)*secundaria))/2)*10
mediocentroApoyo = ((((( entradas + anticipacion + colocacion + concentracion + jEquipo )/5)*primaria)+((( control + marcaje + pases + agresividad + decisiones + sacrificio +serenidad + fuerza + resistencia + velocidad )/10)*secundaria))/2)*10
pivoteOrganizadorDefensa = (((((control + pases + tecnica + decisiones + jEquipo + serenidad + vision  )/7)*primaria)+(((entradas + anticipacion + colocacion + equilibrio + velocidad  )/5)*secundaria))/2)*10
pivoteOrganizadorApoyo = ((((( control + pases + tecnica + decisiones + jEquipo + serenidad + vision )/7)*primaria)+(((anticipacion + colocacion + desmarques + equilibrio + velocidad  )/5)*secundaria))/2)*10
centroRecuperadorDefensa = (((((  entradas + agresividad + anticipacion + jEquipo + sacrificio + resistencia )/6)*primaria)+(((marcaje + colocacion + concentracion + valentia + agilidad + fuerza + velocidad  )/7)*secundaria))/2)*10
centroRecuperadorApoyo = ((((( entradas + agresividad + anticipacion + jEquipo + sacrificio + resistencia  )/6)*primaria)+(((marcaje + pases + concentracion + valentia + agilidad + fuerza + velocidad  )/7)*secundaria))/2)*10
pivoteDefensivo = ((((( entradas + marcaje + anticipacion + colocacion + concentracion + decisiones  )/6)*primaria)+((( jEquipo + serenidad + fuerza + velocidad )/4)*secundaria))/2)*10
mediocierre = (((((entradas + marcaje + anticipacion + colocacion + concentracion + decisiones + jEquipo + serenidad  )/8)*primaria)+(((control + pases + agresividad + sacrificio + valentia + salto + fuerza + resistencia + velocidad)/9)*secundaria))/2)*10
regista = (((((control + pases + tecnica + decisiones + desmarques + jEquipo + serenidad + talento +vision  )/9)*primaria)+(((regate + tLejano + anticipacion + equilibrio + velocidad )/5)*secundaria))/2)*10
organizadorIntinerante = ((((( control + pases + tecnica + anticipacion + decisiones + desmarques + jEquipo + sacrificio + serenidad +vision + aceleracion + resistencia  )/12)*primaria)+(((regate + tLejano + colocacion + concentracion + agilidad + equilibrio + velocidad  )/7)*secundaria))/2)*10
segundoVolanteApoyo = (((((entradas + marcaje + pases + colocacion + desmarques + sacrificio + resistencia + velocidad  )/8)*primaria)+((( control + remate + tLejano + anticipacion + concentracion + decisiones + serenidad + aceleracion + equilibrio + fuerza  )/10)*secundaria))/2)*10
segundoVolanteAtaque = (((((entradas + pases + remate + tLejano + anticipacion + colocacion + desmarques + sacrificio + resistencia + velocidad  )/10)*primaria)+(((control + marcaje + concentracion + decisiones + serenidad + aceleracion + equilibrio + fuerza  )/8)*secundaria))/2)*10
centrocampistaDefensa = ((((( entradas + colocacion + concentracion + decisiones + jEquipo )/5)*primaria)+(((control + marcaje + pases + tecnica + agresividad + anticipacion + sacrificio + serenidad + resistencia + velocidad)/10)*secundaria))/2)*10
centrocampistaApoyo = (((((control + entradas + pases + decisiones + jEquipo  )/5)*primaria)+(((tecnica + anticipacion + concentracion + desmarques + sacrificio + serenidad + vision + resistencia + velocidad  )/9)*secundaria))/2)*10
centrocampistaataque = (((((control + pases + decisiones + desmarques  )/4)*primaria)+((( entradas + tecnica + tLejano + anticipacion + jEquipo + sacrificio + serenidad +vision + aceleracion +resistencia +velocidad  )/11)*secundaria))/2)*10
todoterreno = (((((entradas + pases + desmarques + jEquipo + sacrificio + resistencia  )/6)*primaria)+(((control + regate + remate + tecnica + tLejano + agresividad + anticipacion + colocacion + decisiones + serenidad + aceleracion + equilibrio + fuerza + velocidad  )/14)*secundaria))/2)*10
organizadorAdelantadoApoyo = (((((control + pases + tecnica + decisiones + desmarques +jEquipo + serenidad + vision  )/8)*primaria)+(((regate + anticipacion + talento +agilidad + velocidad  )/5)*secundaria))/2)*10
organizadorAdelantadoAtaque = (((((control + pases + regate +tecnica + decisiones + desmarques + jEquipo + serenidad + vision  )/9)*primaria)+(((anticipacion + talento + aceleracion + agilidad + velocidad  )/5)*secundaria))/2)*10
mezzalaApoyo = ((((( pases + tecnica + decisiones + desmarques + sacrificio + aceleracion  )/6)*primaria)+(((control + entradas + regate + tLejano + anticipacion + serenidad + vision +equilibrio + resistencia + velocidad  )/10)*secundaria))/2)*10
mezzalaAtaque = (((((pases + regate + tecnica + decisiones + desmarques + sacrificio + vision +aceleracion )/8)*primaria)+(((control + remate + tLejano + anticipacion + serenidad + talento + equilibrio + resistencia +velocidad  )/9)*secundaria))/2)*10
interiorMixto = (((((control+ entradas + pases + colocacion + decisiones + jEquipo + resistencia )/7)*primaria)+((( tecnica + anticipacion +concentracion + desmarques + sacrificio + serenidad + vision +velocidad  )/8)*secundaria))/2)*10
centrocampistaDeBandaDefensa = ((((( entradas + pases + colocacion + concentracion + decisiones + jEquipo + sacrificio )/7)*primaria)+(((centros + control + marcaje + tecnica + anticipacion + serenidad + resistencia + velocidad  )/8)*secundaria))/2)*10
centrocampistaDeBandaApoyo = ((((( entradas + pases + decisiones + jEquipo + sacrificio + resistencia )/6)*primaria)+(((centros + control + tecnica + anticipacion + colocacion + concentracion +desmarques + serenidad + velocidad  )/9)*secundaria))/2)*10
centrocampistaDeBandaAtaque = ((((( centros + control + pases + decisiones + jEquipo + sacrificio + resistencia )/7)*primaria)+(((entradas + tecnica + anticipacion +desmarques + serenidad +vision + velocidad  )/7)*secundaria))/2)*10
extremoApoyo = ((((( centros + regate + tecnica + desmarques + aceleracion + velocidad )/6)*primaria)+(((control + pases + sacrificio + agilidad + resistencia  )/5)*secundaria))/2)*10
extremoAtaque = ((((( centros + regate + tecnica + desmarques + aceleracion + velocidad )/6)*primaria)+(((control + pases + sacrificio + agilidad + talento  )/5)*secundaria))/2)*10
extremoDefensivoDefensa = ((((( tecnica + anticipacion + colocacion + desmarques + jEquipo + sacrificio+ resistencia )/7)*primaria)+(((centros + control + entradas +marcaje +regate +agresividad + concentracion + decisiones +aceleracion + velocidad  )/10)*secundaria))/2)*10
extremoDefensivoApoyo = ((((( centros + tecnica + desmarques + jEquipo + sacrificio + resistencia )/6)*primaria)+(((control + entradas + marcaje + pases + regate + agresividad + anticipacion + colocacion + concentracion + decisiones + serenidad + aceleracion + velocidad  )/13)*secundaria))/2)*10
extremoInversoApoyo = ((((( pases + regate + tecnica + desmarques + aceleracion )/5)*primaria)+((( centros + control + tLejano + decisiones + sacrificio + serenidad + vision + agilidad + resistencia + velocidad )/10)*secundaria))/2)*10
extremoInversoAtaque = ((((( pases + regate + tecnica + desmarques + aceleracion + agilidad  )/6)*primaria)+((( centros + control + tLejano + anticipacion + decisiones + serenidad + talento + vision + velocidad )/9)*secundaria))/2)*10
organizadorDeBandaApoyo = ((((( control + pases + tecnica + decisiones + jEquipo + serenidad + vision )/7)*primaria)+(((regate + desmarques + agilidad + velocidad  )/4)*secundaria))/2)*10
organizadorDeBandaAtaque = ((((( control + pases + tecnica + regate + decisiones + desmarques + jEquipo + serenidad + vision )/9)*primaria)+(((anticipacion + talento + aceleracion + agilidad + velocidad  )/5)*secundaria))/2)*10

// Proediando ataque

delanteroInteriorApoyo = (((((control + pases + regate +tecnica + desmarques + aceleracion + agilidad + equilibrio  )/8)*primaria)+(((remate + tLejano + anticipacion + serenidad + talento + vision +velocidad  )/7)*secundaria))/2)*10
delanteroInteriorAtaque = ((((( control + regate + remate + tecnica + desmarques +aceleracion +agilidad +equilibrio  )/8)*primaria)+(((pases + tLejano + anticipacion + serenidad + talento + velocidad  )/6)*secundaria))/2)*10
trequarista = (((((control + pases +regate + tecnica + decisiones + desmarques + serenidad + talento + vision + aceleracion  )/10)*primaria)+(((remate + anticipacion + agilidad + equilibrio + velocidad  )/5)*secundaria))/2)*10
delanteroObjEscoradoApoyo = ((((( cabeceo + jEquipo + valentia + salto + fuerza  )/5)*primaria)+(((centros + control + anticipacion + desmarques + sacrificio + equilibrio + resistencia + velocidad  )/8)*secundaria))/2)*10
delanteroObjEscoradoAtaque = ((((( cabeceo + desmarques + valentia + salto + fuerza  )/5)*primaria)+(((centros + control + remate + anticipacion + jEquipo + sacrificio + equilibrio + resistencia + velocidad  )/9)*secundaria))/2)*10
buscadorEspacios = ((((( remate + anticipacion + concentracion + decisiones + desmarques + serenidad + equilibrio )/7)*primaria)+(((control + tecnica + sacrificio + aceleracion + resistencia + velocidad  )/6)*secundaria))/2)*10
enganche = (((((control + pases + tecnica + decisiones + serenidad + vision  )/6)*primaria)+(((regate + anticipacion + desmarques + jEquipo + talento + agilidad + velocidad  )/7)*secundaria))/2)*10
delanteroSorpresa = ((((( control + regate + remate + anticipacion + desmarques + serenidad + aceleracion  )/7)*primaria)+((( pases + tecnica + concentracion + decisiones + sacrificio + agilidad + equilibrio + resistencia + velocidad )/9)*secundaria))/2)*10
mediapuntaApoyo = ((((( control + pases + tecnica +tLejano + anticipacion + decisiones + desmarques + talento )/8)*primaria)+(((regate + serenidad + vision + agilidad + velocidad  )/5)*secundaria))/2)*10
mediapuntaAtaque = ((((( control + pases + regate + tecnica + tLejano + anticipacion + decisiones + desmarques + talento )/9)*primaria)+((( remate + serenidad + vision + agilidad + velocidad  )/5)*secundaria))/2)*10
segundoDelanteroApoyo = (((((control + pases + tecnica + decisiones + desmarques + jEquipo + serenidad  )/7)*primaria)+(((remate + anticipacion + talento + vision + equilibrio + fuerza + velocidad  )/7)*secundaria))/2)*10
segundoDelanteroAtaque = (((((control + pases + tecnica + decisiones + desmarques + jEquipo + serenidad   )/7)*primaria)+((( regate + remate + anticipacion + talento + vision + equilibrio + fuerza + velocidad )/8)*secundaria))/2)*10
delanteroAvanzado = ((((( control + regate + remate + tecnica + desmarques + serenidad + aceleracion )/7)*primaria)+((( pases + anticipacion + decisiones + sacrificio + agilidad + equilibrio + resistencia +velocidad )/8)*secundaria))/2)*10
delanteroObjetivoApoyo = ((((( cabeceo + jEquipo + valentia + salto + equilibrio + fuerza  )/6)*primaria)+((( control + remate + agresividad + anticipacion + decisiones + desmarques + serenidad + velocidad )/8)*secundaria))/2)*10
delanteroObjetivoAtaque = ((((( cabeceo + remate + desmarques + serenidad + valentia + salto + equilibrio + fuerza  )/8)*primaria)+(((control + agresividad + anticipacion + decisiones + jEquipo + velocidad  )/6)*secundaria))/2)*10
ariete = (((((remate + anticipacion + desmarques +serenidad  )/4)*primaria)+(((cabeceo + control + tecnica + decisiones + aceleracion + velocidad  )/6)*secundaria))/2)*10
delanteroCompletoApoyo = ((((( cabeceo + control + pases + regate + tecnica + tLejano + anticipacion + decisiones + desmarques + serenidad + vision + aceleracion + agilidad + fuerza )/14)*primaria)+(((remate + jEquipo + sacrificio +salto + equilibrio + resistencia + velocidad  )/7)*secundaria))/2)*10
delanteroCompletoAtaque = ((((( cabeceo + control + regate + remate + tecnica + anticipacion + desmarques + serenidad + aceleracion + agilidad + fuerza )/11)*primaria)+(((pases + tLejano + decisiones + jEquipo + sacrificio + vision + salto + equilibrio + resistencia + velocidad  )/10)*secundaria))/2)*10
delanteroPresionanteDefensa = ((((( agresividad + anticipacion + decisiones + jEquipo + sacrificio + valentia + aceleracion + resistencia + velocidad  )/9)*primaria)+(((control + concentracion + serenidad + agilidad + equilibrio + fuerza  )/6)*secundaria))/2)*10
delanteroPresionanteApoyo = (((((  agresividad + anticipacion + decisiones + jEquipo + sacrificio + valentia + aceleracion + resistencia + velocidad )/9)*primaria)+(((control + pases + concentracion + desmarques + serenidad + agilidad + equilibrio + fuerza  )/8)*secundaria))/2)*10
delanteroPresionanteAtaque = ((((( agresividad + anticipacion + decisiones + jEquipo + sacrificio + valentia + aceleracion + resistencia + velocidad )/9)*primaria)+(((control + remate + concentracion + decisiones + serenidad + agilidad + equilibrio + fuerza  )/8)*secundaria))/2)*10
falsoNueve = ((((( control + pases + regate + tecnica + decisiones + desmarques + serenidad + vision + aceleracion + agilidad )/10)*primaria)+(((remate + anticipacion + jEquipo + talento + equilibrio + velocidad  )/6)*secundaria))/2)*10




// (((((  )/)*primaria)+(((  )/)*secundaria))/2)*10




// creando el objeto a imprimir

arqueros.push(new tactica(porteroDefensa.toFixed(2),gkdf,'portero - defensa'))
arqueros.push(new tactica(porteroCierreDefensa.toFixed(2),gkcdf,'portero cierre - defensa'))
arqueros.push(new tactica(porteroCierreApoyo.toFixed(2),gkcap,'portero cierre - apoyo'))
arqueros.push(new tactica(porteroCierreAtaque.toFixed(2),gkcat,'portero cierre - ataque'))

carrileros.push(new tactica(carrileroDefensa.toFixed(2),crdf,'carrilero - defensa'))
carrileros.push(new tactica(carrileroApoyo.toFixed(2),crap,'carrilero - apoyo'))
carrileros.push(new tactica(carrileroAtaque.toFixed(2),crat,'carrilero - ataque'))
carrileros.push(new tactica(carrileroCompletoApoyo.toFixed(2),crcap,'carrilero completo - apoyo'))
carrileros.push(new tactica(carrileroCompletoAtaque.toFixed(2),crcat,'carrilero completo - ataque'))
carrileros.push(new tactica(carrileroInversoDefensa.toFixed(2),cridf,'carrilero inverso - defensa'))
carrileros.push(new tactica(carrileroInversoApoyo.toFixed(2),criap,'carrilero inverso - apoyo'))
carrileros.push(new tactica(carrileroInversoAtaque.toFixed(2),criat,'carrilero inverso - ataque'))

centrales.push(new tactica(centralLateralDefensa.toFixed(2),ctltdf,'central lateral - defensa'))
centrales.push(new tactica(centralLateralApoyo.toFixed(2),ctltap,'central lateral - apoyo'))
centrales.push(new tactica(centralLateralAtaque.toFixed(2),ctltat,'central lateral - ataque'))
centrales.push(new tactica(centralPracticoDefensa.toFixed(2),ctpdf,'central practico - defensa'))
centrales.push(new tactica(centralPracticoTapon.toFixed(2),ctptp,'central practico - tapon'))
centrales.push(new tactica(centralPracticoCubrir.toFixed(2),ctpcb,'central practico - cubrir'))
centrales.push(new tactica(centralDefensa.toFixed(2),ctdf,'central - defensa'))
centrales.push(new tactica(centralTapon.toFixed(2),cttp,'central - Tapon'))
centrales.push(new tactica(centralCubrir.toFixed(2),ctcu,'central - cubrir'))
centrales.push(new tactica(centralToqueDefensa.toFixed(2),ctTdf,'central con toque - defensa'))
centrales.push(new tactica(centralToqueTapon.toFixed(2),ctTtp,'central con toque - Tapon'))
centrales.push(new tactica(centralToqueCubrir.toFixed(2),ctTcu,'central con toque - cubrir'))
centrales.push(new tactica(liberoApoyo.toFixed(2),libap,'libero - apoyo'))
centrales.push(new tactica(liberoAtaque.toFixed(2),libat,'libero - ataque'))

laterales.push(new tactica(lateralDefensa.toFixed(2),latdf,'lateral - defensa'))
laterales.push(new tactica(lateralApoyo.toFixed(2),latdf,'lateral - apoyo'))
laterales.push(new tactica(lateralAtaque.toFixed(2),latdf,'lateral - ataque'))
laterales.push(new tactica(lateralPracticoDefensa.toFixed(2),latdf,'lateral practico - defensa'))

mediocentros.push(new tactica(mediocentroDefensa.toFixed(2),mcdf,'mediocentro - defensa'))
mediocentros.push(new tactica(mediocentroApoyo.toFixed(2),mcap,'mediocentro - apoyo'))
mediocentros.push(new tactica(pivoteOrganizadorDefensa.toFixed(2),pvorgdf,'pivote organizador - defensa'))
mediocentros.push(new tactica(pivoteOrganizadorApoyo.toFixed(2),pvorgap,'pivote organizador - apoyo'))
mediocentros.push(new tactica(centroRecuperadorDefensa.toFixed(2),recdf,'centro recuperador - defensa'))
mediocentros.push(new tactica(centroRecuperadorApoyo.toFixed(2),recap,'centro recuperador - apoyo'))
mediocentros.push(new tactica(pivoteDefensivo.toFixed(2),pvodef,'pivote defensivo'))
mediocentros.push(new tactica(mediocierre.toFixed(2),mdcr,'mediocierre'))
mediocentros.push(new tactica(regista.toFixed(2),rg,'regista'))
mediocentros.push(new tactica(organizadorIntinerante.toFixed(2),oit,'Organizador Intinerante'))
mediocentros.push(new tactica(segundoVolanteApoyo.toFixed(2),sgvolap,'segundo volante - apoyo'))
mediocentros.push(new tactica(segundoVolanteAtaque.toFixed(2),sgvolat,'segundo volante - ataque'))

centrocampistas.push(new tactica(centrocampistaDefensa.toFixed(2),cmdf,'centrocampista - defensa'))
centrocampistas.push(new tactica(centrocampistaApoyo.toFixed(2),cmap,'centrocampista - apoyo'))
centrocampistas.push(new tactica(centrocampistaataque.toFixed(2),cmat,'centrocampista - ataque'))
centrocampistas.push(new tactica(pivoteOrganizadorDefensa.toFixed(2),pvodef,'pivote organizador - defensa'))
centrocampistas.push(new tactica(pivoteOrganizadorApoyo.toFixed(2),pvorgap,'pivote organizador - apoyo'))
centrocampistas.push(new tactica(todoterreno.toFixed(2),ttap,'todoterreno'))
centrocampistas.push(new tactica(organizadorAdelantadoApoyo.toFixed(2),oadap,'Organizador adelantado - apoyo'))
centrocampistas.push(new tactica(organizadorAdelantadoAtaque.toFixed(2),oadat,'organizador adelantado - ataque'))
centrocampistas.push(new tactica(centroRecuperadorDefensa.toFixed(2),recdf,'recuperador - defensa'))
centrocampistas.push(new tactica(centroRecuperadorApoyo.toFixed(2),recap,'recuperador - apoyo'))
centrocampistas.push(new tactica(organizadorIntinerante.toFixed(2),oit,'organizador intinerante'))
centrocampistas.push(new tactica(mezzalaApoyo.toFixed(2),mzap,'mezzala - apoyo'))
centrocampistas.push(new tactica(mezzalaAtaque.toFixed(2),mzat,'mezzala - ataque'))
centrocampistas.push(new tactica(interiorMixto.toFixed(2),imx,'interior mixto'))
centrocampistas.push(new tactica(centrocampistaDeBandaDefensa.toFixed(2),cbdf,'centrocampista de banda - defensa'))
centrocampistas.push(new tactica(centrocampistaDeBandaApoyo.toFixed(2),cbap,'centrocampista de banda - apoyo'))
centrocampistas.push(new tactica(centrocampistaDeBandaAtaque.toFixed(2),cbat,'centrocampista de banda - ataque'))
centrocampistas.push(new tactica(extremoApoyo.toFixed(2),extap,'extremo - apoyo'))
centrocampistas.push(new tactica(extremoAtaque.toFixed(2),extat,'extremo - ataque'))
centrocampistas.push(new tactica(extremoDefensivoDefensa.toFixed(2),exddf ,'extremo defensivo - defensa'))
centrocampistas.push(new tactica(extremoDefensivoApoyo.toFixed(2),exdap,'extremo defensivo - apoyo'))
centrocampistas.push(new tactica(extremoInversoApoyo.toFixed(2),exiap,'extremo inverso - apoyo'))
centrocampistas.push(new tactica(extremoInversoAtaque.toFixed(2),exiat ,'extremo inverso - ataque'))
centrocampistas.push(new tactica(organizadorDeBandaApoyo.toFixed(2),oabap,'organizador de banda - apoyo'))
centrocampistas.push(new tactica(organizadorDeBandaAtaque.toFixed(2),oabat ,'organizador de banda - ataque'))

mediapuntas.push(new tactica( extremoApoyo.toFixed(2),extap,'extremo - apoyo'))
mediapuntas.push(new tactica( extremoAtaque.toFixed(2),extat,'extremo - ataque'))
mediapuntas.push(new tactica( organizadorAdelantadoApoyo.toFixed(2),oadap,'organizador adelantado - apoyo'))
mediapuntas.push(new tactica( organizadorAdelantadoAtaque.toFixed(2),oadat,'organizador adelantado - ataque'))
mediapuntas.push(new tactica( delanteroInteriorApoyo.toFixed(2),delintap,'delantero interior - apoyo'))
mediapuntas.push(new tactica( delanteroInteriorAtaque.toFixed(2),delintat,'delantero interior - ataque'))
mediapuntas.push(new tactica( trequarista.toFixed(2),treq,'trequarista'))
mediapuntas.push(new tactica( delanteroObjEscoradoApoyo.toFixed(2),delobjescap,'delantero obj. escorado - apoyo'))
mediapuntas.push(new tactica( delanteroObjEscoradoAtaque.toFixed(2),delobjescat,'delantero obj. escorado - ataque'))
mediapuntas.push(new tactica( buscadorEspacios.toFixed(2),busqesp,'buscador de espacios'))
mediapuntas.push(new tactica( extremoInversoApoyo.toFixed(2),exiap,'extremo inverso - apoyo'))
mediapuntas.push(new tactica( extremoInversoAtaque.toFixed(2),exiat,'extremo inverso - apoyo'))

mediapuntaCentral.push(new tactica( mediapuntaApoyo.toFixed(2),mpap,'mediapunta - apoyo'))
mediapuntaCentral.push(new tactica( mediapuntaAtaque.toFixed(2),mpat,'mediapunta - ataque'))
mediapuntaCentral.push(new tactica( organizadorAdelantadoApoyo.toFixed(2),oadap,'organizador adelantado - apoyo'))
mediapuntaCentral.push(new tactica( organizadorAdelantadoAtaque.toFixed(2),oadat,'organizador adelantado - ataque'))
mediapuntaCentral.push(new tactica( trequarista.toFixed(2),treq,'trequarista'))
mediapuntaCentral.push(new tactica( enganche.toFixed(2),eng,'enganche'))
mediapuntaCentral.push(new tactica( delanteroSorpresa.toFixed(2),delsor,'delantero sorpresa'))

delanteros.push(new tactica( segundoDelanteroApoyo.toFixed(2),segdelap ,'segundo delantero - apoyo'))
delanteros.push(new tactica( segundoDelanteroAtaque.toFixed(2),segdelat ,'segundo delantero - ataque'))
delanteros.push(new tactica( delanteroAvanzado.toFixed(2),delav ,'delantero avanzado'))
delanteros.push(new tactica( delanteroObjetivoApoyo.toFixed(2),delobjap ,'delantero objetivo - apoyo'))
delanteros.push(new tactica( delanteroObjetivoAtaque.toFixed(2),delobjat ,'delantero objetivo - ataque'))
delanteros.push(new tactica( ariete.toFixed(2),ari ,'ariete '))
delanteros.push(new tactica( delanteroCompletoApoyo.toFixed(2),delcmpap ,'delantero completo - apoyo'))
delanteros.push(new tactica( delanteroCompletoAtaque.toFixed(2),delcmpat ,'delantero completo - ataque'))
delanteros.push(new tactica( delanteroPresionanteDefensa.toFixed(2),delprdf ,'delantero presionante - defensa'))
delanteros.push(new tactica( delanteroPresionanteApoyo.toFixed(2),delprap ,'delantero presionante - apoyo'))
delanteros.push(new tactica( delanteroPresionanteAtaque.toFixed(2),delprat ,'delantero presionante - ataque'))
delanteros.push(new tactica( trequarista.toFixed(2),treq ,'trequarista '))
delanteros.push(new tactica( falsoNueve.toFixed(2),f9 ,'falso nueve '))


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



process.addEventListener('click',() => procesar())
