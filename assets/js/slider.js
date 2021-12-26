

$(function () {

    //initialize speed 
    let speed = 2000;
    let pause = 4000;
    let currentSlide = 1;

    //select slider
    let $slider = $('.main__slider');
    let $slideList = $slider.find(".slider__list");
    let $slides = $slider.find(".slider__item");
    let $previous = $slider.find(".previous");
    let $next = $slider.find(".next");
    $slideList.css('margin-left', -100 + "%");
    let interval;

    //fix all widths


    //animate slider
    function startSlider() {
        interval = setInterval(function () {

            $slideList.animate({ 'margin-left': "-=100%" }, speed, function () {
                currentSlide++;
                if (currentSlide === $slides.length - 1) {
                    currentSlide = 1;
                    $slideList.css('margin-left', -100 + "%");
                }

            });
        }, pause);
    }
    function stopSlider() {
        clearInterval(interval);
    }
    //pause slider
    $slider.on('mouseover', stopSlider).on('mouseleave', startSlider);

    //next button
    $next.click(function () {

        $slideList.animate({ 'margin-left': "-=100%" }, speed, function () {
            currentSlide++;
            if (currentSlide === $slides.length - 1) {
                currentSlide = 1;
                $slideList.css('margin-left', -100 + "%");
            }

        });
    })

    //previous button
    $previous.click(function () {

        $slideList.animate({ 'margin-left': "+=100%" }, speed, function () {
            currentSlide--;
            if (currentSlide === 0) {
                currentSlide = $slides.length - 2;
                $slideList.css('margin-left', -300 + "%");
            }

        });
    })

    //start the slider on load
    startSlider();
});


