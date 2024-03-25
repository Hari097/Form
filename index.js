


let username = document.getElementById("name")



let userData  = {
    name:"hariharan",
    city:"chennai",
    email:"harikalam143@gmail.com"
}

function netwrokCall(){
    let option = {
        method:"POST",
        mode: 'no-cors',
       

        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
    
          },
        
        body: JSON.stringify(userData)
        
    }

    fetch("http://localhost:3003/home/user",option)
   
.then((response)=>{
    return response
})
.then((data)=>{
    // let {username}=data
   
console.log(data)
}).catch(err => {
    console.log('Error -', err);
  });
}




