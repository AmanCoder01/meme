let url = "https://meme-api.com/gimme/1";
// let url = "https://dummyjson.com/products/";
// let url = "https://api.imgflip.com/get_memes";


let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let quote = await getQuotes();
    //  console.log(quote);
     show(quote);
});


function show(quote) {
    let p = document.querySelector("img");

     for (key of quote) {
          p.src = key.url;
     }
}


async function getQuotes() {
    try {
        let res = await axios.get(url);
        // console.log(res.data.memes);
        return res.data.memes;
    } catch (err) {
        console.log("Error", err);
        return "Erroe";
    }
}
