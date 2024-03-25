let myForm = document.getElementById("myForm")
let username = document.getElementById("username")
let useremail = document.getElementById("useremail")
let requiredMsg  = document.getElementById("required")
let requiredEmail  = document.getElementById("requiredEmail")

username.addEventListener("blur", (event)=>{
if(event.target.value === ""){
requiredMsg.textContent = "Required*"
} 
else{
    requiredMsg.textContent = "" 
}
})

useremail.addEventListener("blur", (event)=>{
    if(event.target.value === ""){
        requiredEmail.textContent = "Required*"
    } 
    else{
        requiredEmail.textContent = "" 
    }
    })



myForm.addEventListener("submit",(event)=>{
event.preventDefault()
})