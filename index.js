
import cardsFood from "./array.js"
// import toggleTheme from "./createTheme"
// import createMurkupList from "./сreateMurkup.js"


const listFoodEl = document.querySelector('.js-menu');
const createMurkup = createMurkupList(cardsFood);
const savedTheme = localStorage.getItem('createTheme');

listFoodEl.insertAdjacentHTML('afterbegin', createMurkup);

import foodCardsTpl from "./gallery_foods.hbs"

function createMurkupList(cardsFood) {
    return foodCardsTpl(cardsFood);
}



document.body.classList.add(savedTheme);

const toggleSwitchTheme = document.querySelector('#theme-switch-toggle')

toggleSwitchTheme.addEventListener('change', (evt) => {

     if (evt.target.checked) {
         createDarkTheme('dark-theme','light-theme')
         createTheme('dark-theme');

    } else {
          createLightTheme('light-theme','dark-theme')
     
            createTheme('light-theme');
    }
}
)

function createTheme(evt) {
    localStorage.setItem('createTheme', evt)

}

function createDarkTheme(add , remove) {
    document.body.classList.remove(remove);'light-theme'
    document.body.classList.add(add);'dark-theme'

       
}

function createLightTheme() {
     document.body.classList.remove('dark-theme')    
            document.body.classList.add('light-theme')

}
console.log()