function convertToCelsius() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("result").innerHTML = `${fahrenheit} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius.`;
}

function convertToFahrenheit() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = celsius * 9 / 5 + 32;
    document.getElementById("result").innerHTML = `${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
}
