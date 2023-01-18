document.getElementById("convert-button").addEventListener("click", convert);
document.getElementById("copy-button").addEventListener("click", function() {
  copyToClipboard();
  document.getElementById("copy-button").classList.add("copied");
});



function convert() {
  // Get the pixel and font size values from the form
  var pixels = document.getElementById('pixels').value;
  var fontSize = document.getElementById('font-size').value;
  
  // Check if both fields have a value
  if (pixels && fontSize) {
    // Convert the pixels to ems
    var ems = pixels / fontSize;
    
    // Round the ems value to 2 decimal places and update the result element
    document.getElementById('result').innerHTML = ems.toFixed(2) + 'em';
  } else {
    // Display an error message if one of the fields is empty
    document.getElementById('result').innerHTML = 'Error: Please enter a value for both fields.';
  }
}

async function copyToClipboard() {
  // Get the result element
  var result = document.getElementById('result').innerHTML;

  try {
    await navigator.clipboard.writeText(result);
  } catch (err) {
    console.error('Failed to copy. Please try again.');
  }
}

