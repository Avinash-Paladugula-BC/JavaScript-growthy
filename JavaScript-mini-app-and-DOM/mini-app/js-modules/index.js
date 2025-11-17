import {userDropdown} from "./variables.js";
import updateDropdown from "./updateDrowdown.js";
import updateAlbums from "./updateAlbums.js";
// import updateImages from "./updateImages.js";



updateDropdown("https://jsonplaceholder.typicode.com/users");
userDropdown.addEventListener("change", async (event)=>{
    const userId = event.target.value;
    if(userId==="") return;
    const userName = event.target.options[event.target.selectedIndex].text;
    await updateAlbums("https://jsonplaceholder.typicode.com/albums", userId);
    const albumCollection = document.getElementById("imageCollection");
    if(albumCollection) albumCollection.remove();
});