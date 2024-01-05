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
