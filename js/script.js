// array of pictures

var allPictures = [
  { category: "art", src: "./Images/img1.jpg" },
  { category: "art", src: "./Images/img2.jpg" },
  { category: "art", src: "./Images/img3.jpg" },
  { category: "art", src: "./Images/img4.jpg" },
  { category: "art", src: "./Images/img5.jpg" },
  { category: "art", src: "./Images/img6.jpg" },
  { category: "art", src: "./Images/img7.jpg" },
  { category: "art", src: "./Images/img8.jpg" },
  { category: "art", src: "./Images/img9.jpg" },
  { category: "art", src: "./Images/img10.jpg" },
  { category: "child", src: "./Images/img11.jpg" },
  { category: "child", src: "./Images/img12.jpg" },
  { category: "child", src: "./Images/img13.jpg" },
  { category: "child", src: "./Images/img14.jpg" },
  { category: "child", src: "./Images/img15.jpg" },
];


var counter = 0;
var errorCounter = 0;

function shufflePics() {
  var nbPics = allPictures.length;
  while (nbPics > 0){
    var index = Math.floor(Math.random() * nbPics);
    nbPics--;

    var temp = allPictures[nbPics];
    allPictures[nbPics] = allPictures[index];
    allPictures[index] = temp;
  }
}

shufflePics();
updateImage();


function updateImage() {
  counter++;
  if (allPictures.length > 0) {
    var myImg = allPictures[0];
    $(".myImg").attr("src", myImg.src);
  }
}


$(".art").click(function () {
errorCounterFinal = 0;
  if (allPictures.length > 0) {
    if (allPictures[0].category.includes("art")) {
      $(`ul li:nth-child(${counter})`).css("backgroundColor", "lightgreen");
      allPictures.shift();
      updateImage();
      // return true;
    } else {
      $(`ul li:nth-child(${counter})`).css("backgroundColor", "crimson");
      allPictures.shift();
      updateImage();
      errorCounter++;
      checkGameOver();
      // return false;
    }
  }
  checkWin();
})

$(".child").click(function () {
  if (allPictures.length > 0) {
    if (allPictures[0].category.includes("child")) {
      $(`ul li:nth-child(${counter})`).css("backgroundColor", "lightgreen");
      allPictures.shift();
      updateImage();
      // return true;
    } else {
      $(`ul li:nth-child(${counter})`).css("backgroundColor", "crimson");
    allPictures.shift();
    updateImage();
    errorCounter++;
    checkGameOver();
    }
    

    // return false;
  }
  checkWin();
})


function checkGameOver() {
  if (errorCounter >= 3) {
    $(".end").css("display", "block");
    $(".content").css("display", "none");
  }
}

function checkWin() {
  if (allPictures.length === 0) {
    $(".win").css("display", "flex");
    $(".content").css("display", "none");
  }
}






