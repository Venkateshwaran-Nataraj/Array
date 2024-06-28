

let array=[]


function add() {
    const input = document.getElementById('arrayInput').value;
    if (input) {
        array.push(input);
        document.getElementById('arrayInput').value = '';
        displayArray();
    }
}

function remove() {
    array.pop();
    displayArray();
}

function clr() {
    arrayDisplay = document.getElementById('arrayDisplay')
    arrayDisplay.innerHTML=' '
    array=[];
    document.getElementById('sort').innerHTML=' Sort by Ascending'
    document.getElementById('filter').innerHTML=' Filter Even Number only'
    document.getElementById('map').innerHTML=' Map power of numbers'
    document.getElementById('lastIndexDisplay').textContent=' '
    document.getElementById('searchInput').value=' '
}
function sort() {
    document.getElementById('sort').innerHTML=array.sort();
    
}

function filter() {
    document.getElementById('filter').innerHTML = array.filter(a =>  a%2==0 );
}

function map() {
    document.getElementById('map').innerHTML= array.map(b => b**2 );
}

function findLastIndexOf() {
   
    const searchValue = document.getElementById('searchInput').value;
    const lastIndex = array.lastIndexOf(searchValue);
    document.getElementById('lastIndexDisplay').textContent = `Last index of "${searchValue}": ${lastIndex}`;
    
}

function displayArray(subAr = array) {
    const arrayDisplay = document.getElementById('arrayDisplay');
    arrayDisplay.innerHTML = subAr;
    
    ;
}
