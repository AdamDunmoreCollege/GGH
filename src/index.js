//Imports
import Home from './pages/home.js'
import History from './pages/history.js'
import Gallery, { gallery_addListeners, gallery_change_image } from './pages/gallery.js'
import Location from './pages/location.js'
import Live from './pages/live.js'
import Links from './pages/links.js'
import Contact, {contact_addListeners} from './pages/contact.js'

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  
const firebaseConfig = {
    apiKey: "AIzaSyDcIFgFoEi0UxPxEnuIJwzQJIuGG5v2fpk",
    authDomain: "granton-gas-holder.firebaseapp.com",
    projectId: "granton-gas-holder",
    storageBucket: "granton-gas-holder.appspot.com",
    messagingSenderId: "126779676287",
    appId: "1:126779676287:web:ba5a3594f7d11a9af5514a"
  };

const app = initializeApp(firebaseConfig);


//Function to change tab
//Takes in a tab id
function change_tab(tab_id){
    //Adds active class to tab_id
    document.getElementById(active_tab).classList.remove("active");
    document.getElementById(tab_id).classList.add("active");
    active_tab = tab_id;

    //Changes active tab to tab_id
    switch (tab_id){
        case "home":
            canvas.innerHTML = Home();
            break;
        case "history":
            canvas.innerHTML = History();
            break;
        case "gallery":
            canvas.innerHTML = Gallery();
            gallery_addListeners()
            gallery_change_image("") //Initialises first image
            break;
        case "location":
            canvas.innerHTML = Location();
            break;
        case "live":
            canvas.innerHTML = Live();
            break;
        case "links":
            canvas.innerHTML = Links();
            break;
        case "contact":
            canvas.innerHTML = Contact();
            contact_addListeners();
            break;
    }
}

//Function to add event listeners to buttons
//Runs on setup
function add_listeners(){
    let nav_buttons = document.getElementsByClassName("nav_button")
    for (let x = 0; x < nav_buttons.length; x++){
        nav_buttons[x].addEventListener("click", (e) => {change_tab(e.target.id)});
    }
} add_listeners();

//Setup and sets tab to home
const canvas = document.getElementById("app");
let active_tab = "home";
change_tab("home")
