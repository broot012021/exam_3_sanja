$(document).ready(function () {

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $(".header__search").click(function () {
        $(".header__search-field").toggleClass("show");
    });
    $(".header__search").click(function () {
        $(".header__search-btn").toggleClass("btn-show");
    });

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {

                $('.header__nav').addClass('change-Bg')

            }
            if ($(this).scrollTop() < 50) {

                $('.header__nav').removeClass('change-Bg')

            }
        });
    });


    $('.products__carousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<button class='products__arrow-left prev'></button>",
        nextArrow: "<button class='products__arrow-right next'></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('.testimonials__carousel').slick({
        dots: false,
        infinite: true,
        speed: 700,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: 'linear',
        prevArrow: "<button class='testimonials__arrow-left prev'></button>",
        nextArrow: "<button class='testimonials__arrow-right next'></button>",
    });

    var acc = document.getElementsByClassName("questions__accordion-cell");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

});

function tabChange(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("about__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    };
    tablinks = document.getElementsByClassName("about__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    };
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
};



$("#navMenu .header__menu-link").click(function () {
    $('.header__menu-link').removeClass('selected');
    $(this).addClass("selected");
});




let count = 0;

function buy() {
    count++;
    document.getElementById('count').innerHTML = (`${count}`);
}
