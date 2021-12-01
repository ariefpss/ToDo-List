const input = document.getElementsByTagName('input');
const border = document.querySelectorAll('span');
const icon = document.querySelectorAll('i');

for (let index = 0; index < input.length; index++) {
    input[index].addEventListener('focusin', function() {
        border[index].classList.add('focusin-input');
        border[index].classList.remove('focusout-input');
        icon[index].classList.add('icon-inbackgroud');
        icon[index].classList.remove('icon-outbackgroud');
    });

    input[index].addEventListener('focusout', function(){
        border[index].classList.remove('focusin-input');            
        border[index].classList.add('focusout-input');
        icon[index].classList.remove('icon-inbackgroud');
        icon[index].classList.add('icon-outbackgroud');
    });
};
