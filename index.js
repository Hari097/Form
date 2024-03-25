let myForm = document.getElementById("myForm")

let username = document.getElementById("username")
let useremail = document.getElementById("useremail")

let requiredNameEl  = document.getElementById("requiredName")
let requiredEmailEI  = document.getElementById("requiredEmail")

let genderMaleEI = document.getElementById("genderMale")
let genderFemaleEI = document.getElementById("genderFemale")

let workingStatusEI = document.getElementById("status")

let userData = {
    name:"",
    email:"",
    status:"employed",
    gender:"Male"
  
}


// working status
workingStatusEI.addEventListener("change",(event)=>{
userData.status = event.target.value
})


// Add user  Gender
genderMaleEI.addEventListener("change",(event)=>{
    userData.gender = event.target.value
})

genderFemaleEI.addEventListener("change",(event)=>{
userData.gender = event.target.value
})

// User Name  
username.addEventListener("change",(event)=>{
    userData.name = event.target.value
})

// User Email
useremail.addEventListener("change",(event)=>{
    userData.email = event.target.value
})


// Required Message

username.addEventListener("blur", (event)=>{
if(event.target.value === ""){
requiredNameEl.textContent = "Required*"
} 
else{
    requiredNameEl.textContent = "" 
}
})

useremail.addEventListener("blur", (event)=>{
    if(event.target.value === ""){
        requiredEmailEI.textContent = "Required*"
    } 
    else{
        requiredEmailEI.textContent = "" 
    }
})


// Sumbit Form Button
myForm.addEventListener("submit",(event)=>{

event.preventDefault()

let checkValidat = ValidationFrom(userData)

if(checkValidat == true){
    submitFromData(userData)
}

})

function submitFromData(userData){ 
let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
    },
    body: JSON.stringify(userData)
  };

let URL = "https://gorest.co.in/public-api/users"; 

fetch(URL,options)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})


}

function ValidationFrom(userData){
    let {email,name}=userData 
 let validated = true
    if(name === ""){
        requiredNameEl.textContent = "Required*"
        validated = false
    } 
    if(email === ""){
        requiredEmailEI.textContent = "Required*"
validated = false
    } 
return validated
}