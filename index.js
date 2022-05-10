const url = "https://jsonplaceholder.typicode.com/users"

// Fetch users
function fetchUsers(){
    // Making use of the browser fetch API
    fetch(url).then((response)=> response.json())
        .then((data) => {
            // console.log(data); 
            // Passing the user data in the render function
            renderUsers(data)
        })
}



// Render Users in DOM

function renderUsers(usersData){
    console.log(usersData);
    const ul = document.getElementById('user-list-container')
    console.log(ul);

    // Rendering li tag for each of the users
    usersData.forEach((user, index) => {
        console.log(user, index +1);
        const li= document.createElement("li");
        li.innerHTML = `
            <span>${index + 1}.</span>
            <span>${user.name}</span>
            <span>-</span>
            <span class="username">${user.username}</span>
        `;

        ul.appendChild(li); 
    })
}

// Add a search function to the DOM

function searchUsersByUsername() {
    const input = document.getElementById("search")
    const ul = document.getElementById("user-list-container")
    const inputValue = input.value.toUpperCase();
    //  seaching for li inside the ul tag
    const usersList = ul.querySelectorAll("li")
    
    // Loop through all the users and matching the ones that match what we searched
    for(let index = 0; index < usersList.length; index++){
        const usernameSpanTag = usersList[index].querySelector(".username");
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

        if(isMatch){
            usersList[index].style.display ="block";
        } else {
            usersList[index].style.display = "none"
        }
    }

}

fetchUsers();