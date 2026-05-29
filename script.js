let preguntasActuales = [];
let preguntaActual = 0;
let score = 0;
let respuestasSeleccionadas = [];
let respuestaVerificada = false;

let segundos = 0;
let timerInterval;

function iniciarTimer(){

clearInterval(timerInterval);

segundos = 0;

actualizarTimer();

timerInterval = setInterval(()=>{

segundos++;

actualizarTimer();

},1000);

}

function detenerTimer(){

clearInterval(timerInterval);

}

function actualizarTimer(){

const minutos =
Math.floor(segundos / 60);

const seg =
segundos % 60;

document.getElementById("timer")
.innerHTML =

`⏱ Tiempo:
${String(minutos).padStart(2,"0")}
:
${String(seg).padStart(2,"0")}`;

}

function mostrarSubtemas() {

document.getElementById("main-menu")
.classList.add("hidden");

document.getElementById("subtemas")
.classList.remove("hidden");

}

function volverMenu() {

document.getElementById("subtemas")
.classList.add("hidden");

document.getElementById("main-menu")
.classList.remove("hidden");

}

function volverSubtemas() {

detenerTimer();

document.getElementById("quiz-container")
.classList.add("hidden");

document.getElementById("subtemas")
.classList.remove("hidden");

}

function iniciarTema(nombreTema) {

preguntasActuales =
[...temas[nombreTema]]
.sort(() => Math.random() - 0.5);

preguntaActual = 0;

score = 0;

document.getElementById("subtemas")
.classList.add("hidden");

document.getElementById("quiz-container")
.classList.remove("hidden");

iniciarTimer();

mostrarPregunta();

}

function mostrarPregunta() {

respuestaVerificada = false;

respuestasSeleccionadas = [];

const pregunta =
preguntasActuales[preguntaActual];

document.getElementById("contador")
.innerHTML =
`Pregunta ${preguntaActual + 1} de ${preguntasActuales.length}`;

document.getElementById("question")
.innerHTML =
pregunta.question;

const optionsContainer =
document.getElementById("options");

optionsContainer.innerHTML = "";

document.getElementById("explanation")
.style.display = "none";

document.getElementById("next-btn")
.innerHTML =
"Verificar respuesta";

if (Array.isArray(pregunta.answer)) {

document.getElementById("multi-info")
.innerHTML =
`⚠ Selecciona ${pregunta.answer.length} respuestas`;

} else {

document.getElementById("multi-info")
.innerHTML = "";

}

pregunta.options.forEach((option, index) => {

const div =
document.createElement("div");

div.classList.add("option");

div.innerHTML = option;

div.onclick = () => seleccionar(div, index);

optionsContainer.appendChild(div);

});

}

function seleccionar(element, index) {

if (respuestaVerificada) return;

const pregunta =
preguntasActuales[preguntaActual];

if (Array.isArray(pregunta.answer)) {

if (respuestasSeleccionadas.includes(index)) {

respuestasSeleccionadas =
respuestasSeleccionadas.filter(
i => i !== index
);

element.style.border = "none";

element.style.background =
"#1d4280";

} else {

respuestasSeleccionadas.push(index);

element.style.border =
"4px solid #00e5ff";

element.style.background =
"#1565c0";

}

} else {

document.querySelectorAll(".option")
.forEach(el => {

el.style.border = "none";

el.style.background =
"#1d4280";

});

respuestasSeleccionadas = [index];

element.style.border =
"4px solid #00e5ff";

element.style.background =
"#1565c0";

}

}

document.getElementById("next-btn")
.onclick = () => {

if (!respuestaVerificada) {

verificar();

} else {

siguientePregunta();

}

};

function verificar() {

respuestaVerificada = true;

const pregunta =
preguntasActuales[preguntaActual];

const options =
document.querySelectorAll(".option");

let correcto = false;

if (Array.isArray(pregunta.answer)) {

const seleccionadas =
[...respuestasSeleccionadas]
.sort();

const correctas =
[...pregunta.answer]
.sort();

correcto =
JSON.stringify(seleccionadas)
===
JSON.stringify(correctas);

} else {

correcto =
respuestasSeleccionadas[0]
=== pregunta.answer;

}

if (correcto) {

score++;

}

options.forEach((option, index) => {

option.style.pointerEvents = "none";

if (
Array.isArray(pregunta.answer)
?
pregunta.answer.includes(index)
:
index === pregunta.answer
) {

option.classList.add("correct");

}

if (
respuestasSeleccionadas.includes(index)
&&
(
Array.isArray(pregunta.answer)
?
!pregunta.answer.includes(index)
:
index !== pregunta.answer
)
) {

option.classList.add("wrong");

}

});

const exp =
document.getElementById("explanation");

exp.style.display = "block";

let correctasTexto = "";

if (Array.isArray(pregunta.answer)) {

correctasTexto =
pregunta.answer
.map(i => pregunta.options[i])
.join("<br>");

} else {

correctasTexto =
pregunta.options[pregunta.answer];

}

if (correcto) {

exp.innerHTML = `

✅ CORRECTO 😎🔥

<br><br>

✔ RESPUESTA:

<br><br>

${correctasTexto}

<br><br>

📘 EXPLICACIÓN:

<br><br>

${pregunta.explanation}

`;

} else {

exp.innerHTML = `

❌ INCORRECTO 😭🔥

<br><br>

✔ RESPUESTA CORRECTA:

<br><br>

${correctasTexto}

<br><br>

📘 EXPLICACIÓN:

<br><br>

${pregunta.explanation}

`;

}

document.getElementById("next-btn")
.innerHTML =
"Siguiente";

}

function siguientePregunta() {

preguntaActual++;

if (
preguntaActual
<
preguntasActuales.length
) {

mostrarPregunta();

} else {

mostrarResultado();

}

}

function mostrarResultado() {

detenerTimer();

document.getElementById("quiz-container")
.innerHTML = `

<h2>
Examen terminado 😎🔥
</h2>

<h3>
Tu puntuación fue:
${score} / ${preguntasActuales.length}
</h3>

<h3>
⏱ Tiempo total:
${document.getElementById("timer").innerHTML.replace("⏱ Tiempo:","")}
</h3>

<button
class="volver-btn"
onclick="location.reload()">

Volver al menú

</button>

`;

}