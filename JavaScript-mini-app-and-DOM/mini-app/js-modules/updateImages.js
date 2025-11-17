import { albumImages } from "./variables.js";

export default async function updateImages(imagesEndpoint, albumId){
    try{
        let response = await fetch(imagesEndpoint);
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
    catch(error){
        console.error("Error while updating the images: ", error);
    }
    
    
}