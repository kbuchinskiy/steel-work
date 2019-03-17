$("#slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1365,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
});