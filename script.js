const form=document.getElementById('addForm');
const items=document.getElementById('items');


form.addEventListener('submit',onSubmit);
items.addEventListener('click',delteData);
function onSubmit(e){
    e.preventDefault();

    //creating new Element li 
    const input=document.getElementById('item').value;

   const li=document.createElement('li');
   li.className='list-group-item';

   li.appendChild(document.createTextNode(input));
  
    //creating Edit button
    const editBtn=document.createElement('button');
    editBtn.className='btn btn-success btn-sm float-right';
    editBtn.appendChild(document.createTextNode('EDIT'));
    li.appendChild(editBtn);
   //Creating New Button Element 
   const delBtn=document.createElement('button');
   delBtn.className='btn btn-danger btn-sm float-right delete';
   delBtn.appendChild(document.createTextNode('X'));
   li.appendChild(delBtn);

  


   items.appendChild(li);
}

function delteData(e){
    if(e.target.classList.contains('delete')){
       if(confirm('Are You Sure?')){
        const li=e.target.parentElement;
        items.removeChild(li);
       }
    }

   
}

