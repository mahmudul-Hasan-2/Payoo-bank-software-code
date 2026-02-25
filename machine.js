function getInput(id) {
    let input = document.getElementById(id);
    let value = input.value;
    return value;
}

function getBalance() {
    let balance = document.getElementById('balance');
    let textOfBalance = balance.innerText;
    return Number(textOfBalance);
}

function setBalance() {
    let bal = document.getElementById('balance');
    return bal;
}

function showOnly(id) {
    let addMoneySection = document.getElementById('addMoneySection');
    let cashoutSection = document.getElementById('cashoutSection');
    let transferMoneySection = document.getElementById('transferMoneySection');
    let getBonusSection = document.getElementById('getBonusSection');
    let payBillSection = document.getElementById('payBillSection');
    let transactionsSection = document.getElementById('transactionsSection');
    let history = document.getElementById('history');
    addMoneySection.classList.add('hidden');
    cashoutSection.classList.add('hidden');
    transferMoneySection.classList.add('hidden');
    getBonusSection.classList.add('hidden');
    payBillSection.classList.add('hidden');
    transactionsSection.classList.add('hidden');
    history.classList.remove('hidden');

    let select = document.getElementById(id);
    if (select.classList.contains('hidden')) {
        select.classList.remove('hidden');
        history.classList.add('hidden');
    } else {
        select.classList.add('hidden');
        history.classList.remove('hidden');
    }
}

function changeBg(id) {
    let selected = document.getElementById(`${id}`);
}