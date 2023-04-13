let addtobutton= document.getElementById('add');
let ToDoList= document.getElementById('ToDoList');
let inputField= document.getElementById('addItem');

addtobutton.addEventListener('click',function(){
  var paragraph = document.createElement('p');
  paragraph.classList.add();
  paragraph.innerText = inputField.value;
  ToDoList.appendChild(paragraph);
  inputField.value="";
  paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener('dblclick',function(){
    ToDoList.removeChild(paragraph);
  })
})

