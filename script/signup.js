function Register() {
    let form = document.getElementById("form");
    let mobile = form.mobile.value;



    if (localStorage.getItem('users') === null) {

        localStorage.setItem("users", JSON.stringify([]));
    }

    // grab and prepare user data

    let user = {
        mobile
    };

    // get array from localstorage

    let arr = JSON.parse(localStorage.getItem("users"));

    // push new users to arr

    arr.push(user); //added a new user
    console.log(arr)
    localStorage.setItem("users", JSON.stringify(arr));

    window.location.href = "login.html"



}