function submitForm(){

    var amount = document.getElementById('amt').value;
    var des = document.getElementById('des').value;
    var cat = document.querySelector('#cat-val').value;

    let obj_details = {
      'des': des,
      'cat' : cat,
    };

    console.log(amount);
    console.log(obj_details);
    let obj_serialized = JSON.stringify(obj_details);
    localStorage.setItem(amount, obj_serialized);
    refresh();
}

function deleteItem(e){
    if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        var liContent = li.innerText;
        const str = liContent.split("-");
        var key = str[0].trim();

        var list = document.getElementById('listCon');
        list.removeChild(li);       
        
        localStorage.removeItem(key);
    }
}

function refresh(){

    removeAll();

    for (const key of Object.keys(localStorage)) {
        var amt = key;

        var obj_deserialized = JSON.parse(localStorage.getItem(key));

        var des = obj_deserialized.des;
        var cat = obj_deserialized.cat;

        var val = amt+' - '+cat+' - '+des+'  ';
        
        var list = document.getElementById('listCon');

        var li = document.createElement('li');
        li.appendChild(document.createTextNode(val));
        
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-primary';
        deleteBtn.onclick = deleteItem;
        deleteBtn.appendChild(document.createTextNode('Delete'));
        deleteBtn.style.marginLeft='7px';
        deleteBtn.style.background = 'red';
        li.appendChild(deleteBtn);

        var editBtn = document.createElement('button');
        editBtn.className = 'btn btn-primary';
        editBtn.onclick = editItem;
        editBtn.appendChild(document.createTextNode('Edit'));
        editBtn.style.marginLeft='7px';
        editBtn.style.background = 'green';
        li.appendChild(editBtn);

        li.style.padding = '5px';
        list.appendChild(li);
    
        
    }
}

function removeAll(){
    var list = document.getElementById('listCon');

    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
}

function editItem(e){
    var li = e.target.parentElement;
    var liContent = li.innerText;
    const str = liContent.split("-");
    
    var key = str[0].trim();
    var ind = str[2].indexOf(" ");

    var list = document.getElementById('listCon');
    list.removeChild(li);       
        
    localStorage.removeItem(key);

    var amt  = document.getElementById('amt');
    var des  = document.getElementById('des');
    var cat  = document.querySelector('#cat-val');

    amt.value = str[0].trim();
    des.value = str[2].replace(" DeleteEdit","");
    cat.value = str[1].trim();
}
