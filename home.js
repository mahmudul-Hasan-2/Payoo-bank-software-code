let updatedBalance = 0;
document.getElementById('logout-btn').addEventListener('click', function () {
    window.location.assign("index.html");
});
document.getElementById('addMoneySection-btn').addEventListener('click', function () {
    let bankInput = getInput('bank-input');
    if (bankInput === "Select Bank") {
        alert("Select a Bank First");
        return;
    }
    let numberInput = getInput('number-input');
    if (numberInput.length !== 11) {
        alert('Invalid Number');
        return;
    }
    let amountInput = getInput('amount-input');
    updatedBalance = getBalance() + Number(amountInput);
    setBalance().innerText = updatedBalance;
    let pinInput = getInput('pin-input');
    if (pinInput === "1234" && pinInput.length === 4) {
        alert(`Your Balance added in ${bankInput} at ${new Date}`)
    } else {
        alert('Invalid Pin');
        return;
    }
});

document.getElementById('cashoutSection-btn').addEventListener('click', function () {
    let cashoutNumberInput = getInput('cashout-number-input');
    if (cashoutNumberInput === "") {
        alert('Write a Number first');
        return;
    }
    if (cashoutNumberInput.length !== 11) {
        alert('Invalid Number');
        return;
    }
    let cashoutAmountInput = getInput('cashout-amount-input');
    updatedBalance = getBalance() - Number(cashoutAmountInput);
    if (updatedBalance < 0) {
        alert("You've not enough to cashout");
        return;
    }
    setBalance().innerText = updatedBalance;
    let cashoutPinInput = getInput('cashout-pin-input');
    if (cashoutPinInput === "1234" && cashoutPinInput.length === 4) {
        alert(`Cashout Successful at ${new Date}`);
    } else {
        alert("Cashout Failed");
    }
});

document.getElementById('transferSection-btn').addEventListener('click', function () {
    let transferNumberInput = getInput('transfer-number-input');
    if (transferNumberInput === "") {
        alert("Write a number First");
        return;
    }
    if (transferNumberInput.length !== 11) {
        alert("Invalid Number");
    }
    let transferAmountInput = getInput('transfer-amount-input');
    updatedBalance = getBalance() - Number(transferAmountInput);
    if (updatedBalance < 0) {
        alert("You've not enough to cashout");
        return;
    }
    setBalance().innerText = updatedBalance;
    let transferPinInput = getInput('transfer-pin-input');
    if (transferPinInput === "1234" && transferPinInput.length === 4) {
        alert(`Money Transfer Successful at ${new Date}`);
    } else {
        alert("Transfer Failed");
        return;
    }
});

document.getElementById('coupon-btn').addEventListener('click', function () {
    let couponCodeInput = getInput('coupon-code-input');
    if (couponCodeInput === "") {
        alert('Write something first');
        return;
    }
    if (couponCodeInput === "Get5%Bon") {
        alert("Congratulations, You've gotten the 5% of bonus!");
        updatedBalance = getBalance() + (getBalance() * 5) / 100;
        setBalance().innerText = updatedBalance;
    } else {
        alert('Invalid Coupon');
        return;
    }
});

document.getElementById('payBill-btn').addEventListener('click', function () {
    let payBank = getInput('pay-bank');
    if (payBank === "Select Bank") {
        alert('Select A bank First');
        return;
    }
    let payTypeBill = getInput('pay-type-bill');
    if (payTypeBill === "Select Type") {
        alert('Select Type First');
        return;
    }
    let payNumberInput = getInput('pay-number-input');
    if (payNumberInput === "") {
        alert('Write a Number First');
        return;
    }
    if (payNumberInput.length !== 11) {
        alert('Invalid Number');
        return;
    }
    let payAmountInput = getInput('pay-amount-input');
    updatedBalance = getBalance() - Number(payAmountInput);
    if (updatedBalance < 0) {
        alert("You've not enough money to pay");
    }
    setBalance().innerText = updatedBalance;
    let payPinInput = getInput('pay-pin-input');
    if (payPinInput === "1234" && payPinInput.length === 4) {
        alert(`${payTypeBill} Bill Successfully paid through ${payBank} at ${new Date}`);
    } else {
        alert(`Bill paid Failed`);
        return;
    }
});