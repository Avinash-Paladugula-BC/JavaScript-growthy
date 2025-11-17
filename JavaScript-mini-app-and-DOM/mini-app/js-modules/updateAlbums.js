import updateImages from "./updateImages.js";


export default async function updateAlbums(albumEndpoint, userId){
    try{
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
    catch(error){
        console.error(`Error while fetching the albums of the user with userid ${userId}`);
    }
    
}