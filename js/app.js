function calculateFootprint() {
  // Get the input values
  const electricityUsage = parseFloat(document.getElementById('electricity').value);
  const carTravel = parseFloat(document.getElementById('carTravel').value);
  const airTravel = parseFloat(document.getElementById('airTravel').value);

  // Constants for carbon footprint calculation 

  const electrictyFactor = 0.92; //kg C02 per kWh
  const carFactor = 0.411; // kg C02 per mile
  const airFactor = 0.217; // kg C02 per mile

  // Calculate the carbon footprint
  const electricityFootprint = electricityUsage * electrictyFactor * 12; // annual usage
  const carFootprint = carTravel * carFactor * 12; // annual travel
  const airFootprint = airTravel * airFactor;

  const totalFootPrint = electricityFootprint + carFootprint + airFootprint;
  console.log(totalFootPrint);

  // Display the result

  document.getElementById('result').innerHTML = `Your estimated annual carbon footprint is approximately <span class="result-number">${totalFootPrint.toFixed(2)} kg C02</span>. The global annual average per person is 4,800 kg.`; 
}