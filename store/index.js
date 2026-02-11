/* eslint-disable no-undef */
// export const strict = false
export const state = () => ({
  sliders_configurations: {
    success_stories: {
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: false,
      arrows: true,
      dots: false,
      speed: 1000,
      autoplay: false,
      mobileFirst: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            dots: true,
            arrows: false,
          },
        },

      ],
    },
    our_team: {
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false,
      arrows: true,
      dots: false,
      speed: 2000,
      autoplay: false,
      mobileFirst: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            mobileFirst: true,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            dots: true,
            arrows: false,
          },
        },
      ]
    },
    testimonials: {
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      centerPadding: '28%',
      speed: 3000,
      infinite: true,
      autoplay: false,
      mobileFirst: true,
      // adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding: '12%',
            mobileFirst: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            centerPadding: '0%',
            mobileFirst: true,
            adaptiveHeight: true,
          },
        },
      ]
    },
    clients: {
      slidesToShow: 9,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      pauseOnHover: true,
      // cssEase: 'linear',
      arrows: false,
      dots: true,
      mobileFirst: true,
      centerMode: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 476,
          settings: "unslick"
        },
      ]
    },
  }
})
