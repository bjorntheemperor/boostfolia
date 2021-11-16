$(document).ready(function (){

    // SLICK SLIDER FOR WORKS SECTION
    const worksSlider = $('.works__slider-inner')

    if (window.innerWidth > 1040) {
        worksSlider.slick({
            arrows: true,
            dots: false,
            slidesToShow: 3
        })
        console.log('> 1040')
    } else if (window.innerWidth > 750 && window.innerWidth <= 1040) {
        worksSlider.slick({
            arrows: true,
            dots: false,
            slidesToShow: 2
        })
        console.log('>750 && <=1040')
    } else if (window.innerWidth <= 750) {
        worksSlider.slick({
            arrows: true,
            dots: false,
            slidesToShow: 1
        })
        console.log('<=750')
    }


    // SLICK SLIDER FOR PROFILES SECTION
    const profSlider = $('.profiles__info-slider')
    profSlider.slick({
        arrows: false,
        dots: true,
        slidesToShow: 1
    })



    const profSkills = $('.profiles__skills-item')
    profSkills[0].style.opacity = 1

    profSlider.on('afterChange', function (event, slick, currentSlide){
        for (let i = 0; i < profSkills.length; i++){
            profSkills[i].style.opacity = 0;
        }
        profSkills[currentSlide].style.opacity = 1;
    })




    // SCRIPT FOR BAR PERCENTAGE IN PROFILES SECTION

    const levels = document.querySelectorAll('.profiles__skills-table-item-level')
    for (let key of levels) {
        let bar = key.parentElement.children[1].children
        bar[0].style.width = key.innerHTML
    }



    // CHECK IF INPUTS ARE EMPTY

    const nameInput = $('.touch__grid-name-input')
    nameInput.change(()=>{
        if (nameInput[0].value !== ""){
            nameInput.parent().children().children().css('opacity', 0)
        } else nameInput.parent().children().children().css('opacity', 1)
    })
    const mailInput = $('.touch__grid-mail-input')
    mailInput.change(()=>{
        if (mailInput[0].value !== ""){
            mailInput.parent().children().children().css('opacity', 0)
        } else mailInput.parent().children().children().css('opacity', 1)
    })
    const messageText = $('.touch__grid-message-text')
    messageText.change(()=>{
        if (messageText[0].value !== ""){
            messageText.parent().children().children().css('opacity', 0)
        } else messageText.parent().children().children().css('opacity', 1)
    })


    // MAP TOGGLE

    $('.map-toggle').click(()=>{
        $('.map').toggleClass('hidden')
    })


    // FIXED HEADER

    $(document).scroll(()=>{
        if (window.scrollY >= 200){
            $('.header').addClass('fixed')
        } else $('.header').removeClass('fixed')

    })
})
