const calculoTiempoViaje = (distanciaAlDestino, velocidadNave) => {
  if (velocidadNave <= 0 || velocidadNave > 0.95) {
    console.log(`Eror: Velocidad fuera de los limites fisicos permitidos.`);
  } else {
    return Math.round(distanciaAlDestino / velocidadNave);
  }
};

const calculoConsumoCombustible = (pesoDeLaCarga, distanciaAlDestino) => {
  return Math.round(15 * pesoDeLaCarga * distanciaAlDestino);
};

const clasificacionDeDestino = (tiempo) => {
  if (tiempo < 5) {
    return "Sistema Local (Próximo)";
  } else if (tiempo <= 15) {
    return "Sector intermedio.";
  } else {
    return "Espacio Profundo";
  }
};

const evaluacionViabilidad = (tiempo, nivelOxigeno) => {
  if (tiempo < 50 && nivelOxigeno > 20) {
    return `VIABLE.`;
  } else {
    return `RIESGO ALTO.`;
  }
};

const monitorSoporteVital = (nivelOxigeno, tiempo) => {
  if (nivelOxigeno < 15) {
    return `Misión cancelada: Niveles de soporte vital criticos antes del despegue.`;
  }
  let consumoTotalNecesacio = tiempo * 24;
  if (nivelOxigeno < consumoTotalNecesacio) {
    return `Alerta: Nivel de oxigeno insuficente.`;
  } else {
    return `Oxigeno suficiente para el viaje`;
  }
};

const reporteNavegacion = (
  nombreMision,
  distanciaAlDestino,
  clasificaciontiempo,
  velocidadNave,
  tiempo,
  combustible,
  soporteVital,
  viable,
) => {
  console.log(`
---------------------------------------------
---------------------------------------------
CENTRO DE CONTROL DE MISIÓN: ${nombreMision}.
---------------------------------------------
---------------------------------------------
Destino: ${clasificaciontiempo}.
Distacia: ${distanciaAlDestino} Años Luz.
Velocidad Crucero: ${velocidadNave}c.
--------------------------------------------
Tiempo de Viaje: ${tiempo} Años.
Gasto de Energia: ${combustible} unidades.
Estado Oxigeno: ${soporteVital}.
-------------------------------------------
ESTADO DE MISIÓN: ${viable}.
-------------------------------------------
------------------------------------------`);
};

let nombreMision = prompt(`Ingrese el nombre de la misión -> `);
let distanciaAlDestino = prompt("la distancia del destino en años luz: ");
let velocidadNave = prompt(`Ingrese la velocidad en fraccion de la luz -> `);
let pesoDeLaCarga = prompt("Cual es el peso de la carga (Toneladas): ");

let nivelOxigeno = prompt(`Ingrese el porcentaje actual de oxigeno -> `);

let tiempo = calculoTiempoViaje(distanciaAlDestino, velocidadNave);
let combustible = calculoConsumoCombustible(pesoDeLaCarga, distanciaAlDestino);
let soporteVital = monitorSoporteVital(nivelOxigeno, tiempo);
let clasificaciontiempo = clasificacionDeDestino(tiempo);
let viable = evaluacionViabilidad(tiempo, nivelOxigeno);
let reporte = reporteNavegacion(
  nombreMision,
  distanciaAlDestino,
  clasificaciontiempo,
  velocidadNave,
  tiempo,
  combustible,
  soporteVital,
  viable,
);
