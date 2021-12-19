function confirm() {
    window.location.href = "../index.html";
}


var message = document.getElementById("message");
message.innerHTML = "...";
var pro = document.getElementById("pro");
pro.innerHTML = "Processing Order...";

function showmessage() {
    pro.innerHTML = null;
    message.innerHTML = null;
    message.innerHTML = `<div class="card">
    <div style="border-radius:200px; height:200px; width:200px; background: #eeeaee; margin:0 auto;">
        <i class="checkmark">✓</i>
    </div>
    <h1>Order Successful</h1>
    <p>Your Order has been Successful<br />Check your email for details.</p>
    <button><a class="b" href="index.html">Go to Homepage</a></button>
</div>
        
`;
}


setInterval(function () {

    showmessage();

}, 3000);