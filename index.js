// NavBar Animation DropDown
function hamburger(){
    document.querySelector('.dropdown-ele').classList.toggle('dropdown-ele-active');
    document.querySelector('.nav-div').classList.toggle('nav-div-active');
}

document.querySelector('.hamBurger').addEventListener('click', hamburger);
// NavBar Animation DropDown

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

let scrollableArr = ['under-banner-cards', 'courses-carousel'];

scrollableArr.forEach(element => {
    horizontalDragCar(element);
});

// Horizontal Draggable Carousel End