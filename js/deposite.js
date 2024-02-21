document.getElementById("btn-deposite").addEventListener("click", function () {
  // deposite update
  const depositeUserInput = getInputFieldValuebyId("deposite_input");
  const depositeBox = getOutputValueByID("deposite_ammount");

  if (isNaN(depositeUserInput) || depositeUserInput < 0) {
    alert("Invalid Input");
  } else {
    const depositeTotal = depositeUserInput + depositeBox;
    setTextElementById("deposite_ammount", depositeTotal);
    //Blance Update
    const blanceBox = getOutputValueByID("total_balance");
    const totalBlance = blanceBox + depositeUserInput;
    setTextElementById("total_balance", totalBlance);
  }
});
