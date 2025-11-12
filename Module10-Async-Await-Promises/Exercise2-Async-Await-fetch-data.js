async function fetchData(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        for(let i = 1 ; i <= 5 ; i++){
            console.log(`${i} : ${data[i].title}`);
        }
    }catch(error){
        console.error("Error occured while fetching the data: ", error);
    }
}

fetchData();