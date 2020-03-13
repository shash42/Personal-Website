var currimg=0;
var srcs=["../img/liv.jpg", "../img/aibmention.jpg", "../img/capaldi.jpg",
 "../img/exun.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJlibv9glvDOpzIq3xDw8PaHUcmuUmyEqAMfs28P32807kaKCA"];
var heads=["Liverpool Fan", "AIB Mention", "Favorite Music", "Leading and Organizing", "Hit me up!"]
var captions=[
    "I have been a Liverpool fan since 2013. Proud to have " +
    "witnessed Klopp make them rise to the top of the world!", 

    "In 2017, I won an international NASA space contest " +
    "with a friend. Surprisingly got mentioned on OnAir with AIB!",
    
    "Listening to music is my favorite stress-buster. I like most EDMs, " +
    "Lewis Capaldi, Camilla Cabello and Imagine Dragons to name a few.",

    "I like managing things and acting on real-time problems. In 2018, I " +
    "made my school's techfest national by leading a team of 60 students.",

    "Coincidentally born on 4/2/2001, I am open to discussing Life, " +
    "The Universe, and Everything! with anyone and everyone."
]
function initgall()
{
    var img = document.getElementById("aboutimg");
    var header = document.getElementById("captionhead");
    var caption = document.getElementById("imgtext");
    img.src=srcs[currimg];
    header.innerHTML=heads[currimg];
    caption.innerHTML=captions[currimg];
}
function changepic()
{
    currimg=currimg+1;
    currimg=currimg%5;
    initgall();
}

function ScrollToTop() {
    if(window.scrollY!=0)
    {

        setTimeout(function() {
           window.scrollTo(0,window.scrollY-30);
            ScrollToTop();
        }, 20);
     }
  }