// Variables de calculos

let limiteMuyMalo = 45;
let limiteMalo = 58;
let limiteNormal = 62;
let limiteBueno = 70;
let primaria = 0.7;
let secundaria = 0.3;
let vueltaNumero = 0;
let promedioCalidad = 55;
let minimoIndividual = 45;

// Variables refentes al DOM

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
let jugadoresHTML = document.getElementById('jugadores')
let arquerosHTML = document.getElementById('arqueros')
let defensoresCentralesHTML = document.getElementById('defensoresCentrales')
let lateralesPlantelHTML = document.getElementById('lateralesPlantel')
let mediocierrePlantelHTML = document.getElementById('mediocierrePlantel')
let mediocampistasHTML = document.getElementById('mediocampistas')
let mediocampistasBandaHTML = document.getElementById('mediocampistasBanda')
let mediapuntaCentroHTML = document.getElementById('mediapuntaCentro')
let mediapuntaBandaHTML = document.getElementById('mediapuntaBanda')
let delanterosPlantelHTML = document.getElementById('delanterosPlantel')
let menu = document.getElementById('menu')
let dataHTML = document.getElementById('data')
let buttonAZ = document.getElementById('AZ')
let buttonfNac = document.getElementById('buttonNac')
let buttonIn = document.getElementById('llegada')
let buttonOut = document.getElementById('partida')
let buttonPaises = document.getElementById('paises')
let encuentrosHTML = document.getElementById('encuentros')
let temp22HTML = document.getElementById('temp22')
let inputs = document.querySelectorAll('input')
let puntajeTitulo = document.getElementById('puntajes')
let gk = document.getElementById('gk')
let cr = document.getElementById('cr')
let ct = document.getElementById('ct')
let lt = document.getElementById('lt')
let mc = document.getElementById('mc')
let md = document.getElementById('md')
let mpc = document.getElementById('mpc')
let mpb = document.getElementById('mpb')
let del = document.getElementById('del')
let footerYT = document.getElementById('footerYT')
let footerSim = document.getElementById('footerSim')


// Referencias a roles

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
let calidadPortero;
let calidadDFC;
let calidadLAT;
let calidadMC;
let calidadMEC;
let calidadMEB;
let calidadMP;
let calidadMPB;
let calidadFW;
let nacionality

//roles para traduccion

let pordf;
let porcierredf;
let porcierreap;
let porcierreat;
let cardef;
let carap;
let carat;
let cmpcarap;
let cmpcarat;
let icardef;
let icarap;
let icarat;
let dftoquedf;
let dftoquetp;
let dftoquecu;
let dflatdf;
let dflatap;
let dflatat;
let dfprdf;
let dfprtp;
let dfprcu;
let libapoyo;
let libataque;
let fbdf;
let fbap;
let fbat;
let fbpdf;
let egche;
let reg;
let segvolanteap;
let segvolanteat;
let mezap;
let mezat;
let mdcentrodf;
let mdcentroap;
let ctrrecdf;
let ctrrecap;
let tdterreno;
let orgadelap;
let orgadelat;
let pivotdf;
let mpuntaap;
let mpuntaat;
let mfdf;
let mfap;
let mfat;
let extdefdf;
let extdefap;
let pivotorgdf;
let pivotorgap;
let intmx;
let mcierre;
let wgap;
let wgat;
let wginap;
let wginat;
let orgint;
let orgbandaap;
let orgbandaat;
let bespacios;
let interiorfwap;
let interiorfwat;
let sorpresa;
let objetivoap;
let objetivoat;
let quartista;
let segundodelap;
let segundodelat;
let delavanz;
let delaobjetivoap;
let delobjetivoat;
let nuevedearea;
let delancmpap;
let delancmpat;
let delanprdf;
let delanprap;
let delanprat;
let nueve;

// Arrays de posiciones

let arqueros = []
let carrileros = []
let centrales = []
let laterales = []
let mediocentros = []
let centrocampistas = []
let mediapuntas = []
let mediapuntaCentral = []
let delanteros = [];
let plantel = []
let player = []
let paises = []
let encuentro = []

let promediandoPosiciones = (aereo, blocaje,comunicacion,controlArquero,excentricidad,punos,mando,pasesArquero,reflejos,salidas,saqueMano,saquePuerta,oneToOne,cabeceo,centros,control,entradas,marcaje,pases,pk,regate,remate,sEsquina,sLargos,tecnica,tLejano,tLibres,agresividad,anticipacion,colocacion,concentracion,decisiones,desmarques,determinacion,jEquipo,lider,sacrificio,serenidad,talento,valentia,vision,aceleracion,agilidad,salto,equilibrio,fuerza,rFisica,resistencia,velocidad) => {

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

}

//ARMANDO LAS CLASES

class fichaJugador{
     constructor(name,nacionality,dateNacNumber,youngClub,dateInNumber,clubIn,dateOutNumber,clubOut,dateNac,dateIn,dateOut){
          this.name = name,
          this.nacionality = nacionality,
          this.dateNacNumber = dateNacNumber,
          this.youngClub = youngClub,
          this.dateInNumber = dateInNumber,
          this.clubIn = clubIn,
          this.dateOutNumber = dateOutNumber,
          this.clubOut = clubOut,
          this.dateNac = dateNac ,
          this.dateIn = dateIn ,
          this.dateOut = dateOut
     }
 }

 class nacionalidades{
     constructor(acrom,nombrePais){
          this.acrom = acrom,
          this.nombrePais = nombrePais
     }
 }
 class partidos{
     constructor(fecha,myTeam,rival,torneo,condicion,estadio,gf,gc,result){
          this.fecha = fecha,
          this.myTeam = myTeam,
          this.rival = rival,
          this.torneo = torneo,
          this.condicion = condicion,
          this.estadio = estadio,
          this.gf = gf,
          this.gc = gc,
          this.result = result
     }
 }

 // MENU

if(window.location.pathname == '/fmCalculator/index.html' ){
     menu.innerHTML = `<a href="index.html" class="activo">Inicio</a>
     <a href="html/equipo.html">Dorsales/Stats</a>
     <a href="html/partidos.html">Partidos</a>
     <a href="html/plantel.html">Roles Plantel</a>
     <a href="html/historia.html">Jugadores</a>
     <a href="html/starCup.html">ISSC</a>`
}else{
     menu.innerHTML = `<a href="../index.html">Inicio</a>
     <a href="equipo.html" id="dorsales">Dorsales/Stats</a>
     <a href="partidos.html" id="matches">Partidos</a>
     <a href="plantel.html" id="roles">Roles Plantel</a>
     <a href="historia.html" id="jug">Jugadores</a>
     <a href="starCup.html" id="issc">ISSC</a>`
     document.title == 'Dorsales' && (document.getElementById('dorsales').className = 'activo')
     document.title == 'Partidos' && (document.getElementById('matches').className = 'activo')
     document.title == 'plantel' && (document.getElementById('roles').className = 'activo')
     document.title == 'ISSC' && (document.getElementById('issc').className = 'activo')
     document.title == 'Historial-Jugadores' && (document.getElementById('jug').className = 'activo')
}