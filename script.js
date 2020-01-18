const prevOne = document.querySelector('.one .prev');
const prevTwo = document.querySelector('.two .prev');
const nextOne = document.querySelector('.one .next');
const nextTwo = document.querySelector('.two .next');
const slider1 = [...document.querySelectorAll('.one .mySlides1 img')];
const slider2 = [...document.querySelectorAll('.two .mySlides2 img')];
const table = [slider1,slider2];
let number = 0;

function reset() {
   for(let i = 0; i < slider1.length; i++) {
      slider1[i].style.display = "none";
      slider2[i].style.display = "none";
   }
};

function start() {
    reset();
    slider1[0].style.display = "block";
    slider2[0].style.display = "block";
};

start(); //wywołujemy funkcję by ustawić display none(funkcja reset) i dodac block do pierwszych slajdów

function changeSlide(a,b) {
    
    if(b === "-") {
        table[a][number].style.display = "none";
        number--;
        if(number < 0) {
            number = slider1.length - 1;
        }
        table[a][number].style.display="block";
    }
    else if(b === "+") {
        table[a][number].style.display = "none";
        number++;
        if(number > slider1.length - 1) {
            number = 0;
        }
        table[a][number].style.display = "block";
    }
};
    
prevOne.addEventListener('click', () => changeSlide(0,"-")); //parametr pierwszy wskazuje konkretny slider z tablicy a drugi parametr(-/+) pozwala zdecydowac czy funkcja ma sie cofac o slajd czy przewijac do przodu
prevTwo.addEventListener('click', () => changeSlide(1,"-"));
nextOne.addEventListener('click', () => changeSlide(0,"+"));
nextTwo.addEventListener('click', () => changeSlide(1,"+"));
