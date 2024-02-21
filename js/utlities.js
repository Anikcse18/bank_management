function getInputFieldValuebyId(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputFieldValue;
}

function getOutputValueByID(displayId) {
  const outputField = document.getElementById(displayId);
  const outputFieldValue = parseFloat(outputField.innerHTML);
  return outputFieldValue;
}

//Set Text Element By ID
function setTextElementById(textId, newValue) {
  const textIdField = document.getElementById(textId);
  textIdField.innerHTML = newValue;
}
