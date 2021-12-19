function check() {

    let inp = document.getElementById("input");

    let code = inp.promo.value;

    let mon = document.getElementById("");

    if (code === "masai30") {
        mon.textContent = Math.floor(mon.textContent * 0.7);
    } else {
        alert("Please Enter Valid Promo Code")
    }
    inp.promo.value = "";
}

document.getElementById("signIn").addEventListener("mouseenter", function () {
    document.getElementById("signIn").style.backgroundColor = "black";
    document.getElementById("signIn").style.color = "white";
});

document.getElementById("signIn").addEventListener("mouseleave", function () {
    document.getElementById("signIn").style.backgroundColor = "white";
    document.getElementById("signIn").style.color = "black";
})

let cartProducts = JSON.parse(localStorage.getItem("MyglammCart"));

let tbody = document.querySelector("tbody");

cartProducts.forEach(function (item) {

    let tr1 = document.createElement("tr");
    //    let hr = document.createElement("hr");
    //    hr.style.width="620px";

    let td1 = document.createElement("td");
    // td1.style.border="1px solid red";

    let td2 = document.createElement("td");
    // td2.style.border="1px solid red";
    td2.style.width = "410px";
    td2.style.paddingLeft = "10px";
    td2.style.fontSize = "15px";
    td2.style.fontWeight = "500";
    td2.style.fontFamily = "sans-serif";

    let td3 = document.createElement("td");
    // td3.style.border="1px solid red";
    td3.style.width = "50px";
    td3.style.textAlign = "center";
    td3.style.fontSize = "15px";
    td3.style.fontWeight = "500";
    td3.style.fontFamily = "sans-serif";

    let td4 = document.createElement("td");
    // td4.style.border="1px solid red";
    td4.style.width = "100px";
    td4.style.textAlign = "center";
    td4.style.fontSize = "15px";
    td4.style.fontWeight = "500";
    td4.style.fontFamily = "sans-serif";

    let img = document.createElement("img");
    img.src = item.img;
    img.setAttribute("height", "73px");
    img.setAttribute("width", "73px");

    let name = document.createElement("p");
    name.innerText = item.name;

    let qty = document.createElement("p");
    qty.innerText = item.count;

    let price = document.createElement("p");
    price.innerText = `₹ ${item.price}`;

    td1.append(img);
    td2.append(name);
    td3.append(qty);
    td4.append(price);

    tr1.append(td1, td2, td3, td4);

    tbody.append(tr1);

})


document.getElementById("gtotal").innerText = `₹ ${JSON.parse(localStorage.getItem("GrandTotal"))}.00`;
document.getElementById("amount").innerText = `₹ ${JSON.parse(localStorage.getItem("GrandTotal"))}.00`;
let x = JSON.parse(localStorage.getItem("GrandTotal"));
let y = x * 0.3;

function check() {

    if (document.getElementById("promo-code").value == "glamm30") {
        document.getElementById("percentDiscount").innerText = `₹ ${y}`;

        let z = document.getElementById("amount").innerText = `₹ ${x-y}`;
        localStorage.setItem("totalAmount", JSON.stringify(z));
    }
}