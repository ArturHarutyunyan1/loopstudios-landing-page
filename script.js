const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.menu')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
    if(navMenu.classList.contains('active')){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'visible'
    }
})