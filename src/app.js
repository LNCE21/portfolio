const hamburgerButton = document.getElementById('hamburger') /*First, grab the element with id of hamburger, and after, save as a button*/
const navList = document.getElementById('nav-list') /* Now we grab our nav elements  */

function toggleButton(){                /*Toggle function, grabs the navList, classList and we want a toggle with a future class (show)*/
    navList.classList.toggle('show')
}

/*Now we attached this to the hamburger button */
hamburgerButton.addEventListener('click', toggleButton) /*So, if we click, we toggle the button*/

/*Here start the SVG*/
/*We need to know the length of the path*/
const developer = document.querySelectorAll('.developer path'); /*Here we are selecting all the paths in the word*/
for(let i = 0; i<developer.length; i++){
    console.log(`Letter ${i} is ${developer[i].getTotalLength()}`); /*The total length. Now we have to go to "inspect" and on "console"  to get the exact length*/
}
