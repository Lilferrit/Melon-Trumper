var imgAr = ["https://imgur.com/d4MlgA6.png",
             "https://imgur.com/sf7Si8F.png",
             "https://imgur.com/FUNcNrq.png",
             "https://imgur.com/P0Blkjj.png",
             "https://imgur.com/vRwVL02.png",
             "https://imgur.com/R6G6SKf.png"];

var images = document.getElementsByTagName("img");


function imageReplace() {
  for (var i = 0; i < images.length; i++) {
    var rand = Math.floor(Math.random() * 7);
    images[i].src = imgAr[rand];
  }
}


function randomInterval() {
  return 500+Math.floor(Math.random()*500));
}

setInterval(imageReplace, randomInterval());
