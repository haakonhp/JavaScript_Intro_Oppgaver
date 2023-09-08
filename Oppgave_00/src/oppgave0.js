// Oppgave 1
let btnOppgave1 = document.getElementById('remove-btn');
btnOppgave1.addEventListener('click', () => {
    let element = document.getElementById('remove');
    element.parentNode.removeChild(element);
});

// Oppgave 2
let btnOppgave2 = document.getElementById('change-btn');
btnOppgave2.addEventListener('click', () => {
    let element = document.getElementById('change');
    element.innerText = 'Endret tekst';
});

// Oppgave 3
let btnOppgave3 = document.getElementById('input');
btnOppgave3.addEventListener('input', () => {
    let element = document.getElementById('input');
    document.getElementById('input-text').innerText = element.value;
});

// Oppgave 4
const myList = ['item one', 'item two', 'item three']
let btnOppgave4 = document.getElementById('write-list-btn');
btnOppgave4.addEventListener('click', () => {
    let element = document.getElementById('ul');
    element.appendChild(document.createElement('li'));
    element.lastChild.innerText = myList;
});

// Oppgave 5
// Får ikke til denne oppgaven, prøvd 8 varianter.
let btnOppgave5 = document.getElementById('create-btn');
let valueSelected = document.getElementById('select');
btnOppgave5.addEventListener('click', () => {
    let selectedText = valueSelected.options[valueSelected.selectedIndex];
    let element = document.getElementById('text');
    element.innerText = selectedText.text;
});

// Oppgave 6
let btnOppgave6 = document.getElementById('remove-li-btn');
btnOppgave6.addEventListener('click', () => {
    let list = document.getElementById('list');
    while (list.children.length > 0) {
        list.removeChild(list.lastChild);
    }
});

// Oppgave 7
let inputOppgave7 = document.getElementById('name');
inputOppgave7.addEventListener('input', () => {
    let btn = document.getElementById('order-btn');
    if (inputOppgave7.value.length > 4) {
        btn.style.border = '2px solid red';
        btn.disabled = true;
    } else {
        btn.style.border = '';
        btn.disabled = false;
    }
});

// Oppgave 8
let btnOppgave8 = document.getElementById('color-btn');
btnOppgave8.addEventListener('click', () => {
    let children = document.querySelectorAll('.children li');
    children.forEach((child, index) => {
        if ((index + 1) % 2 === 0) {
            child.style.border = '2px solid pink';
        } else {
            child.style.border = '2px solid green';
        }
    });
});