import { signUpScreen } from "./form.js";

export const signInScreen = document.querySelector("#sign-in-screen");

const signUpButton = document.getElementById("sign-up-button");

const signInLink = document.getElementById("sign-in-link");

const allCrossBUtton = document.querySelectorAll(".cross")

const mode = document.querySelector("#mode");
const round = document.querySelector("#round");
 
const body = document.querySelector("body");
const allCategories = document.querySelector("#all-categories");
const categoryContainer = document.querySelector(".category-container");
const header = document.querySelector("header");


// header pe jo signup button he wo wala
signUpButton.addEventListener("click", (e)=>{
    signUpScreen.style.display = "block"
})

// sign up page pe jo link he wo wala
signInLink.addEventListener("click", (e)=>{
    signUpScreen.style.display = "none";
    signInScreen.style.display = "block";
})

// sare cross button pe event
for(let i = 0; i < allCrossBUtton.length; i++){
    allCrossBUtton[i].addEventListener("click", (e)=>{
        e.target.parentNode.parentNode.parentNode.style.display = "none";
    })
}

// dark mode button
let darkMode = false; 
mode.addEventListener("click", (e)=>{
    round.classList.toggle("move-right");
    if(round.classList.contains("move-right")){
        darkMode = true;
    }
    else{
        darkMode = false;
    }

    if(darkMode){
        body.style.cssText = "background-color:#212121; color:white"
        allCategories.style.color = "yellow"
        header.style.cssText = "background-color:gray;"
    }
    else{
        body.style.cssText = "background-color:#fff; color:black"
        allCategories.style.color = "purple"
        header.style.cssText = "background-color:white;"
    }

    Array.from(categoryContainer.children).forEach((p)=>{
        p.classList.toggle("dark-category-para");
    })
    
    

})