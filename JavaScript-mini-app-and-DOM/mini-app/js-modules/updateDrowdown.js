import {userDropdown} from "./variables.js";

export default async function updateDropdown(userEndpoint){
    try{
        let response = await fetch(userEndpoint);
        let users = await response.json();
        users.forEach((user) => {
            let newOption = document.createElement("option");
            newOption.value = user.id;
            newOption.textContent = user.username;
            userDropdown.appendChild(newOption);   
        });
    }
    catch(error){
        console.error("Error while updating the users to dropdown list: ", error);
    }
}