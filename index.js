for (i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {

        // var buttonInnerHtml=this.innerHTML;
        makeSound(this.innerHTML);
        animations(this.innerHTML)
       
    });
}

document.addEventListener('keydown',function(event) {
    makeSound(event.key);
    animations(event.key)
});

function makeSound(key){
    switch (key) {
        case 'w':var audio= new Audio('sounds/tom-1.mp3');
                 audio.play();
                 break;
                 
         case 'a':var help= new Audio('sounds/tom-2.mp3');
                 help.play();
                 break;
        case 's':var help= new Audio('sounds/tom-3.mp3');
                 help.play();
                 break;
        case 'd':var help= new Audio('sounds/tom-4.mp3');
                 help.play();
                 break;
        case 'j':var help= new Audio('sounds/snare.mp3');
                 help.play();
                 break;
        case 'k':var help= new Audio('sounds/crash.mp3');
                 help.play();
                 break;
        case 'l':var help= new Audio('sounds/kick-bass.mp3');
                 help.play();
                 break;
    
        default:console.log(this.innerHTML);
    }
}


function animations(curentKey){
    var activeKey=document.querySelector('.'+curentKey);
    activeKey.classList.add('pressed');

    setTimeout(function(){
        activeKey.classList.remove('pressed')
    },100)
}