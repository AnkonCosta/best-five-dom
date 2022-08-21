// First Player 
document.getElementById('leo-btn').addEventListener('click', function () {

    const playerName = document.getElementById('leo');
    selectPlayer(playerName);

    const button = document.querySelector('button')
    button.disabled = true;
    button.disabled = false;
})

// Second Player 
document.getElementById('neymar-btn').addEventListener('click', function () {

    const playerName = document.getElementById('neymar');
    selectPlayer(playerName);
})
// third player 
document.getElementById('dybala-btn').addEventListener('click', function () {

    const playerName = document.getElementById('dybala');
    selectPlayer(playerName);
})
// fourth player 
document.getElementById('ramos-btn').addEventListener('click', function () {

    const playerName = document.getElementById('ramos');
    selectPlayer(playerName);
})

// fifth player 
document.getElementById('benzama-btn').addEventListener('click', function () {

    const playerName = document.getElementById('benzama');
    selectPlayer(playerName);
})

// sixth Player 
document.getElementById('ronaldo-btn').addEventListener('click', function () {

    const playerName = document.getElementById('ronaldo');
    selectPlayer(playerName);
})



