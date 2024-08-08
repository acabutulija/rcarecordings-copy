let index = 0;
let carouselItems = document.querySelectorAll(".carousel-item");
let hoverElements = document.querySelectorAll(".hover-el");
let cursor = document.getElementById('custom-cursor');

setInterval(CarouselChanger, 3000);
setInterval(textSwitcher, 2500);

document.addEventListener('mousemove', function (e) {

    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

hoverElements.forEach(function (hoverElement) {
   hoverElement.addEventListener('mouseover', function () {
      cursor.classList.add("large");
   });
    hoverElement.addEventListener('mouseout', function () {
        cursor.classList.remove("large");
    });
});
function CarouselChanger ()  {

    carouselItems[index].classList.remove("active")

    index ++;
    if (index >= carouselItems.length) index = 0;

    carouselItems[index ].classList.add("active");


}
function WriteText (txt) {
    let i = 0;
    let changingTextParagraph = document.getElementById("changing-text");
    changingTextParagraph.innerText = "";
    function typeWriter() {
        if (i < txt.length) {
            changingTextParagraph.innerText += txt.charAt(i);
            i++;

            setTimeout(typeWriter, 110);
        }
    }

    typeWriter();
}

function textSwitcher () {
    let allText = ['art', 'records', 'culture', 'music'];

    let rand = Math.floor(Math.random() * allText.length);
    WriteText(allText[rand]);
}

const carousel = document.querySelector('.albums-carousel');
const items = document.querySelectorAll('.album');
const width = document.querySelector('.album').clientWidth;
let currIndex = 1;
const totalItems = 10;
const slideInterval = 4000; // 5 seconds


function nextSlide() {
    currIndex++;
    if (currIndex >= totalItems - 1) {
        carousel.scrollLeft = 0;
        currIndex = 1;
        
    } else {
        carousel.scrollLeft += (width + 20);
    }
}

function prevSlide() {
    currIndex--;
    if (currIndex <= 0) { 
        carousel.scrollLeft = (totalItems - 2) * (width + 20);
        currIndex = totalItems - 2;
    } else {
        carousel.scrollLeft -= (width + 20);
    }
}

const carousel2 = document.querySelector('.curated-carousel');
const items2 = document.querySelectorAll('.news-article');
const width2 = document.querySelector('.news-article').clientWidth;
let currIndex2 = 1;
const totalItems2 = 5;

function nextSlide2() {
    currIndex2++;
    if (currIndex2 >= totalItems2 - 1) {
        carousel2.scrollLeft = 0;
        currIndex2 = 1;
        
    } else {
        carousel2.scrollLeft += (width2 + 20);
    }
}

function prevSlide2() {
    currIndex2--;
    if (currIndex2 <= 0) { 
        carousel2.scrollLeft = (totalItems2 - 2) * (width2 + 20);
        currIndex2 = totalItems2 - 2;
    } else {
        carousel2.scrollLeft -= (width2 + 20);
    }
}

// Auto slide every 5 seconds
setInterval(nextSlide, slideInterval);
setInterval(nextSlide2, slideInterval);
