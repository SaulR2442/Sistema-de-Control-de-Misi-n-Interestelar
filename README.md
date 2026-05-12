# Sistema-de-Control-de-Misi-n-Interestelar
Es un trabajo de segundo trimestre, donde se evidencia el uso de funciones en JavaScript.
Reto de Programación: Sistema de
Control de Misión Interestelar
Contexto
La Agencia de Exploración Espacial requiere un software para evaluar la viabilidad de los viajes
a planetas distantes. El sistema debe procesar los datos técnicos de una nave y la distancia del
objetivo para determinar si la misión es segura, cuánto tiempo tomará y si los recursos son
suficientes.
Requerimientos Técnicos
Debes desarrollar un script en JavaScript para consola que procese los siguientes datos:
Nombre de la Misión, Distancia al Destino (años luz), Velocidad de la Nave (fracción de la
velocidad de la luz, e.g., 0.1 a 0.9), Peso de la Carga (toneladas) y Nivel de Oxígeno
Actual (%).
Implementa las siguientes funciones independientes:
1. Cálculo de Tiempo de Viaje: Una función que reciba la distancia y la velocidad, y retorne
el tiempo estimado en años terrestres (distancia / velocidad).
2. Cálculo de Consumo de Combustible: Una función que reciba el peso de la carga y la
distancia. La nave consume 15 unidades de energía por cada tonelada de carga por cada
año luz de distancia.
3. Monitor de Soporte Vital: Una función que reciba el porcentaje de oxígeno y el tiempo de
viaje estimado. Si el oxígeno es insuficiente para la duración del viaje (asumiendo que se
consume un 2% mensual), debe retornar un estado de alerta.
4. Clasificación de Destino: Una función que reciba la distancia y retorne una categoría:
○ Menos de 5 años luz: "Sistema Local (Próximo)"
○ 5 a 15 años luz: "Sector Intermedio"
○ Más de 15 años luz: "Espacio Profundo"
5. Evaluación de Viabilidad: Una función que reciba el tiempo de viaje y el nivel de oxígeno.
Debe retornar "VIABLE" si el tiempo es menor a 50 años y el oxígeno es > 20%, de lo
contrario retornar "RIESGO ALTO".
Validaciones y Reglas de Negocio
● Límites de Velocidad: Si la velocidad ingresada es menor o igual a 0 o mayor a 0.95, el
programa debe retornar: "Error: Velocidad fuera de los límites físicos permitidos".
● Oxígeno Crítico: Si el nivel de oxígeno inicial es menor al 15%, el programa debe
detenerse y retornar: "Misión Cancelada: Niveles de soporte vital críticos antes del
despegue".
● Modularidad: No se permiten cálculos directos en la función principal. Esta debe invocar a

cada función técnica, capturar sus retornos y construir el reporte final.
Salida Esperada (Reporte de Navegación)
El programa debe imprimir en la consola un resumen con el siguiente formato:
==========================================
CENTRO DE CONTROL DE MISIÓN: [Nombre]
==========================================
Destino: [Categoría]
Distancia: [Valor] Años Luz
Velocidad Crucero: [Valor]c
------------------------------------------
Tiempo de Viaje: [Valor] Años
Gasto de Energía: [Valor] Unidades
Estado Oxígeno: [Alerta / Estable]
------------------------------------------
ESTADO DE MISIÓN: [Viabilidad]
==========================================

Instrucciones de implementación:
● Redondea el tiempo de viaje y el consumo de energía a números enteros usando
Math.round().
● Asegúrate de que todas las funciones utilicen return para pasar los datos a la función
orquestadora.
