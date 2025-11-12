function getProcessedData(url){
    return downloadData(url) // returns a promise
    .catch( e => {
        return downloadFallbackData(url) // returns a promise
    }).then(v =>
        { return processDataInWorker(v) //returns a promise
    })
}

// convert the above using async/await:
async function getProcessedData(url){
    try{
        const v = await downloadData(url);
        return await processDataInWorker(v);
    }catch(e){
        const v = downloadFallbackData(url);
        return processDataInWorker(v);
    }
}