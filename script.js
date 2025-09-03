const toothpastes = [
  {
    name: "Colgate Total",
    fluoride: "1450 ppm",
    whitening: "Moderate",
    sensitivityRelief: "No",
    cavityProtection: "Yes",
    tartarProtection: "Yes",
    antibacterial: "Yes",
    breathProtection: "Yes",
  
    priceIreland: "€3.99",
    costPer100ml: "€2.67",
  },
  {
    name: "Sensodyne Pronamel",
    fluoride: "1450 ppm",
    whitening: "Yes",
    sensitivityRelief: "Yes",
    cavityProtection: "Yes",
    tartarProtection: "Yes",
    antibacterial: "No",
    breathProtection: "Yes",
   
    priceIreland: "€5.99",
    costPer100ml: "€3.00",
  },
  {
    name: "Sensodyne Rapid Relief",
    fluoride: "1450 ppm",
    whitening: "No",
    sensitivityRelief: "Yes",
    cavityProtection: "Yes",
    tartarProtection: "No",
    antibacterial: "No",
    breathProtection: "Yes",
  
    priceIreland: "€5.99",
    costPer100ml: "€3.00",
  },
  {
    name: "Oral-B Pro-Expert",
    fluoride: "1450 ppm",
    whitening: "Moderate",
    sensitivityRelief: "No",
    cavityProtection: "Yes",
    tartarProtection: "Yes",
    antibacterial: "Yes",
    breathProtection: "Yes",
    
    priceIreland: "€4.49",
    costPer100ml: "€2.99",
  },
  {
    name: "Parodontax Original",
    fluoride: "1450 ppm",
    whitening: "No",
    sensitivityRelief: "No",
    cavityProtection: "Yes",
    tartarProtection: "Yes",
    antibacterial: "Yes",
    breathProtection: "Yes",
    
    priceIreland: "€5.50",
    costPer100ml: "€3.33",
  },
  {
    name: "Corsodyl Daily",
    fluoride: "1450 ppm",
    whitening: "No",
    sensitivityRelief: "No",
    cavityProtection: "Yes",
    tartarProtection: "Yes",
    antibacterial: "Yes",
    breathProtection: "Yes",
    
    priceIreland: "€6.49",
    costPer100ml: "€3.62",
  },
  {
    name: "Elmex Sensitive Professional",
    fluoride: "1450 ppm",
    whitening: "No",
    sensitivityRelief: "Yes",
    cavityProtection: "Yes",
    tartarProtection: "No",
    antibacterial: "No",
    breathProtection: "Yes",
    
    priceIreland: "€5.99",
    costPer100ml: "€3.29",
  },
  {
    name: "Aquafresh Triple Protection",
    fluoride: "1450 ppm",
    whitening: "Yes",
    sensitivityRelief: "No",
    cavityProtection: "Yes",
    tartarProtection: "Yes",
    antibacterial: "No",
    breathProtection: "Yes",
    
    priceIreland: "€3.50",
    costPer100ml: "€2.33",
  },
  {
    name: "BioMin F",
    fluoride: "530 ppm (slow release)",
    whitening: "No",
    sensitivityRelief: "Yes",
    cavityProtection: "Yes",
    tartarProtection: "No",
    antibacterial: "No",
    breathProtection: "Yes",
    
    priceIreland: "€11.99",
    costPer100ml: "€6.00",
  },
  {
    name: "Colgate Max White",
    fluoride: "1450 ppm",
    whitening: "Yes",
    sensitivityRelief: "No",
    cavityProtection: "Yes",
    tartarProtection: "Yes",
    antibacterial: "No",
    breathProtection: "Yes",
    
    priceIreland: "€4.99",
    costPer100ml: "€2.95",
  },
  {
    name: "Kingfisher Fluoride Free",
    fluoride: "None",
    whitening: "Yes",
    sensitivityRelief: "No",
    cavityProtection: "No",
    tartarProtection: "No",
    antibacterial: "No",
    breathProtection: "Yes",
    
    priceIreland: "€3.99",
    costPer100ml: "€2.40",
  },
  {
    name: "Ecodenta Charcoal",
    fluoride: "1000 ppm",
    whitening: "Yes",
    sensitivityRelief: "No",
    cavityProtection: "Yes",
    tartarProtection: "Yes",
    antibacterial: "Yes",
    breathProtection: "Yes",
    
    priceIreland: "€4.99",
    costPer100ml: "€3.50",
  },
  {
    name: "Zendium Gentle Whitening",
    fluoride: "1450 ppm",
    whitening: "Yes",
    sensitivityRelief: "Yes",
    cavityProtection: "Yes",
    tartarProtection: "No",
    antibacterial: "Yes",
    breathProtection: "Yes",
    
    priceIreland: "€6.99",
    costPer100ml: "€4.99",
  },
  {
    name: "Oranurse Unflavoured",
    fluoride: "1450 ppm",
    whitening: "No",
    sensitivityRelief: "Yes",
    cavityProtection: "Yes",
    tartarProtection: "Yes",
    antibacterial: "No",
    breathProtection: "Yes",
    
    priceIreland: "€7.99",
    costPer100ml: "€4.50",
  },
  {
    name: "Marvis Classic Strong Mint",
    fluoride: "1000 ppm",
    whitening: "Moderate",
    sensitivityRelief: "No",
    cavityProtection: "Yes",
    tartarProtection: "No",
    antibacterial: "No",
    breathProtection: "Yes",
    
    priceIreland: "€8.99",
    costPer100ml: "€5.99",
  }
];

// Function to populate the dropdown menu
function populateDropdown() {
  const selectElement = document.getElementById("toothpasteSelect");

  toothpastes.forEach(toothpaste => {
    const option = document.createElement("option");
    option.value = toothpaste.name;
    option.textContent = toothpaste.name;
    selectElement.appendChild(option);
  });
}

// Function to display selected toothpaste details
function showToothpasteDetails() {
  const selectElement = document.getElementById("toothpasteSelect");
  const selectedToothpasteName = selectElement.value;
  const toothpaste = toothpastes.find(tp => tp.name === selectedToothpasteName);

  if (toothpaste) {
    document.getElementById("tpName").textContent = toothpaste.name;
    document.getElementById("tpFluoride").textContent = toothpaste.fluoride;
    document.getElementById("tpWhitening").textContent = toothpaste.whitening;
    document.getElementById("tpSensitivityRelief").textContent = toothpaste.sensitivityRelief;
    document.getElementById("tpCavityProtection").textContent = toothpaste.cavityProtection;
    document.getElementById("tpTartarProtection").textContent = toothpaste.tartarProtection;
    document.getElementById("tpAntibacterial").textContent = toothpaste.antibacterial;
    document.getElementById("tpBreathProtection").textContent = toothpaste.breathProtection;
    document.getElementById("tpAgeAppropriateness").textContent = toothpaste.ageAppropriateness;
    document.getElementById("tpDentistRecommended").textContent = toothpaste.dentistRecommended;
    document.getElementById("tpPrice").textContent = toothpaste.priceIreland;
    document.getElementById("tpCostPer100ml").textContent = toothpaste.costPer100ml;

    document.getElementById("toothpasteDetails").classList.remove("hidden");
  } else {
    document.getElementById("toothpasteDetails").classList.add("hidden");
  }
}

// Call the function to populate the dropdown on page load
window.onload = populateDropdown;