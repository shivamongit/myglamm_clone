import{header, footer} from "./components/heading.js";
    let a = document.getElementById("head");
    a.innerHTML = header();
 let foot = document.getElementById("foot");
foot.innerHTML = footer();



 let data = JSON.parse(localStorage.getItem("makeup")) ||  [
     {
           img: "https://files.myglamm.com/site-images/800x800/OTP-2.jpg",
        name: "MYGLAMM LIT LIQUID MATTE LIPSTICK",
        price: "395",
        des: "Moringa Oil Enriched Matte Lipstick",
    },
    {
      
        img: "https://files.myglamm.com/site-images/800x800/IFLY---PH_1.jpg",
        name: "MYGLAMM LIT VELVET MATTE LIQUID LIPSTICK - I.F.L.Y",
        price: "395",
        des: "Hydrating, Velvet Matte Liquid Lipcolour",
    },
    {
         img: "	https://files.myglamm.com/site-images/800x800/1627823083481-bite-me.jpeg",
         name: "MYGLAMM LIT - PH LIP BALM - BITE ME",
         price: "345",
         des: "Creamy, Hydrating Formula with a Luminous Effect",
    },
    {
           img: "https://files.myglamm.com/site-images/800x800/1639134007061-Twist-it-mascara.jpeg",
        name: "TWIST IT MASCARA",
        price: "645",
        des: "Volumising and Curling Mascara",
    },
    {
        img: "https://files.myglamm.com/site-images/800x800/open-product-with-side-bar_4.jpg",
        name: "MYGLAMM LIT LIQUID MATTE LIPSTICK",
        price: "69",
        des: "hello",
    },
    {
         img: "https://files.myglamm.com/site-images/800x800/OTP-2.jpg",
         name: "POPXO MAKEUP - SEND NOODS - 4 EYESHADOW KIT",
         price: "299",
         des: "Eyeshadow palette with 2 shimmer and 2 matte shades",
    },
    {
         img: "https://files.myglamm.com/site-images/800x800/1627823029783-Umber-Open-Swatch.jpeg",
         name: "MYGLAMM SUPERFOODS KAJAL - UMBER",
         price: "395",
         des: "Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts",
    },
    {
           img: "https://files.myglamm.com/site-images/800x800/cosmopolitan-5_5.jpeg",
        name: "PERFECT CURVES MATTE LIP CRAYON - COSMOPOLITAN",
        price: "695",
        des: "Moisturising Matte Lipstick",
    },
   
];
// console.log(data);
let mainDiv = document.getElementById("container");

data.forEach(function (product){

// console.log(product);

let div = document.createElement("div");
div.style.border="1px solid gainsboro";

let imgDiv = document.createElement("div");
imgDiv.style.height="255px";
imgDiv.style.width="255px";
imgDiv.style.margin="auto";
imgDiv.style.marginTop="20px";

let img = document.createElement("img");
img.src = product.img;
img.setAttribute("height","255px");
img.setAttribute("width","255px");

imgDiv.append(img);

let name = document.createElement("p");
name.innerText=product.name;
name.setAttribute("id","name");

let des = document.createElement("p");
des.innerText = product.des;
des.setAttribute("id","des");

let price = document.createElement("p");
price.innerText = `₹ ${product.price}`;
price.setAttribute("id","price");

let icon = document.createElement("img");
icon.src="https://www.myglamm.com/images/plus-icon.png";
icon.setAttribute("id","icon");

img.addEventListener("click",function(){
    let detail = [];
    let obj = {
        img : product.img,
        name : product.name,
        des : product.des,
        price : product.price,
    };
    detail.push(obj);
    localStorage.setItem("MakeupDetail",JSON.stringify(detail));
    window.location.href="makeupProduct.html";
});

let clear;
div.addEventListener("mouseenter",function() {
   clear = setTimeout(function() {
        div.style.boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px";
    },350);
   
    img.setAttribute("height","277px");
    img.setAttribute("width","273px");
});

div.addEventListener("mouseleave",function() {

    clearTimeout(clear);
    div.style.boxShadow="none";

    img.setAttribute("height","255px");
    img.setAttribute("width","255px");
});

div.append(imgDiv,name,des,icon,price);

mainDiv.appendChild(div);

});