// NavBar Animation DropDown
function hamburger(){
    document.querySelector('.dropdown-ele').classList.toggle('dropdown-ele-active');
    document.querySelector('.nav-div').classList.toggle('nav-div-active');
}

document.querySelector('.hamBurger').addEventListener('click', hamburger);
// NavBar Animation DropDown

// Card Carousel On Hover Effect

let cards = document.querySelectorAll('.card-flex');
let cardsImg = ['education2.png', 'mentorship2.png', 'doc-shop2.png', 'my-docket2.png', 'community2.png', 'upcoming-events2']

window.onload = () => {
    document.querySelector('.def').classList.remove('invisible');
};

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', function() {
        document.querySelector('.card-flex-img-d-' + this.id).classList.toggle('invisible');
        document.querySelector('.card-flex-img-' + this.id).classList.toggle('invisible');
    });

    cards[i].addEventListener('mouseout', function() {
        document.querySelector('.card-flex-img-d-' + this.id).classList.toggle('invisible');
        document.querySelector('.card-flex-img-' + this.id).classList.toggle('invisible');
    });
}


// Card Carousel On Hover Effect

// Card-Carousel Button

// let leftButton = document.querySelector('.ubc1');
// let rightButton = document.querySelector('.ubc2');
// let cardCount = 0;
// let activeClass = document.querySelector('.u-active');
// let cards = document.querySelectorAll('.card-flex');
// let maxCards = cards.length - 1;
// console.log(leftButton, rightButton, cards[maxCards], cards[0].offsetLeft, cards[0].offsetWidth, activeClass.offsetLeft, maxCards);
// function moveActiveClass() {
//     cards.forEach(card => {
//         card.classList.remove('u-active');
//     });
//     cards[cardCount].classList.add('u-active');
// }



// function moveLeft() {
//     (cardCount === 0) ? cardCount = 0 : cardCount--;
//     moveActiveClass();
//     if (cards[0].offsetWidth !== activeClass.offsetWidth) {
//         activeClass = document.querySelector('.u-active');
//         console.log(activeClass.offsetLeft);
//         cards[0].style.marginLeft = '+' + activeClass.offsetLeft + 'px';
//         console.log('left');
//     }
// }

// function moveRight() {
//     (cardCount === maxCards) ? cardCount = maxCards : cardCount++;
//     moveActiveClass();
//     if (cards[maxCards].offsetWidth !== activeClass.offsetWidth) {
//         activeClass = document.querySelector('.u-active');
//         console.log(activeClass.offsetLeft);
//         cards[0].style.marginLeft = '-' + activeClass.offsetLeft + 'px';
//         console.log('right');
//     }
// }

// leftButton.addEventListener('click', moveLeft);
// rightButton.addEventListener('click', moveRight);

// Card Carousel Button

// Horizontal Draggable Carousel Start

function horizontalDragCar(container) {
    const slider = document.querySelector(`.` + `${container}`);
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (event) => {
        isDown = true;
        startX = event.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.classList.add('active');
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (event) => {
        if(!isDown) return;
        event.preventDefault();
        const x = event.pageX - slider.offsetLeft;
        const distance = (x - startX) * 1.5;
        slider.scrollLeft = scrollLeft - distance;
    });

}

let scrollableArr = ['under-banner-cards', 'courses-carousel', 'category-carousel', 'popular-courses-carousel', 'experts-carousel', 'testimonial-carousel'];

scrollableArr.forEach(element => {
    horizontalDragCar(element);
});

// Horizontal Draggable Carousel End