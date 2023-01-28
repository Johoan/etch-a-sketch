
const container = document.querySelector('.container');



for (i=0; i<256; i++) {
    const divItem = document.createElement('div');
    divItem.className = 'grid-item';
    container.appendChild(divItem);
    document.getElementById('id-cont').appendChild(divItem);
}

