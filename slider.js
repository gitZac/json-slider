//First, populate slider with our slides.

const arr = pushJsonToArray(data);
populateSlides(arr);

//Now, on the initial load, show the first slide.
var slideIndex = 1;
showSlides(slideIndex); 


//Add functions to show the previous and next slides. Will be called on the button onclick event

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function populateSlides(arr){

    const slider = document.getElementById('slider');
    const shuffledArr = shuffleItems(arr);

    shuffledArr.forEach(function(item) {

       const slideHtml = `

        <div class="mySlides">
            <q>${item.advice}</q>
            <p class="author">- ${item.fistName} ${item.lastName}</p>
        </div> `;
        
        slider.innerHTML += slideHtml;
 
    });
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {slideIndex = 1} //Set index back to zero if last slide is reached

    if (n < 1) {slideIndex = slides.length} //Set the index to the max number of slides if we go back too far

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        //Loop through all the slides and set their display to none, so the previous slide does not show.
    }

    //Set the current slide to display block.
    slides[slideIndex-1].style.display = "block";
}
