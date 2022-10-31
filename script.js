let usernameInput = document.getElementById("searchInput");
let searchQuery = ""
let allNamesDOMCoIIection = document.getElementsByClassName("name")
// let names = []
usernameInput.addEventListener("keyup", function(event){
    searchQuery = event.target.value.toLowerCase()
    // console.log(searchQuery);
    for(let i= 0; i < allNamesDOMCoIIection.length;i++){
        // names.push(allNamesDOMCoIIection[i].innerText.toLowerCase())
        // console.log(allNamesDOMCoIIection[i].innerText);
        let names = allNamesDOMCoIIection[i].innerText.toLowerCase()
        if(names.includes(searchQuery)){
            allNamesDOMCoIIection[i].style.display= "block"
        }
        else{
            allNamesDOMCoIIection[i].style.display = "none"
        }
    }
})



