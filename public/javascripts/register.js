const input = document.getElementsByTagName('input');
const border = document.querySelectorAll('span');

for (let index = 0; index < input.length; index++) {
    input[index].addEventListener('focusin', function() {
        border.forEach(function(element) {
            element.classList.remove('focusout-input');            
            element.classList.add('focusin-input');
        });
    });

    input[index].addEventListener('focusout', function(){
        border.forEach(function(element) {
            element.classList.remove('focusin-input');            
            element.classList.add('focusout-input');            
        });
    });
};
