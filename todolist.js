document.addEventListener('DOMContentLoaded', function() {
let btn=document.getElementById('btn');
btn.addEventListener('click',change);

function change(){


let task=document.getElementById('task').value;
if (task==='')alert('Write a task!');
else{
let child=document.createElement('div');
child.id='tas';
let div=document.getElementById('container');
let p=document.createElement('p');
let del=document.createElement('button');
del.id='btndel';
del.innerHTML='delete';

div.appendChild(child);
p.innerHTML=task;

child.appendChild(p);
child.appendChild(del);

del.addEventListener('click',function (){
    child.remove();})

p.addEventListener('click',function(){
    p.style.textDecoration='line-through';
    p.style.textDecorationColor='rgb(7, 178, 201)';           
})
}}
})
