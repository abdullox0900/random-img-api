let elBtn = document.querySelector(".btn");
let elImg = document.querySelector(".cat-img");

const apiUrl = "https://random.imagecdn.app/600/400";


//OPTION 1
const getImgApi = async function () {
     const response = await fetch(apiUrl);

     elImg.src = response.url;

     console.log(response);
}

getImgApi()

elBtn.addEventListener("click", function () {
     getImgApi()
})