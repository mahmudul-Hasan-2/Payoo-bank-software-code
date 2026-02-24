document.getElementById('login-btn').addEventListener('click', function () {
    let numberInput = getInput('number-input');
    if (numberInput !== "01748121881") {
        alert('Invalid Number');
        return;
    }
    let pinInput = getInput('pin-input');
    if (pinInput !== "1234") {
        alert('Login Failed');
        return;
    } else {
        alert('Login Successful');
        window.location.assign("home.html");
    }
});