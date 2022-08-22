document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getInputValueById('per-player-cost');

    const playerExpensesElement = document.getElementById('player-expenses');

    const playersSelected = document.getElementById("selected-players").getElementsByTagName("li").length;

    // player expenses 
    const playerExpenses = perPlayerCost * playersSelected;
    playerExpensesElement.innerText = playerExpenses;
})


document.getElementById('calculate-total-btn').addEventListener('click', function () {
    // player expenses 
    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesString);


    // manager cost 

    const managerCost = getInputValueById('manager-cost');


    // coach cost 

    const coachCost = getInputValueById('coach-cost');

    // total cost 
    const totalCostElement = document.getElementById('total');
    const total = managerCost + coachCost + playerExpenses;
    totalCostElement.innerText = total;


})