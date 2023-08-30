  /* //querySelector is used when there are more than 1;basically 
        //goin to select each element like array with each index
        let sliderImages=document.querySelectorAll('.myslider');
            arrowLeft=document.querySelector('#arrow-left');
            arrowRight=document.querySelector('#arrow-right');
            
            //clears all images
            function reset(){
                for(let i=0; i<sliderImages.length; i++){
                    sliderImages[i].style.display='none';
                }
            }
            //initializes the slider
            function startSlide(){
                reset();
                sliderImages[0].style.display= 'block';
            }

            //show previous
            function slideLeft(){
                reset();
                sliderImages[current - 1].style.display='block';
                current--;
             }

            //show next
            function slideRight(){
                reset();
                sliderImages[current + 1].style.display='block';
                current++;
            }

            //left arrow click
            arrowLeft.addEventListener('click',function(){
                if(current === 0){
                    current = sliderImages.length;
                }
                slideLeft();
            });

             //right arrow click
             arrowRight.addEventListener('click',function(){
                if(current === sliderImages.length - 1){
                    current = -1;
                }
                slideRight();
            });


            startSlide();
*/

/* 

*/


const slides = document.querySelectorAll(".myslider")
      var counter = 0;
//console.log(slides)

slides.forEach(
    (myslider, index) => {
        myslider.style.left = `${index *100}%`
    }
)

const goPrev = () => {
    counter -- 
    slideImage()

  //  if(counter === -1){
  //     current = slideImage.length;
  //  }

}


const goNext = () => {
    counter ++ 
    slideImage()

   // if(counter === slideImage.length){
   //     current = -1;
   // }
}

const slideImage = () => {
    slides.forEach(
        (myslider) => {
            myslider.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}