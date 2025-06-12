function convertTemp() {
  const input = document.getElementById("tempInput").value.trim();
  const unit = document.getElementById("unitSelect").value;
  const resultArea = document.getElementById("result");

  const temp = parseFloat(input);

  if (isNaN(temp)) {
    resultArea.textContent = "Please enter a valid number.";
    return;
  }

  let output = "";

  if (unit === "celsius") {
    const f = (temp * 9/5) + 32;
    const k = temp + 273.15;
    output = `${f.toFixed(2)} °F, ${k.toFixed(2)} K`;
  } else if (unit === "fahrenheit") {
    const c = (temp - 32) * 5/9;
    const k = (temp - 32) * 5/9 + 273.15;
    output = `${c.toFixed(2)} °C, ${k.toFixed(2)} K`;
  } else if (unit === "kelvin") {
    const c = temp - 273.15;
    const f = (temp - 273.15) * 9/5 + 32;
    output = `${c.toFixed(2)} °C, ${f.toFixed(2)} °F`;
  }

  resultArea.textContent = `Converted: ${output}`;
}
