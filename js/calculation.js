document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCostField = document.getElementById('per-player-cost');
    const perPlayerCostString = perPlayerCostField.value;
    const perPlayerCost = parseFloat(perPlayerCostString);

    const playerExpensesElement = document.getElementById('player-expenses');

    const playersSelected = document.getElementById("selected-players").getElementsByTagName("li").length;


    const playerExpenses = perPlayerCost * playersSelected;
    playerExpensesElement.innerText = playerExpenses;
})


document.getElementById('calculate-total-btn').addEventListener('click', function () {
    // player expenses 
    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesString);


    // manager cost 
    const managerCostElement = document.getElementById('manager-cost');
    const managerCostElementString = managerCostElement.value;
    const managerCost = parseFloat(managerCostElementString);

    // coach cost 
    const coachCostElement = document.getElementById('coach-cost');
    const coachCostElementString = coachCostElement.value;
    const coachCost = parseFloat(coachCostElementString);
    // total cost 
    const totalCostElement = document.getElementById('total');
    const total = managerCost + coachCost + playerExpenses;
    totalCostElement.innerText = total;
    // console.log(total)


})