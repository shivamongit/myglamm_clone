let cartData = JSON.parse(localStorage.getItem("MyglammCart"));
console.log(cartData);

displayItems(cartData);

function displayItems(cartData) {

  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  cartData.forEach(function (item, index) {

    console.log(item);

    // localStorage.setItem("Qtycount",JSON.stringify(1));
    // let count = JSON.parse(localStorage.getItem("Qtycount"));


    let tr1 = document.createElement("tr");
    tr1.setAttribute("id", "row1");

    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = item.img;
    img.setAttribute("height", "120px");
    img.setAttribute("width", "100px");
    imgDiv.append(img);

    let td1 = document.createElement("td");
    td1.append(imgDiv);
    // td1.style.border="1px solid red";
    td1.style.width = "120px";

    let td2 = document.createElement("td");
    td2.innerText = item.name;
    // td2.style.border="1px solid red";
    td2.style.width = "400px";
    td2.style.fontFamily = "sans-serif";
    td2.style.fontWeight = "500";
    td2.style.fontSize = "16px";
    // td2.style.marginLeft="30px";

    let td3 = document.createElement("td");
    td3.innerText = `₹ ${item.price}`;
    // td3.style.border="1px solid red";
    td3.style.width = "100px";
    td3.style.textAlign = "center";
    td3.style.fontFamily = "sans-serif";
    td3.style.fontWeight = "400";
    td3.style.fontSize = "18px";

    let div1 = document.createElement("div");
    div1.style.marginTop = "6px";
    let up = document.createElement("div");
    up.innerHTML = `<i class="fas fa-caret-up"></i>`;

    up.setAttribute("height", "12px");
    up.setAttribute("width", "12px");
    up.setAttribute("id", "up");
    up.style.cursor = "pointer";



    div1.append(up);

    let div2 = document.createElement("div");
    div2.style.marginTop = "10px";
    let down = document.createElement("img");
    down.src = "https://cdn-icons-png.flaticon.com/128/57/57055.png";

    down.setAttribute("height", "12px");
    down.setAttribute("width", "12px")
    down.setAttribute("id", "down");
    down.style.cursor = "pointer";

    div2.append(down);

    let arrowDiv = document.createElement("div");
    arrowDiv.style.marginLeft = "25px";
    arrowDiv.append(div1, div2);

    let qty = document.createElement("div");
    qty.setAttribute("id", "num")
    qty.style.marginLeft = "21px";
    qty.style.marginTop = "18px";
    qty.innerText = item.count;

    let qtyDiv = document.createElement("div");
    qtyDiv.style.marginLeft = "60px";
    qtyDiv.style.display = "flex";
    qtyDiv.style.backgroundColor = "#f7f7f7";
    qtyDiv.style.height = "60px";
    qtyDiv.style.width = "70px";
    qtyDiv.append(qty, arrowDiv);

    let td4 = document.createElement("td");
    td4.append(qtyDiv);
    // td4.style.border="1px solid red";

    let price2 = document.createElement("div");
    price2.style.marginLeft = "70px";
    price2.style.marginRight = "50px";
    price2.innerText = `₹ ${item.price}`;

    let td5 = document.createElement("td");
    td5.append(price2);
    // td5.style.border="1px solid red";
    td5.style.textAlign = "center";
    td5.style.fontFamily = "sans-serif";
    td5.style.fontWeight = "400";
    td5.style.fontSize = "18px";

    let icon = document.createElement("img");
    icon.src =
      "https://cdn-icons.flaticon.com/png/128/2723/premium/2723639.png?token=exp=1639664527~hmac=e6dcd1accafaf012de19b8c214f89a87";
    icon.setAttribute("height", "25px");
    icon.setAttribute("width", "25px")
    // let cross = document.createElement("div");
    // cross.style.marginLeft="20px";
    // cross.style.border="1px solid red";
    // cross.style.width="19px";
    // cross.height="10px";
    // cross.append(icon);

    let td6 = document.createElement("td");
    // td6.style.border="1px solid red";
    td6.style.width = "80px";
    // td6.append(cross);
    td6.append(icon);
    td6.addEventListener("click", function (event, index) {
      event.target.parentNode.remove();
      cartData.splice(index, 1);
      // let price = cartData.index;
      // console.log(event.target.parentNode.td3);
      // let removedPrice = item.price;

      localStorage.setItem("MyglammCart", JSON.stringify(cartData));

      document.getElementById("total").innerText = "";
      let t = document.getElementById("total");
      let total = document.createElement("p");
      let Gtotal = cartData.reduce(function (ac, cv) {
        return ac + Number(cv.price);
      }, 0);

      total.innerText = `GRAND TOTAL ₹ ${Gtotal}`;
      total.style.fontSize = "18px";
      total.style.fontWeight = "600";
      total.style.fontFamily = "sans-serif";

      t.append(total);


      let BagTotal = document.getElementById("BagTotal");
      BagTotal.textContent = `(${JSON.parse(localStorage.getItem("MyglammCart")).length})`;
    })



    up.addEventListener("click", function () {

      let x = document.getElementById("num").innerText;
      qty.innerHTML = "";
      let y = +x;
      // console.log(y);
      let c = item.count;
      c++;
      item.count = c;
      if (y == 1) {

        let originalPrice = item.price;
        localStorage.setItem("OriginalPrice", JSON.stringify(originalPrice));
      }
      y++;

      qty.innerText = y;


      let p1 = item.price;
      p1 = +p1;
      // console.log(p1);
      // console.log(typeof(p1));
      let lp = JSON.parse(localStorage.getItem("OriginalPrice"));
      console.log(lp);
      console.log(typeof (lp));
      lp = +lp;
      console.log(lp);
      console.log(typeof (lp));
      changePrice = p1 + lp;
      td3.innerText = `₹ ${changePrice}`;
      price2.innerText = `₹ ${changePrice}`;
      item.price = changePrice;
      localStorage.setItem("MyglammCart", JSON.stringify(cartData));

      document.getElementById("total").innerText = "";
      let t = document.getElementById("total");
      let total = document.createElement("p");
      let Gtotal = cartData.reduce(function (ac, cv) {
        return ac + Number(cv.price);
      }, 0);

      total.innerText = `GRAND TOTAL ₹ ${Gtotal}`;
      total.style.fontSize = "18px";
      total.style.fontWeight = "600";
      total.style.fontFamily = "sans-serif";

      t.append(total);

    });


    down.addEventListener("click", function () {
      let p = document.getElementById("num").innerText;

      if (p != 1) {

        qty.innerHTML = "";
        let q = Number(p);

        let c = item.count;
        c--;
        item.count = c;

        q = q - 1;
        qty.innerText = q;


        let p2 = item.price;
        p2 = +p2;
        // console.log(p2);
        // console.log(typeof p2);
        let lp1 = JSON.parse(localStorage.getItem("OriginalPrice"));
        lp1 = +lp1;
        changePrice = p2 - lp1;
        td3.innerText = `₹ ${changePrice}`;
        price2.innerText = `₹ ${changePrice}`;
        item.price = changePrice;
        localStorage.setItem("MyglammCart", JSON.stringify(cartData));

      }

      document.getElementById("total").innerText = "";
      let t = document.getElementById("total");
      let total = document.createElement("p");
      let Gtotal = cartData.reduce(function (ac, cv) {
        return ac + Number(cv.price);
      }, 0);

      total.innerText = `GRAND TOTAL ₹ ${Gtotal}`;
      total.style.fontSize = "18px";
      total.style.fontWeight = "600";
      total.style.fontFamily = "sans-serif";

      t.append(total);

    });


    let BagTotal = document.getElementById("BagTotal");
    BagTotal.textContent = `(${JSON.parse(localStorage.getItem("MyglammCart")).length})`;

    document.getElementById("total").innerText = "";
    let t = document.getElementById("total");
    let total = document.createElement("p");
    let Gtotal = cartData.reduce(function (ac, cv) {
      return ac + Number(cv.price);
    }, 0);

    total.innerText = `GRAND TOTAL ₹ ${Gtotal}`;
    if (JSON.parse(localStorage.getItem("MyglammCart")).length == 0) {
      total.innerText = `GRAND TOTAL ₹ 0`;
    }
    total.style.fontSize = "18px";
    total.style.fontWeight = "600";
    total.style.fontFamily = "sans-serif";

    t.append(total);




    tbody.append(tr1);
    tr1.append(td1, td2, td3, td4, td5, td6);


  });

}


document.getElementById("goToCheckout").addEventListener("click", function () {
  // let amount = document.getElementById("total").innerText;
  let Gtotal = cartData.reduce(function (ac, cv) {
    return ac + Number(cv.price);
  }, 0);
  // localStorage.setItem("GrandTotal",JSON.stringify(amount));
  localStorage.setItem("GrandTotal", JSON.stringify(Gtotal));
  window.location.href = "checkout.html";

})