const circleContainer = document.getElementById('circleContainer');

const moveSlide = (e) => {
    console.log('moving slide!');
    const slides = document.getElementById('slidesContainer');
    const position = -120 * e.target.getAttribute('data-index');
    slides.style.left = (`${position}px`);
    
}

const makeCircles = () => {
    const imageCollection = document.getElementById('slidesContainer').children;
    const imageArray = Array.from(imageCollection);
    imageArray.forEach(imageElement => {
        const index = imageArray.indexOf(imageElement);
        const circle = document.createElement('div');
        circle.setAttribute('data-index', `${index}`);
        circle.classList.add('circle');
        circleContainer.appendChild(circle);
        circle.addEventListener('click', moveSlide);
    })
}

const getPosition = () => {
    const slides = document.getElementById('slidesContainer');
    const position = Number(slides.style.left.replace(/[^\d.\-]/g, ''));
    console.log(`get position returns: ${position}`);
    return position;
}

const setPosition = (position) => {
    const slides = document.getElementById('slidesContainer');
    slides.style.left = (`${position}px`);
    console.log(`set position sets ${position}`);
}

const moveRight = (position) => {
    const newPosition = position - 120;
    return newPosition;
}

const moveLeft = (position) => {
    const newPosition = position + 120;
    return newPosition;
}

const changeSlide = (e) => {
    console.log(e.target.getAttribute('id'));
    if(e.target.getAttribute('id') === 'backward'){
        setPosition(moveLeft(getPosition()));
    }
    else{
        setPosition(moveRight(getPosition()));
    }
}

const moveSlide1 = () => {
    console.log('moving')
    const position = moveRight(getPosition());
    if(position !== -960){
        setPosition(position);
    }
    else{
        slides.style.left = (`0px`);
    }  
    autoPlay();
}

const autoPlay = () => {
    console.log('autoplaying!')
    setTimeout(() => {moveSlide1();}, 5000); 
}

const buttons = document.getElementsByClassName('button');
Array.from(buttons).forEach(button => {
    button.addEventListener('click', changeSlide);
})

makeCircles();
autoPlay();