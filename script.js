// Obtener referencia a los elementos del DOM
const inputCelsius = document.getElementById('input-celsius');
const conversionTable = document.getElementById('conversion-table');

// Recuperar conversiones guardadas en localStorage al cargar la página
window.onload = function() {
    const conversions = JSON.parse(localStorage.getItem('conversions')) || [];
    conversions.forEach(conversion => {
        addConversionToTable(conversion);
    });
}

// Función para convertir a Fahrenheit y actualizar la tabla
function convertToFahrenheit() {
    const celsius = parseFloat(inputCelsius.value);
    const fahrenheit = (celsius * 9/5) + 32;
    const conversion = `${fahrenheit.toFixed(2)} °F`;
    addConversionToTable(conversion);
    saveConversion(conversion);
}

// Función para convertir a Kelvin y actualizar la tabla
function convertToKelvin() {
    const celsius = parseFloat(inputCelsius.value);
    const kelvin = celsius + 273.15;
    const conversion = `${kelvin.toFixed(2)} K`;
    addConversionToTable(conversion);
    saveConversion(conversion);
}

// Función para agregar una conversión a la tabla
function addConversionToTable(conversion) {
    const row = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.textContent = inputCelsius.value + " Cº";
    td2.textContent = conversion;
    row.appendChild(td1);
    row.appendChild(td2);
    conversionTable.appendChild(row);
}

// Función para guardar la conversión en localStorage
function saveConversion(conversion) {
    const conversions = JSON.parse(localStorage.getItem('conversions')) || [];
    conversions.push(conversion);
    localStorage.setItem('conversions', JSON.stringify(conversions));
}

// Borrar datos del localStorage al cargar la página
window.onload = function() {
    localStorage.removeItem('conversions');
    const conversions = JSON.parse(localStorage.getItem('conversions')) || [];
    conversions.forEach(conversion => {
        addConversionToTable(conversion);
    });
}
