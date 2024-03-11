function validation() {
  const email = document.getElementById("user-email");
  const password = document.getElementById("user-password");

  if (email.value === "pola@bap.com" && password.value === "12345") {
    window.location.href = "./bank_interface.html";
  } else {
    alert("Wrong Email & Password");
  }
}

document.getElementById("btn-submit").addEventListener("click", validation);
