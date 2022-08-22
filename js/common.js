function selectPlayer(name) {
    const selectedPlayerOl = document.querySelector('#selected-players ol');
    const li = document.createElement('li');
    li.innerText = name.innerText;

    if (selectedPlayerOl.childElementCount < 5) {

        selectedPlayerOl.appendChild(li);


    }
    else {
        alert('You can not select more than 5 players.');

    }


}


function disableButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.disabled = true;
    if (button.disabled === true) {
        button.style.backgroundColor = 'gray';
    }
}
