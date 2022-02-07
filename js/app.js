let elBtn = document.querySelector(".btn");
let elImg = document.querySelector(".cat-img");

const apiUrl = "https://random.imagecdn.app/600/400";

// ===================

//OPTION N1
// const getImgApi = async function () {
//      const response = await fetch(apiUrl);

//      elImg.src = response.url;

//      console.log(response);
// }

// getImgApi()

// elBtn.addEventListener("click", function () {
//      getImgApi()
// })

// =====================

//OPTION N2
// async function getRandomImg() {
//      const response = await fetch(apiUrl)

//      elImg.src = response.url;
// }
// getRandomImg()

// elBtn.addEventListener("click", function () {
//      getRandomImg()
// })

//OPTION N3
function getImgRandom(data) {
     const response = fetch(apiUrl).then(res => res).then(data => getData(data));
}

function getData(data) {
     elImg.src = data.url;
}

elBtn.addEventListener("click", function () {
     getImgRandom()
})
