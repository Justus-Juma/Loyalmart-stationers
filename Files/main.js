//HAMBUGER_MENU
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})

//SHOWCASE_IMAGE_SLIDER_I
// Set variables
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000);
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
// Add event listeners to navigation buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
// Define functions for navigation
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}
// Pause slideshow on hover
slides.forEach(function(slide) {
  slide.addEventListener('mouseover', function() {
    clearInterval(slideInterval);
  });

  slide.addEventListener('mouseleave', function() {
    slideInterval = setInterval(nextSlide, 4000);
  });
});

//SHOWCASE II
 // Slider variables
 var images = document.querySelectorAll('.slider-image');
 var currentImageIndex = 0;
 var intervalDuration = 4000; // Duration between slide transitions (in milliseconds)
 // Function to show the next image
 function showNextImage() {
   // Hide current image
   images[currentImageIndex].classList.remove('active');
   // Increment index to show the next image
   currentImageIndex++;
   if (currentImageIndex >= images.length) {
     currentImageIndex = 0; // Start from the first image when reaching the end
   }
   // Show the next image
   images[currentImageIndex].classList.add('active');
 }

 // Start the automatic slider
 setInterval(showNextImage, intervalDuration);
 
/*-----------------------Filter Tables--------------*/
let filterInput = document.getElementById('table-input');
filterInput.addEventListener('keyup', filterProducts);
const login = document.getElementById('login').addEventListener('click', function(){
    window.open('login.html','popup','width=801,height=800');
    return false;
});

function filterProducts(){
    let filterValue = document.getElementById('table-input').value.toUpperCase();
    let tableData = document.getElementById('tables');
    let data = tableData.querySelectorAll('table');
    for(let i = 0; i < data.length; i++){
        let a = data[i].getElementsByTagName('caption')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            data[i].style.display = '';

        } else{
            data[i].style.display = 'none';
        }
    }
    let table = document.getElementById('table');
    let tr = table.getElementsByTagName('tr');
    for(let j = 0; j < tr.length; j++){
        let td = tr[j].getElementsByTagName('td')[0];
        if(td){
            let textValue = td.innerHTML || td.textContent;
            if(textValue.toUpperCase().indexOf(filterValue) > -1){
                tr[j].style.display = '';
            }else{
                tr[j].style.display = 'none';
            }
        }
    }
}

//COPY TO CLIPBOARD
