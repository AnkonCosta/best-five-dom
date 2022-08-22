function selectPlayer(name, elementId) {
    const selectedPlayerOl = document.querySelector('#selected-players ol');
    const li = document.createElement('li');
    li.innerText = name.innerText;

    if (selectedPlayerOl.childElementCount < 5) {

        selectedPlayerOl.appendChild(li);
        const button = document.getElementById(elementId);
        button.disabled = true;
        if (button.disabled === true) {
            button.style.backgroundColor = 'gray';
            return;
        }
        else {
            button.style.backgroundColor = 'blue';
        }



    }
    else {
        alert('You can not select more than 5 players.');

    }
}


function getInputValueById(inputId) {
    const inputValueElement = document.getElementById(inputId);
    const inputValueElementString = inputValueElement.value;
    const inputValue = parseFloat(inputValueElementString);
    inputValueElement.value = '';
    return inputValue;
    // if (isNaN(inputValue)) {
    //     alert('Please insert a valid number!!!!!')
    //     return;
    // }
    // else {
    //     return inputValue;
    // }
}

