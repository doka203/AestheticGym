let horas = 0;
let minutos = 0;
let segundos = 0;

const contador = document.getElementById("cronoContar");
let horariosAnteriores = [];
let controle = null;

const iniciar = () => {
  if (controle == null) {
    controle = setInterval(cronometro, 1000);
  } else {
    clearInterval(controle);
    controle = setInterval(cronometro, 1000);
  }
};

const pausar = () => {
  clearInterval(controle);
};

const resetar = () => {
  horas = 0;
  minutos = 0;
  segundos = 0;

  contador.textContent = "00:00:00";
  iniciar();
};

const finalizar = () => {
  const tempoAtual = { horas: horas, minutos: minutos, segundos: segundos };
  if (horariosAnteriores.length == 6) {
    // guardar no máximo os ultimos 6 tempos

    horariosAnteriores.pop(); // pop() -> metodo de manipulacao de array
  }

  let arr1 = [tempoAtual];

  horariosAnteriores = [...arr1, ...horariosAnteriores]; // spread operator

  const divTemposAnteriores = document.getElementById("temposAnteriores");
  divTemposAnteriores.innerHTML = "<h2>Tempos Anteriores</h2>";

  let count = horariosAnteriores.length;

  horariosAnteriores.forEach((horario) => {
    const pHorario = document.createElement("p");
    const horasFormatadas = formatarTempo(horario.horas);
    const minutosFormatados = formatarTempo(horario.minutos);
    const segundosFormatados = formatarTempo(horario.segundos);

    pHorario.textContent = `Tempo ${count}:     ${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
    divTemposAnteriores.appendChild(pHorario);
    count--;
  });
};

const cronometro = () => {
  segundos++;

  if (segundos == 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos == 60) {
    minutos = 0;
    horas++;
  }

  const horasFormatadas = formatarTempo(horas);
  const minutosFormatados = formatarTempo(minutos);
  const segundosFormatados = formatarTempo(segundos);

  contador.textContent = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
};

const formatarTempo = (tempo) => {
  if (tempo >= 10) {
    return tempo;
  }
  return `0${tempo}`;
};
