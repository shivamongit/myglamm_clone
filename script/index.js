import {header, footer} from "./components/heading.js";
import {skinCare, sanitizingCare, studio, haircare, collection, lipstic} from "./components/headingHover.js";
console.log(lipstic());

  let heading = document.getElementById("heading");
  heading.innerHTML = header();

 let refer_earn = document.getElementById("refer-earn");
refer_earn.addEventListener("click", ()=>{
  window.open("refer.html")
}) 
  let footerDiv = document.getElementById("footerDiv");
  footerDiv.innerHTML = footer();
  
  let signUpPage = document.getElementById("signUpPage");
  signUpPage.addEventListener("click", ()=>{
    window.location.href = "signup.html";
  })

  let cartPage = document.getElementById("cartPage");
  cartPage.addEventListener("click", ()=>{
    window.location.href = "cart.html";
  })
 
  let makeUp = document.getElementById("makeUp");
  makeUp.addEventListener("click",()=>{
    window.open("makeup.html");
  })
  makeUp.addEventListener('mouseenter', function(){
    let a = document.getElementById("a");
    a.innerHTML = lipstic();

  })
  


  makeUp.addEventListener('mouseleave',function(){
    function tim(){
      let a = document.getElementById("a");
    a.innerHTML = null;
    }
    setTimeout(tim,1000)
  });
  
    


  let hairC = document.getElementById("hairCarePage");
  hairC.addEventListener('mouseenter', function(){
    let b = document.getElementById("b");
    b.innerHTML = haircare();
  })

  // let hairC = document.getElementById("hairCarePage");
  // hairC.addEventListener("click",()=>{
  //   window.open("haircare.html");
  // })

  hairC.addEventListener('mouseleave', function(){
    let b = document.getElementById("b");
    b.innerHTML = null;
  })

  let skinC = document.getElementById("skinCarePage");
  skinC.addEventListener('mouseenter', function(){
    let c = document.getElementById("c");
    c.innerHTML = skinCare();
  })
  skinC.addEventListener('mouseleave', function(){
    let c = document.getElementById("c");
    c.innerHTML = null;
  })

  let sanitizingP = document.getElementById("sanitizingCarePage");
  sanitizingP.addEventListener('mouseenter', function(){
    let d = document.getElementById("d");
    d.innerHTML = sanitizingCare();
  })
  sanitizingP.addEventListener('mouseleave', function(){
    let d = document.getElementById("d");
    d.innerHTML = null;
  })

  let collectionP = document.getElementById("collectionPage");
  collectionP.addEventListener('mouseenter', function(){
    let e = document.getElementById("e");
    e.innerHTML = collection();
  })
  collectionP.addEventListener('mouseleave', function(){
    let e = document.getElementById("e");
    e.innerHTML = null;
  })

  let studioP = document.getElementById("myglammStudio");
  studioP.addEventListener('mouseenter', function(){
    let f = document.getElementById("f");
    f.innerHTML = studio();
  })
  studioP.addEventListener('mouseleave', function(){
    let f = document.getElementById("f");
    f.innerHTML = null;
  })

  let rewards = document.getElementById("rewards");
  rewards.addEventListener('mouseenter', function(){
    let g = document.getElementById("g");
    g.style.display = "inline-block";
    g.style.backgroundColor = "white";
  })
  rewards.addEventListener('mouseleave', function(){
    let g = document.getElementById("g");
    g.style.display = "none";
  })