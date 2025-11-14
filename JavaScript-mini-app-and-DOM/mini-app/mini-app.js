const root = document.querySelector("#root");
const userDropdown = document.getElementById("user-dropdown");
const albums = document.getElementById("albums");
const albumImages = document.getElementById("album-images");

async function updateDropdown(userEndpoint){
    let response = await fetch(userEndpoint);
    let users = await response.json();
    users.forEach((user) => {
        let newOption = document.createElement("option");
        newOption.value = user.id;
        newOption.textContent = user.username;
        userDropdown.appendChild(newOption);   
    });
}

async function updateAlbums(albumEndpoint, userId){
    let response = await fetch(albumEndpoint);
    let albumList = await response.json();
    let albumCollection = document.getElementById("albumCollection");
    if(albumCollection){
        albumCollection.innerHTML="";
    }else{
        albumCollection = document.createElement("div");
    }
    albumCollection.setAttribute("id", "albumCollection");
    albumList.forEach(album => {
        if(album.userId != userId) return;
        let albumDiv = document.createElement('button');
        albumDiv.setAttribute("class", "album-button");
        albumDiv.innerText = album.title

        albumDiv.addEventListener("click", () => updateImages("https://jsonplaceholder.typicode.com/photos",album.id));

        albumCollection.append(albumDiv);
    })
    albums.after(albumCollection);
}

userDropdown.addEventListener("change", async (event)=>{
    const userId = event.target.value;
    if(userId==="") return;
    const userName = event.target.options[event.target.selectedIndex].text;
    await updateAlbums("https://jsonplaceholder.typicode.com/albums", userId);
    const albumCollection = document.getElementById("imageCollection");
    if(albumCollection) albumCollection.remove();
});

async function updateImages(url, albumId){
    let response = await fetch(url);
    let images = await response.json();
    let imagesCollection = document.getElementById("imageCollection");
    if(imagesCollection){
        imagesCollection.innerHTML="";
    }else{
        imagesCollection = document.createElement("div");
    }
    imagesCollection.setAttribute("id", "imageCollection");
    images.forEach(image => {
        if(image.albumId!=albumId) return;
        let newImage = document.createElement("div");
        newImage.setAttribute("class", "image");
        newImage.innerText = image.title;
        imagesCollection.append(newImage);
    })
    albumImages.after(imagesCollection);

}

updateDropdown("https://jsonplaceholder.typicode.com/users");