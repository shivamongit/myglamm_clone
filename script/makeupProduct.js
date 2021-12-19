let data = JSON.parse(localStorage.getItem("MakeupDetail"));
    console.log(data);
    let imgDiv = document.getElementById("img");

    let Name = document.getElementById("name");
    let Lit = document.querySelector(".lit");
    let Price = document.getElementById("price");

    data.forEach(function (detail) {
        let img = document.createElement("img");
        img.src = detail.img;
        img.setAttribute("height", "361px");
        img.setAttribute("width", "341px");

        imgDiv.append(img);

        let nm = document.createElement("p");
        nm.innerText = `MYGLAMM ${detail.name} - LOVEBOMB`;


        let lt = document.createElement("p");
        lt.innerText = detail.des;

        let price = document.createElement("p");
        price.innerText = `₹ ${detail.price}`;

        Name.append(nm);
        Lit.append(lt);
        Price.append(price);

    })


    let arr = ["https://files.myglamm.com/site-images/200x200/02-lovebomb-2.jpeg",
        "https://i.ytimg.com/vi/04EALbdV8cI/hqdefault.jpg",
        "https://files.myglamm.com/site-images/200x200/Lit-liquid-matte-lipstick-PDP-image_9.jpg",
        "https://files.myglamm.com/site-images/200x200/pinks-14.jpeg",
        "https://files.myglamm.com/site-images/200x200/02-lovebomb-2-1.jpeg",
        "https://files.myglamm.com/site-images/200x200/02-lovebomb-1-1.jpeg",
        "https://files.myglamm.com/site-images/200x200/lit-liquid-matte-group-flatlay-28.jpeg",
        "https://files.myglamm.com/site-images/200x200/vegan-203.jpeg"
    ];

    document.getElementById("display");

    document.getElementById("img1").addEventListener("mouseenter", function () {
        document.getElementById("img1").style.border = "5px solid black";
    });

    document.getElementById("img2").addEventListener("mouseenter", function () {
        document.getElementById("img2").style.border = "5px solid black";
    });

    document.getElementById("img1").addEventListener("mouseleave", function () {

        document.getElementById("img1").style.border = "none";
    });

    document.getElementById("img2").addEventListener("mouseleave", function () {

        document.getElementById("img2").style.border = "none";
    });


    document.querySelector(".bag").addEventListener("click", function () {
        pdata = JSON.parse(localStorage.getItem("MyglammCart")) || [];
        data[0].count = 1;
        pdata.push(data[0]);
        localStorage.setItem("MyglammCart", JSON.stringify(pdata));
        window.location.href = "cart.html";
    })