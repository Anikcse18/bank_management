document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawUserInput = getInputFieldValuebyId("withdraw_input");
  const withdrawBox = getOutputValueByID("withdraw_ammount");

  if (!isNaN(withdrawUserInput) && withdrawUserInput >= withdrawBox) {
    const withdrawTotal = withdrawUserInput + withdrawBox;
    setTextElementById("withdraw_ammount", withdrawTotal);
    const totalBlance = getOutputValueByID("total_balance");
    const totalBlanceUpdate = totalBlance - withdrawUserInput;
    setTextElementById("total_balance", totalBlanceUpdate);
  } else {
    alert("Provide correct number");
  }
});
