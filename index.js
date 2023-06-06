const accessKey = "k1Bc0YOWLhlabLQs_Fjm6k0JAmy8Ab86g4jXiElEoSI";

const formE1 = document.querySelector("form");
const searchInputE1 = document.getElementById("search-input");
const searchResultsE1= document.querySelector(".search-results");
const showMoreResultE1 =document.getElementById("show-more-result");

let inputData =" ";
let pages =1;
formE1.addEventListener("submit", (e)=>
{
e.preventDefault();
pages=1
searchImages();
})

async function searchImages()
{
    inputData=searchInputE1.value;
    console.log(inputData);
    const url =`http://api.unsplash.com/search/photos?pages=${pages}&query=${inputData}&cilent_id=${accessKey}`;
    console.log(url)
    const response= await fetch(url);
    const data = await response.json();

    if(pages==1)
    {
        searchInputE1.innerHTML="";
    }
    // console.log(data)

    const results =data.results;
    results.map((result)=>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const img =document.createElement("img");
        img.src=result.urls.small;
        img.alt=result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href=result.liks.html;
        imageLink.target="_blank";
        imageLink.textContent=result.alt_description;

        imageWrapper.appendChild(img);
        imageWrapper.appendChild(imageLink);
        searchResultsE1.appendChild(imageWrapper);

    });
    pages++;

    if(pages>1)
    {
        showMoreResultE1.style.displa="block";
    }
}

showMoreResultE1.addEventListener("click",()=>{
    searchImages();

});