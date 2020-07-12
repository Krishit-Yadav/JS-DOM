
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