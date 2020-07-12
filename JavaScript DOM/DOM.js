 // FOR EXAMINING THE DOCUMENTS //  

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'CRYSTAllinE Solutions'; 
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hey There Clients';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// SOME SELECTORS IN JS //

// 1) GETELEMENTBYID //

/* 

// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Namaste Clients';
// headerTitle.innerText = 'Goodbye Clients';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = ' <h3> Please Fill the Form </h3> ';
header.style.borderBottom = 'solid 4px #000'; */ 

// 2) GETELEMENTSBYCLASSNAME //

/* var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Suraj Kanojiya';
items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'mistyRose';

for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}
items[1].style.backgroundColor = 'mistyRose'; */

// 3) GETELEMENTSBYTAGNAME //

/* var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Suraj Kanojiya';
li[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'mistyRose';

for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}
li[1].style.backgroundColor = 'mistyRose';

li[3].textContent = 'Sai Ram Mahapatra';
li[3].style.fontWeight = 'bold';
li[3].style.backgroundColor = 'mistyRose';

li[5].textContent = 'Ankit Kumar Dwivedi';
li[5].style.fontWeight = 'bold';
li[5].style.backgroundColor = 'mistyRose';

li[7].textContent = 'Ram Shankar';
li[7].style.fontWeight = 'bold';
li[7].style.backgroundColor = 'mistyRose';

// QUERYSELECTOR //

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 15px #f1948a';

var input = document.querySelector('input');
input.value = 'Daya Shankar Pandey';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'Blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'darkMagenta'; */

// QUERY SELECTOR ALL //

/* var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'HEY BUDDY';

var odds = document.querySelectorAll('li:nth-child(odd)');
var evens = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odds.length; i++){
    odds[i].style.backgroundColor = '#f9ebea';
    evens[i].style.backgroundColor = '#f1948a';
}
*/ 

 // TRAVERSING THE DOM //

// var itemList = document.querySelector('#items');

// PARENT NODE //
/* console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#fdedec';
console.log(itemList.parentNode.parentNode.parentNode);
*/

// PARENT ELEMENT //
/* console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#fdedec';
console.log(itemList.parentElement.parentElement.parentElement);
*/

// CHILD NODES and CHILDREN //

//console.log(itemList.childNodes);
/* console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'Violet';
*/

// FIRST CHILD //\

// console.log(itemList.firstChild);

// FIRST & LAST ELEMENT CHILD //
/* console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Ram Gopal Verma';

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Christopher Nolan';
*/

//  NEXT SIBLING & NEXT ELEMENT SIBLING //

/* console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.fontWeight = 'bold';
itemList.previousElementSibling.style.color = '#f5b041';
*/

// CREATING ELEMENT //

// CREATE A DIV //
/* var newDiv = document.createElement('div');
newDiv.className = 'New Entries'; // ADDING A CLASS
newDiv.id = 'Before COVID-19'; // ADDING A ID
newDiv.setAttribute('title', 'Hey There World') // ADDING A ATTRIBUTE
var newDivText = document.createTextNode('Welcome to Crystalline Solutions'); // CREATING A TEXT NODE
newDiv.appendChild(newDivText); // ADDING THE TEXT INTO THE DIV

var addition = document.querySelector('header .container');
var H1 = document.querySelector('header H1');

console.log(newDiv);
addition.insertBefore(newDiv, H1);
newDiv.style.fontWeight = 'bold';
newDiv.style.fontSize = '15px';
*/ 

// EVENT LISTENERS //

/*
var button = document.getElementById('button').addEventListener

('click', buttonClick);

function buttonClick(e){
// console.log('BUTTON is CLICKED');
// document.getElementById('header-title').textContent = 'Costumers Info';
// document.querySelector('#main').style.backgroundColor = 'mistyRose';
//console.log(e);
*/

/* 
console.log(e.target);
console.log(e.target.id);
console.log(e.target.className);
console.log(e.target.classList);
var output = document.getElementById('output');
output.innerHTML= '<h3>'+e.target.id+'</h3>';
console.log(e.type);
*/

// console.log(e.clientX);
// console.log(e.clientY);
// console.log(e.offsetX);
// console.log(e.offsetY);

/*
console.log(e.altKey);
console.log(e.ctrlKey);
console.log(e.shiftKey);
};
*/

// var button = document.getElementById('button');
// var box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent); // FOR ANY INNER  ELEMENTS INSIDE THE BOX
// box.addEventListener('mouseout', runEvent);   
// box.addEventListener('mousemove', runEvent);

/*
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
*/

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

/* form.addEventListener('submit', runEvent);  

function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);

    // console.log(e.target.value);
    
    // document.body.style.display = 'none';

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';


    // output.innerHTML = ' <h3> MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

    // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
    // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
}
*/

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// FORM'S DATA SUBMISSION EVENT //
form.addEventListener('submit', addItem);

// FORM'S DATA REMOVING EVENT //
itemList.addEventListener('click', removeItem);

// FILTERING THE DATA'S //
filter.addEventListener('keyup', filterItems);

// ADDING NEW DATA'S //
function addItem(e){
    e.preventDefault();

    // GET  INPUT VALUE //
    var newItem = document.getElementById('item').value;
    
    // CREATING NEW LI ELEMENT //
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var delBtn = document.createElement('button')

    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));

    li.appendChild(delBtn);
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure You Wanna Delete this Data?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items =  itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'bolck';
        }
        else{
            item.style.display = 'none';
        }
    });
    
}