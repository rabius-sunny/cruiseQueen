function handleTicketChange(ticket, isIncrease) {
    let ticketInput = document.getElementById(ticket + '-count');
    let ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease) {
        ticketNewCount = ticketCount + 1;
    } else if (!isIncrease && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;

    let ticketTotal = 0;
    if (ticket == 'firstClass') {
        ticketTotal = ticketNewCount * 150
    } else if (ticket == 'economy') {
        ticketTotal = ticketNewCount * 100
    }

    calculateTotal()
}

function calculateTotal() {
    let firstClassCount = getInputValue('firstClass');
    let economy = getInputValue('economy');

    let subTotal = firstClassCount * 150 + economy * 100;
    document.getElementById('subTotal').innerText = subTotal;

    let tax = Math.round(subTotal * 0.1);
    document.getElementById('tax').innerText = tax;

    grandTotal = subTotal + tax;
    document.getElementById('grandTotal').innerText = grandTotal
}

function getInputValue(ticket) {
    let ticketInput = document.getElementById(ticket + '-count');
    let ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

function resultToggler() {
    let firstClassTickets = document.getElementById('firstClass-count').value;
    let economyClassTickets = document.getElementById('economy-count').value;
    if (firstClassTickets == 0 && economyClassTickets == 0) {
        return document.getElementById('messege').innerText = 'Please Choose At Least One Ticket'
    }
    const infoArea = document.getElementById('booking-content');
    infoArea.style.display = 'none';
    const resultArea = document.getElementById('result');
    resultArea.style.display = 'block';

    document.getElementById('firstCount').innerText = firstClassTickets;
    document.getElementById('economyCount').innerText = economyClassTickets;
    document.getElementById('totalCost').innerText = grandTotal
}