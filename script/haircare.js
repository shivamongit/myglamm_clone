import {
    header,
    footer
} from './components/heading.js';
console.log(header)
let headerDiv = document.getElementById("headerDiv");
headerDiv.innerHTML = header();

let footerDiv = document.getElementById("footerDiv");
footerDiv.innerHTML = footer();

let data = JSON.parse(localStorage.getItem("lipstick")) || [{
        img: "https://files.myglamm.com/site-images/800x800/Product-1.jpg",
        name: "MYGLAMM SUPERFOODS ONION & MORINGA SHAMPOO",
        price: "299",
        des: "For Hair Fall Control",
    },
    {

        img: "https://files.myglamm.com/site-images/800x800/Oil-Product.jpg",
        name: "MYGLAMM SUPERFOODS ONION & MORINGA HAIR OIL",
        price: "345",
        des: "For Hair Fall Control",
    },
    {
        img: "https://files.myglamm.com/site-images/800x800/Product-1_2.jpg",
        name: "MYGLAMM SUPERFOODS CONDITIONER",
        price: "299",
        des: "For Hair Fall Control",
    },
    {
        img: "https://files.myglamm.com/site-images/800x800/Serum-Product.jpg",
        name: "MYGLAMM SUPERFOODS ONION & MORINGA SERUM",
        price: "395",
        des: "For Hair Fall Control",
    },
    {
        img: "https://files.myglamm.com/site-images/800x800/Passion-Fruit--Rosemary-Shampoo.jpg",
        name: "MYGLAMM SUPERFOODS PASSION FRUIT 300ML",
        price: "499",
        des: "Nourishing & Cleansing Shampoo ",
    },
    {
        img: "	https://files.myglamm.com/site-images/800x800/SUPERFOODS-Mangosteen-&-Avocado-Hair-Mask.jpg",
        name: "EXOTIC NOURISHMENT",
        price: "1048",
        des: "Give your hair the perfect spa treatment .",
    },


];
// console.log(data);
let mainDiv = document.getElementById("container");
data.forEach(function (product) {
    console.log(product);

    let div = document.createElement("div");
    div.style.border = "1px solid gainsboro";

    let imgDiv = document.createElement("div");
    imgDiv.style.height = "255px";
    imgDiv.style.width = "255px";
    imgDiv.style.margin = "auto";
    imgDiv.style.marginTop = "20px";

    let img = document.createElement("img");
    img.src = product.img;
    img.setAttribute("height", "255px");
    img.setAttribute("width", "255px");

    imgDiv.append(img);

    let name = document.createElement("p");
    name.innerText = product.name;
    name.setAttribute("id", "name");

    let des = document.createElement("p");
    des.innerText = product.des;
    des.setAttribute("id", "des");

    let price = document.createElement("p");
    price.innerText = `₹ ${product.price}`;
    price.setAttribute("id", "price");

    let icon = document.createElement("img");
    icon.src = "https://www.myglamm.com/images/plus-icon.png";
    icon.setAttribute("id", "icon");

    img.addEventListener("click", function () {
        let detail = [];
        let obj = {
            img: product.img,
            name: product.name,
            des: product.des,
            price: product.price,
        };
        detail.push(obj);
        localStorage.setItem("Lipdetail", JSON.stringify(detail));
        window.location.href = "hairProduct.html";
    });

    let clear;
    div.addEventListener("mouseenter", function () {
        clear = setTimeout(function () {
            div.style.boxShadow =
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px";
        }, 350);

        img.setAttribute("height", "270px");
        img.setAttribute("width", "270px");
    });

    div.addEventListener("mouseleave", function () {

        clearTimeout(clear);
        div.style.boxShadow = "none";

        img.setAttribute("height", "255px");
        img.setAttribute("width", "255px");
    });

    div.append(imgDiv, name, des, icon, price);

    mainDiv.appendChild(div);


})