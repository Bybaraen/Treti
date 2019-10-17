
/* 1. úkol - querySelector - velké S - říká se tomu Camel case :), píše se tak v JS;
NA VELIKOSTI PÍSMA V JS ZÁLEŽÍ, V HTML A CSS NE - JEN U JMEN TŘÍD;
Cokoliv bez uvozovek je název proměnné - např. odstavec.style.fontStyle = italic a 'italic'*/

let nadpis = document.querySelector('h1');

nadpis.style.color = 'red';
nadpis.style.backgroundColor = 'yellow';

/* 2. úkol */
let odstavec = document.querySelector('p');
odstavec.style.fontSize = '30px';

/* 3. úkol */
let obrazek = document.querySelector('img');
obrazek.src = 'images/pes.jpg';   

/* 4. úkol */
let ctverecek = document.querySelector('img');

/* Pár funkcí se mi neuložilo */

function priKliknuti(){
    console.log('Aaaaa, na mě neklikej');
}