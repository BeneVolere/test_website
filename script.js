function calculateFE() {
  const F = 96485; // Faraday's constant
  const Q = parseFloat(document.getElementById("charge").value);
  const n = parseFloat(document.getElementById("ammonia").value);

  if (isNaN(Q) || isNaN(n) || Q <= 0 || n < 0) {
    document.getElementById("result").innerText = "Please enter valid values.";
    return;
  }

  const efficiency = (3 * F * n / Q) * 100;
  document.getElementById("result").innerText = 
    `Faradaic Efficiency: ${efficiency.toFixed(2)}%`;
}
