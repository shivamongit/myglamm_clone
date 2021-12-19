document.querySelector("button").addEventListener("click", addData);
let data = JSON.parse(localStorage.getItem("makeup")) || [];

function addData() {
  let iMg = document.getElementById("img").value;
  let nAme1 = document.getElementById("name1").value;
  let nAme2 = document.getElementById("name2").value;
  let pRice = document.getElementById("price").value;

  let obj = {
    img: iMg,
    name1: nAme1,
    name2: nAme2,
    price: pRice,
  };

  data.push(obj);
  localStorage.setItem("makeup", JSON.stringify(data));

  document.getElementById("img").value = "";
  document.getElementById("name1").value = "";
  document.getElementById("name2").value = "";
  document.getElementById("price").value = "";
}