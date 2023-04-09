var form=document.getElementById('addForm');
var listItem=document.getElementById('items');

form.addEventListener('submit',addItem);
listItem.addEventListener('click',deleteItem);

function addItem(e){

    e.preventDefault();
   // console.log(1);

   var newItem=document.getElementById('item').value;

   var li=document.createElement('li');
   li.className='list-group-item';

   li.appendChild(document.createTextNode(newItem));

   


   var deleteBtn=document.createElement('button');
   deleteBtn.className='btn btn-danger btn-sm float-right delete';
   deleteBtn.appendChild(document.createTextNode('X'));
   li.appendChild(deleteBtn);
   listItem.appendChild(li);

   var editBtn=document.createElement('button');
   editBtn.className='Edit';
   editBtn.appendChild(document.createTextNode('Edit'));
   li.appendChild(editBtn);
   listItem.appendChild(li);
   
   listItem.appendChild(li);
}

function deleteItem(e){

    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          var li = e.target.parentElement;
          listItem.removeChild(li);
        }
      }
}

