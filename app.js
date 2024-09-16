'use strict';

const switcher = document.querySelector('.btn');


switcher.addEventListener('click', function() {
    //toggle essentially just checks if a thing is there. if it is, 
    //it removes it. if not, it adds it. 
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    console.log(className);
    if(className == "light-theme"){
        this.textContent = "Dark";
    }else{
        this.textContent = "Light";
    }
});

