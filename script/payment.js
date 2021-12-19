let card = document.getElementById("card");
let name = document.getElementById("name");
let validity = document.getElementById("validity");
var paymentbtm = document.getElementById("pay");
paymentbtm.onclick = function () {
  if (
    card.value != null &&
    card.value != "" &&
    name.value != null &&
    name.value != "" &&
    validity.value != null &&
    validity.value != ""
  )
    window.location.href = "order.html";
};

let total01 = JSON.parse(localStorage.getItem("totalAmount"));

let stotal = total01;
console.log(stotal);

var total = document.getElementById("total");
total.innerHTML = null;
var srng = stotal;
total.append(srng);