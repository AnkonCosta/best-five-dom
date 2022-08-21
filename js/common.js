function selectPlayer(name) {
    const selectedPlayerOl = document.querySelector('#selected-players ol');
    const li = document.createElement('li');
    li.innerText = name.innerText;
    selectedPlayerOl.appendChild(li);
    return li;

}
