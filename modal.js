const open= document.getElementById('open')
const modal_container=document.getElementById('modal_container')
const close=document.getElementById('close')
const subscribe=document.getElementById('subscribe')
const modal_container1=document.getElementById('modal_container1')
const subscribe1=document.getElementById('subscribe1')
const modal_container2=document.getElementById('modal_container2')
const modal_close=document.querySelector('.modal_close')
open.addEventListener('click', ()=>{
    modal_container.classList.add('show')
})
close.addEventListener('click', ()=>{
    modal_container.classList.remove('show')
})
subscribe.addEventListener('click', ()=>{
    modal_container1.classList.add('show')
})
subscribe1.addEventListener('click', ()=>{
    modal_container2.classList.add('show')
})
modal_close.addEventListener('click', function(){
    modal_container2.classList.remove('show')
})