// array of pictures

var allPictures = [
  { category: "art", src: "./images/img1.jpg", artist: `<div>Cy Twombly’s, <br /><i> Untitled </i>, <br />1954. <br />© Cy Twombly Foundation, New York</div>`},
  { category: "art", src: "./images/img2.jpg", artist: "<div>Karel Appel, <br /><i> Sans titre </i>, <br />1952. <br />© Karel Appel Foundation - Adagp, Paris</div>" },
  { category: "art", src: "./images/img3.jpg", artist: "<div>Gerhard Richter, <br /><i> 11.4.88 </i>, <br />1988. <br />© Museum of Modern Art (MoMA), New York</div>" },
  { category: "art", src: "./images/img4.jpg", artist: "<div>Joan Miro, <br /><i> Bleu I </i>, <br />1961. <br />© Centre Pompidou, Paris</div>" },
  { category: "art", src: "./images/img5.jpg", artist: "<div>John M Armleder, <br /><i> L'Ornithorynque, la mangouste et les trois canards </i>, <br />Ed. Quiquandquoi / Paris Musées, 2004.</div>" },
  { category: "art", src: "./images/img6.jpg", artist: "<div>Damien Hirst, <br /><i> Flesh Tint </i>, <br />2016. <br />© Prudence Cuming Associates Ltd</div>" },
  { category: "art", src: "./images/img7.jpg", artist: "<div>James Brown, <br /><i> Sans titre </i>, <br />1987.</div>" },
  { category: "art", src: "./images/img8.jpg", artist: "<div>Claude Viallat, <br /><i> Sans titre n°116 </i>, <br />2014.</div>" },
  { category: "art", src: "./images/img9.jpg", artist: "<div>Fabrice Hyber, <br /><i> Invention du VITRAIL 1 </i>, <br />2016.</div>" },
  { category: "art", src: "./images/img10.jpg", artist: "<div>Jean-Michel Basquiat, <br /><i> Dustheads </i>, <br />1982.</div>" },
  { category: "child", src: "./images/img11.jpg" },
  { category: "child", src: "./images/img12.jpg" },
  { category: "child", src: "./images/img13.jpg" },
  { category: "child", src: "./images/img14.jpg" },
  { category: "child", src: "./images/img15.jpg" },
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


function addArtistName () {
  var myImg = allPictures[0];
  // $(".answer").attr("p", myImg.artist);
  $(".answer").html(myImg.artist); 
  $(".answer").css("display", "flex");
}



$(".art").click(function () {
  errorCounterFinal = 0;
  if (allPictures.length > 0) {
    if (allPictures[0].category.includes("art")) {
      $(`ul li:nth-child(${counter})`).css("backgroundColor", "lightgreen");
      addArtistName();
      allPictures.shift();
      $(".buttons").hide();

      setTimeout(function () {
        $(".answer").css("display", "none");
        updateImage();
        $(".buttons").show();
      }, 1500);
    } else {
      $(`ul li:nth-child(${counter})`).css("backgroundColor", "crimson");
      allPictures.shift();
      updateImage();
      errorCounter++;
      setTimeout(function(){
        checkGameOver();
       }, 1500);
    }
  }

  setTimeout(function () {
    checkWin();
  }, 1500);
})

$(".child").click(function () {
  if (allPictures.length > 0) {
    if (allPictures[0].category.includes("child")) {
      $(`ul li:nth-child(${counter})`).css("backgroundColor", "lightgreen");
      allPictures.shift();
      updateImage();
    } else {
      $(`ul li:nth-child(${counter})`).css("backgroundColor", "crimson");
      addArtistName();
      allPictures.shift();
      $(".buttons").hide();

      setTimeout(function () {
        $(".answer").css("display", "none");
        updateImage();
        $(".buttons").show();
      }, 1500);
      errorCounter++;
     setTimeout(function(){
      checkGameOver();
     }, 1500);
      
    }
  }
  setTimeout(function () {
    checkWin();
  }, 1500);
 
})


function checkGameOver() {
  if (errorCounter >= 3) {
    $(".end").css("display", "block");
    $(".content").css("display", "none");
  }
}

function checkWin() {
  if (allPictures.length === 0 && errorCounter < 3) {
    $(".win").css("display", "flex");
    $(".content").css("display", "none");
  }
}