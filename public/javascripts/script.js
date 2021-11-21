const btnHumberger = document.querySelector('#btnHumberger');
const hiddScrlBody = document.querySelector('body'); 
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const hiddMenuMob = document.querySelectorAll('.has-fade'); 

btnHumberger.addEventListener('click', function() {
    if(header.classList.contains('open')){
        hiddScrlBody.classList.remove('noscroll')
        header.classList.remove('open');
        hiddMenuMob.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });
    } else {
        header.classList.add('open');
        hiddScrlBody.classList.add('noscroll')
        hiddMenuMob.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});