const hamburgerButton = document.getElementById('hamburger') /*First, grab the element with id of hamburger, and after, save as a button*/
const navList = document.getElementById('nav-list') /* Now we grab our nav elements  */

function toggleButton(){                /*Toggle function, grabs the navList, classList and we want a toggle with a future class (show)*/
    navList.classList.toggle('show')
}

/*Now we attached this to the hamburger button */
hamburgerButton.addEventListener('click', toggleButton) /*So, if we click, we toggle the button*/

/*Here start the SVG*/
const developer = document.querySelectorAll('.developer path');
for(let i = 0; i<developer.length; i++){
    console.log(`Letter ${i} is ${developer[i].getTotalLength()}`);
}
