// script.js

function CalculatorPromedio() {
    // Recopila las notas de los campos de entrada
    var nota1_Unidad1 = parseFloat(document.getElementById("Nota1_Unidad1").value);
    var nota2_Unidad1 = parseFloat(document.getElementById("Nota2_Unidad1").value);
    var nota1_Unidad2 = parseFloat(document.getElementById("Nota1_Unidad2").value);
    var nota2_Unidad2 = parseFloat(document.getElementById("Nota2_Unidad2").value);
    var nota1_Unidad3 = parseFloat(document.getElementById("Nota1_Unidad3").value);
    var nota2_Unidad3 = parseFloat(document.getElementById("Nota2_Unidad3").value);

    // Calcula la ponderación y el promedio de cada unidad
    var ponderacion_Unidad1 = (nota1_Unidad1 + nota2_Unidad1) / 2;
    var ponderacion_Unidad2 = (nota1_Unidad2 + nota2_Unidad2) / 2;
    var ponderacion_Unidad3 = (nota1_Unidad3 + nota2_Unidad3) / 2;

    // Actualiza las celdas de ponderación en la tabla
    document.getElementById("Ponderacion_Unidad1").textContent = ponderacion_Unidad1.toFixed(2);
    document.getElementById("Ponderacion_Unidad2").textContent = ponderacion_Unidad2.toFixed(2);
    document.getElementById("Ponderacion_Unidad3").textContent = ponderacion_Unidad3.toFixed(2);

    // Calcula el promedio total
    var promedioTotal = (ponderacion_Unidad1 + ponderacion_Unidad2 + ponderacion_Unidad3) / 3;

    // Muestra el promedio total en un mensaje
    var passMessage = document.getElementById("passMessage");
    passMessage.textContent = "El promedio total es: " + promedioTotal.toFixed(2);
    
}

