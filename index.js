// acceder al elemento canvas y a su contexto 
const canvas = document.getElementById('canvas-container');
const context = canvas.getContext('2d');

// definir las coordenadas iniciales
let initialX;
let initialY;

// funcion que dibuja 
const paint = (initialPositionX, initialPositionY) => {
    context.beginPath(); //iniciar el nuevo trazo
    context.moveTo(initialX, initialY); //muevo el trazo a estas coordenadas iniciales
    context.lineWidth = 10; //tamaño del trazo
    context.strokeStyle = '#000'; //color del trazo
    context.lineCap = 'round'; // para que el trazo sea redondeado
    context.lineJoin = 'round'; // para que el trazo sea redondeado
    context.lineTo(initialPositionX, initialPositionY); //termina el trazo en estas coordenadas
    context.stroke(); // traza el recorrido

    initialX = initialPositionX; //actualizamos las coordenadas a medidia que se mueve el cusror
    initialY = initialPositionY; //actualizamos las coordenadas a medidia que se mueve el cusror
}

// aqui guardo las coordenadas iniciales
const mouseDown = (e) => {
    initialX = e.offsetX;
    initialY = e.offsetY;
    paint(initialX, initialY);
    canvas.addEventListener('mousemove', mouseMove); // y comienzo a dibujar el recorrido
}

// aqui guardo el recorrido cuando estoy moviendo mientras mantengo presionado
const mouseMove = (e) => {
    paint(e.offsetX, e.offsetY);
}

// esta funcion es para dejar de dibujar cuando levanto el click 
const mouseUp = () => {
    canvas.removeEventListener('mousemove', mouseMove);
}

canvas.addEventListener('mousedown', mouseDown); //cuando hacemos el click ejecuta mouseDown para comenzar a dibujar
canvas.addEventListener('mouseup', mouseUp); //cuando levanto el click ejecuta mouseUp para que termine de dibujar

let btnClear = document.querySelector('#btnClear');

btnClear.addEventListener('click', () => {
    context.clearRect(0, 0, context.canvas.clientWidth, context.canvas.clientHeight);
});

// function resetCanvas() {
    
//     console.log('リセット！');
// }