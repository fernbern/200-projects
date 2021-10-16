const div1 = document.querySelector('.box1');
const div2 = document.querySelector('.box2');
const div3 = document.querySelector('.box3');
const btn = document.querySelector('.btn');

div1.addEventListener('click', function(){
    document.body.style.backgroundColor = '#0089f2';
})
div2.addEventListener('click', function(){
    document.body.style.backgroundColor = 'gray';
})
div3.addEventListener('click', function(){
    document.body.style.backgroundColor = '#222';
})
btn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
})
map(); filter(); reduce();
