export const signUpScreen = document.querySelector("#sign-up-screen");
    import { signInScreen } from "./utility.js";

    const signUpForm = document.querySelector("#sign-up-form");
    const signUpInputs = document.getElementsByClassName("sign-up-input");

    const signInForm = document.querySelector(".sign-in-form");
    const signInInputs = document.getElementsByClassName("sign-in-input");

                
    const signUpButton = document.querySelector("#sign-up-button")


    signUpForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const userInfo = {
            name : signUpInputs[0].value,
            email : signUpInputs[1].value,
            password : signUpInputs[2].value,
        }
        localStorage.setItem("User Information", JSON.stringify(userInfo));
        signUpScreen.style.display = "none";

        signUpButton.innerHTML = 
        `<div style="display:flex; justify-content: space-between; align-items: center; min-width:100px;">
        <span><span style="padding-right:10px">${signUpInputs[0].value}</span> <i class="fa-solid fa-user"></i></span>
        <span><i class="fa-solid fa-caret-down"></i></span>
        </div>` 

        alert("Signed Up Successfully")
    })

    signInForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        // checking user details form local storage
        const filledInfo = {
            email : signInInputs[0].value,
            password : signInInputs[1].value,
        }

        let data = localStorage.getItem("User Information");
        let isMatched = true;

        for(let key in filledInfo){
            if(filledInfo[key] != data[key]){
                isMatched = false;
                console.log("Data match nhi hua bhai");
            }
        }

        if(isMatched){
            signInScreen.style.display = "none";
        }

    })