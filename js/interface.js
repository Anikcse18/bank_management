function makedeposite() {
  const deposite_blance = document.getElementById("deposite_input");

  if (isNaN(deposite_blance.value)) {
    alert("Invalid Input");
  } else {
    let deposite_ammount =
      document.getElementById("deposite_ammount").innerHTML;

    const total_deposite_ammount =
      parseInt(deposite_blance.value) + parseInt(deposite_ammount);

    document.getElementById("deposite_ammount").innerHTML =
      total_deposite_ammount;

    document.getElementById("total_balance").innerHTML = total_deposite_ammount;
  }
  deposite_blance.value = "";
}
function makewithdraw() {
  const withdraw_input = document.getElementById("withdraw_input");
  if (isNaN(withdraw_input.value)) {
    alert("Invalid Input");
  } else {
    const total_balance = document.getElementById("total_balance").innerHTML;

    const withdraw_blance =
      document.getElementById("withdraw_ammount").innerHTML;

    function totalBlanceCountdown(total_balance, withdraw_input) {
      if (parseInt(total_balance) >= parseInt(withdraw_input.value)) {
        const total_withdraw =
          parseInt(withdraw_input.value) + parseInt(withdraw_blance);
        document.getElementById("withdraw_ammount").innerHTML = total_withdraw;
        document.getElementById("total_balance").innerHTML =
          parseInt(total_balance) - parseInt(withdraw_input.value);
      } else {
        alert("You don't have sufficient money in your Account");
      }
    }
    totalBlanceCountdown(total_balance, withdraw_input);
  }

  withdraw_input.value = "";
}

document.getElementById("btn-deposite").addEventListener("click", makedeposite);

document.getElementById("btn-withdraw").addEventListener("click", makewithdraw);
