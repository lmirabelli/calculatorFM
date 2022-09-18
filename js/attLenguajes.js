let arco = document.getElementById('arco')
let tecnico = document.getElementById('tecnico')
let mental = document.getElementById('mental')
let fisico = document.getElementById('fisico')
let huno = document.getElementById('huno')
let idioma = 'esp';




let espanol = () => {
    idioma = 'esp'
    huno.innerText = `Atributos de Jugador`
    arco.innerHTML = `
    <h3>Arquero</h3>
                <div class="att">
                    <p>Alcance Aereo</p><input type="number" id="aereo">
                </div>
                <div class="att">
                    <p>Blocaje</p><input type="number" id="blocaje">
                </div>
                <div class="att">
                    <p>Comunicacion</p><input type="number" id="comunicacion">
                </div>
                <div class="att">
                    <p>Control</p><input type="number" id="controlGK">
                </div>
                <div class="att">
                    <p>Excentricidad</p><input type="number" id="excentricidad">
                </div>
                <div class="att">
                    <p>Puños</p><input type="number" id="punos">
                </div>
                <div class="att">
                    <p>Mando en el Area</p><input type="number" id="mando">
                </div>
                <div class="att">
                    <p>Pases</p><input type="number" id="pasesGK">
                </div>
                <div class="att">
                    <p>Reflejos</p><input type="number" id="reflejos">
                </div>
                <div class="att">
                    <p>Salidas</p><input type="number" id="salidas">
                </div>
                <div class="att">
                    <p>Saque con la mano</p><input type="number" id="sManos">
                </div>
                <div class="att">
                    <p>Saques de Puerta</p><input type="number" id="sPuerta">
                </div>
                <div class="att">
                    <p>1 contra 1</p><input type="number" id="oneToOne">
                </div>`
    tecnico.innerHTML = `
    <h3>Tecnicos</h3>
                <div class="att">
                    <p>Cabeceo</p><input type="number" id="cabeceo">
                </div>
                <div class="att">
                    <p>Centros</p><input type="number" id="centros">
                </div>
                <div class="att">
                    <p>Control</p><input type="number" id="control">
                </div>
                <div class="att">
                    <p>Entradas</p><input type="number" id="entradas">
                </div>
                <div class="att">
                    <p>Marcaje</p><input type="number" id="marcaje">
                </div>
                <div class="att">
                    <p>Pases</p><input type="number" id="pases">
                </div>
                <div class="att">
                    <p>Penaltis</p><input type="number" id="penales">
                </div>
                <div class="att">
                    <p>Regate</p><input type="number" id="regate">
                </div>
                <div class="att">
                    <p>Remate</p><input type="number" id="remate">
                </div>
                <div class="att">
                    <p>Sq. Esquina</p><input type="number" id="sEsquina">
                </div>
                <div class="att">
                    <p>Sq. Largos</p><input type="number" id="sLargos">
                </div>
                <div class="att">
                    <p>Tecnica</p><input type="number" id="tecnica">
                </div>
                <div class="att">
                    <p>Tiros Lejanos</p><input type="number" id="tLejano">
                </div>
                <div class="att">
                    <p>Tiros Libres</p><input type="number" id="tLibres">
                </div>`
    mental.innerHTML = `
    <h3>Mental</h3>
    <div class="att">
        <p>Agresividad</p><input type="number" id="agresividad">
    </div>
    <div class="att">
        <p>Anticipacion</p><input type="number" id="anticipacion">
    </div>
    <div class="att">
        <p>Colocacion</p><input type="number" id="colocacion">
    </div>
    <div class="att">
        <p>Concentracion</p><input type="number" id="concentracion">
    </div>
    <div class="att">
        <p>Decisiones</p><input type="number" id="decisiones">
    </div>
    <div class="att">
        <p>Desmarques</p><input type="number" id="desmarques">
    </div>
    <div class="att">
        <p>Determinacion</p><input type="number" id="determinacion">
    </div>
    <div class="att">
        <p>Juego en Equipo</p><input type="number" id="jEquipo">
    </div>
    <div class="att">
        <p>Liderazgo</p><input type="number" id="liderazgo">
    </div>
    <div class="att">
        <p>Sacrificio</p><input type="number" id="sacrificio">
    </div>
    <div class="att">
        <p>Serenidad</p><input type="number" id="serenidad">
    </div>
    <div class="att">
        <p>Talento</p><input type="number" id="talento">
    </div>
    <div class="att">
        <p>Valentia</p><input type="number" id="valentia">
    </div>
    <div class="att">
        <p>Vision</p><input type="number" id="vision">
    </div>`
    fisico.innerHTML = `
    <h3>Fisico</h3>
                <div class="att">
                    <p>Aceleracion</p><input type="number" id="aceleracion">
                </div>
                <div class="att">
                    <p>Agilidad</p><input type="number" id="agilidad">
                </div>
                <div class="att">
                    <p>Salto</p><input type="number" id="salto">
                </div>
                <div class="att">
                    <p>Equilibrio</p><input type="number" id="equilibrio">
                </div>
                <div class="att">
                    <p>Fuerza</p><input type="number" id="fuerza">
                </div>
                <div class="att">
                    <p>Rec. Fisica</p><input type="number" id="rFisica">
                </div>
                <div class="att">
                    <p>Resistencia</p><input type="number" id="resistencia">
                </div>
                <div class="att">
                    <p>Velocidad</p><input type="number" id="velocidad">
                </div>`
                inputs = document.getElementsByTagName('input')

                puntajeInputs()
    
    process.innerText = `revelar puntajes`
    error.innerText = `NOTA: aunque su puntuacion de rol sea alta, si esta fuera de su posicion natural no servira de mucho`
    puntajeTitulo.innerHTML = `puntajes`
    gk.innerHTML = `arqueros`
    cr.innerHTML = `carrileros`
    ct.innerHTML = `centrales`
    lt.innerHTML = `laterales`
    mc.innerHTML = `mediocentros`
    md.innerHTML = `centrocampistas`
    mpc.innerHTML = `mediapuntas (Centro)`
    mpb.innerHTML = `mediapuntas (banda)`
    del.innerHTML = `delanteros`
    footerYT.innerHTML = `seguime en youtube`
    footerSim.innerHTML = `empeza a vivir el mundial ahora`
}
let english = () => {
    idioma = 'eng';
    console.log(idioma)

    huno.innerText = `Player attributes`
    arco.innerHTML = `
    <h3>Goalkeeper</h3>
                <div class="att">
                    <p>Aerial Reach</p><input type="number" id="aereo">
                </div>
                <div class="att">
                    <p>Command of Area</p><input type="number" id="mando">
                </div>
                <div class="att">
                    <p>Communication</p><input type="number" id="comunicacion">
                </div>
                <div class="att">
                    <p>Eccentricity</p><input type="number" id="excentricidad">
                </div>
                <div class="att">
                    <p>First Tocuh</p><input type="number" id="controlGK">
                </div>
                <div class="att">
                    <p>Handling</p><input type="number" id="blocaje">
                </div>
                <div class="att">
                    <p>Kicking</p><input type="number" id="sPuerta">
                </div>
                <div class="att">
                    <p>One On Ones</p><input type="number" id="oneToOne">
                </div>
                <div class="att">
                    <p>Passing</p><input type="number" id="pasesGK">
                </div>
                <div class="att">
                    <p>Punching</p><input type="number" id="punos">
                </div>
                <div class="att">
                    <p>Reflexes</p><input type="number" id="reflejos">
                </div>
                <div class="att">
                    <p>Rushing Out</p><input type="number" id="salidas">
                </div>
                <div class="att">
                    <p>Throwing</p><input type="number" id="sManos">
                </div>
                `
    tecnico.innerHTML = `
    <h3>Technical</h3>
                <div class="att">
                    <p>Corners</p><input type="number" id="sEsquina">
                </div>
                <div class="att">
                    <p>Crossing</p><input type="number" id="centros">
                </div>
                <div class="att">
                    <p>Dribbling</p><input type="number" id="regate">
                </div>
                <div class="att">
                    <p>Finishing</p><input type="number" id="remate">
                </div>
                <div class="att">
                    <p>First Touch</p><input type="number" id="control">
                </div>
                <div class="att">
                    <p>Free Kicks</p><input type="number" id="tLibres">
                </div>
                <div class="att">
                    <p>Heading</p><input type="number" id="cabeceo">
                </div>
                <div class="att">
                    <p>Long Shots</p><input type="number" id="tLejano">
                </div>
                <div class="att">
                    <p>Long Throws</p><input type="number" id="sLargos">
                </div>
                <div class="att">
                    <p>Marking</p><input type="number" id="marcaje">
                </div>
                <div class="att">
                    <p>Passing</p><input type="number" id="pases">
                </div>
                <div class="att">
                    <p>Penalty Taking</p><input type="number" id="penales">
                </div>
                <div class="att">
                    <p>Tackling</p><input type="number" id="entradas">
                </div>
                <div class="att">
                    <p>Technique</p><input type="number" id="tecnica">
                </div>
                `
    mental.innerHTML = `
    <h3>Mental</h3>
    <div class="att">
        <p>Aggression</p><input type="number" id="agresividad">
    </div>
    <div class="att">
        <p>Anticipation</p><input type="number" id="anticipacion">
    </div>
    <div class="att">
        <p>Bravery</p><input type="number" id="valentia">
    </div>
    <div class="att">
        <p>Composure</p><input type="number" id="serenidad">
    </div>
    <div class="att">
        <p>Concentration</p><input type="number" id="concentracion">
    </div>
    <div class="att">
        <p>Decisions</p><input type="number" id="decisiones">
    </div>
    <div class="att">
        <p>Determination</p><input type="number" id="determinacion">
    </div>
    <div class="att">
        <p>Flair</p><input type="number" id="talento">
    </div>
    <div class="att">
        <p>Leadership</p><input type="number" id="liderazgo">
    </div>
    <div class="att">
        <p>Off the Ball</p><input type="number" id="desmarques">
    </div>
    <div class="att">
        <p>Positioning</p><input type="number" id="colocacion">
    </div>
    <div class="att">
        <p>Teamwork</p><input type="number" id="jEquipo">
    </div>
    <div class="att">
        <p>Vision</p><input type="number" id="vision">
    </div>
    <div class="att">
        <p>Work Rate</p><input type="number" id="sacrificio">
    </div>
    `
    fisico.innerHTML = `
    <h3>Physical</h3>
                <div class="att">
                    <p>Acceleration</p><input type="number" id="aceleracion">
                </div>
                <div class="att">
                    <p>Agility</p><input type="number" id="agilidad">
                </div>
                <div class="att">
                    <p>Balance</p><input type="number" id="equilibrio">
                </div>
                <div class="att">
                    <p>Jumping Reach</p><input type="number" id="salto">
                </div>
                <div class="att">
                    <p>Natural Fitness</p><input type="number" id="rFisica">
                </div>
                <div class="att">
                    <p>Pace</p><input type="number" id="velocidad">
                </div>
                <div class="att">
                    <p>Stamina</p><input type="number" id="resistencia">
                </div>
                <div class="att">
                    <p>Strength</p><input type="number" id="fuerza">
                </div>
                `
    inputs = document.getElementsByTagName('input')

    puntajeInputs()

    process.innerText = `process`
    error.innerText = `NOTE: Even if your role score is high, if you're out of your natural position it won't do you much good.`
    puntajeTitulo.innerHTML = `player ratings`
    gk.innerHTML = `goalkeepers`
    cr.innerHTML = `wing backs`
    ct.innerHTML = `central defenders`
    lt.innerHTML = `full backs`
    mc.innerHTML = `def. mildfielders`
    md.innerHTML = `mildfielders`
    mpc.innerHTML = `att. mildfielders (center)`
    mpb.innerHTML = `att. mildfielders (wings)`
    del.innerHTML = `forwards`
    footerYT.innerHTML = `follow me on youTube: `
    footerSim.innerHTML = `start living the world cup, now: `
}

document.getElementById('esp').addEventListener('click',() => espanol())
document.getElementById('eng').addEventListener('click',() => english())