
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const navBar = $('.header')
    
    const tabs = $$('.nav__mobile-link')
    const languages = $$('.header-right__languages>span')
    const activity = $$('.active-left__item')

    // Slider
    const slider_btn = $$('.slider-navigation__btn');
    const slider = $$('.video-slide');
    const comments = $$('.slider-comment');
    const next = $('.slider-btn__select--right')
    const prev = $('.slider-btn__select--left')

    const acupuncture = $$('.acupuncture-left-box__text>span')
    const btn_arrows = $$('.acupuncture-left-box__text-img')

    const project_text = $$('.project-righ__text')
    const project_arrow = $$('.project-right-img')

    const news_heading = $$('.news-left-top__items')
    
    const news_body = $$('.news-bottom-items')

    const news_bottom_btn = $$('.news-right-bottom-slider__btn')

    const recruitment_text = $$('.recruitment-right-bottom-top__text')
    const recruitment_img = $$('.recruitment-right-bottom-top__img')

    window.onscroll = () => {
        if (window.scrollY > 300) {
        navBar.classList.add('header-active');
        } else {
        navBar.classList.remove('header-active');
        }
    }
    //Nav
    tabs.forEach((tabs) => {
        tabs.onclick = () => {
            $('.nav__mobile-link.active').classList.remove('active')
            tabs.classList.add('active')  
        
        }
    })

    languages.forEach((languages) => {
        languages.onclick = () => {
             $('.header-right__languages>span.header-right__languages--active').classList.remove('header-right__languages--active')
             languages.classList.add('header-right__languages--active')
        }
    })

    var acupunctures = (propss) => {
        acupuncture.forEach((acupuncturess) => {
            acupuncturess.classList.remove('acupuncture-left-box__text--active')
        })

        btn_arrows.forEach((btn_arrowss) => {
             btn_arrowss.classList.remove('acupuncture-left-box__text-img--active')
        })

        acupuncture[propss].classList.add('acupuncture-left-box__text--active')
        btn_arrows[propss].classList.add('acupuncture-left-box__text-img--active')
    }

    acupuncture.forEach((btns, j ) => {
        btns.addEventListener("click", () => {
            acupunctures(j)
        })
    })

    // Slider
    var sliderNav = (manual) => {
        slider_btn.forEach((btn) => {
            btn.classList.remove('slider-navigation__btn--active')
        })

        slider.forEach((slide) => {
            slide.classList.remove('video-slide--active')
        })

        comments.forEach((com) => {
            com.classList.remove('slider-comment--active')
        })

        slider_btn[manual].classList.add("slider-navigation__btn--active") 
        slider[manual].classList.add("video-slide--active")
        comments[manual].classList.add("slider-comment--active") 
    }
    
    slider_btn.forEach((btn, i ) => {
        btn.addEventListener("click", () => {
            sliderNav(i)
        })
    })

    var project = (projects => {
        project_text.forEach((btn) => {
            btn.classList.remove('project-righ__text--active')
        })

        project_arrow.forEach((slide) => {
            slide.classList.remove('project-right-img--active')
        })
        
        project_text[projects].classList.add("project-righ__text--active")
        project_arrow[projects].classList.add("project-right-img--active") 
    })

    project_text.forEach((btn, i ) => {
        btn.addEventListener("click", () => {
            project(i)
        })
    })

    news_heading.forEach((btn) => {
        btn.onclick = () => {
             $('.news-left-top__items.news-left-top__items--active').classList.remove('news-left-top__items--active')
             btn.classList.add('news-left-top__items--active')
        }
    })

    var newsBottom = (news => {
        news_bottom_btn.forEach((btn) => {
            btn.classList.remove('news-right-bottom-slider__btn--active')
        })

        news_body.forEach((slide) => {
            slide.classList.remove('news-bottom-items--acitve')
        })
        
        news_bottom_btn[news].classList.add("news-right-bottom-slider__btn--active")
        news_body[news].classList.add("news-bottom-items--acitve") 
    })

    news_bottom_btn.forEach((btn, i ) => {
        btn.addEventListener("click", () => {
            newsBottom(i)
        })
    })

    news_body.forEach((btn, i ) => {
        btn.addEventListener("click", () => {
            newsBottom(i)
        })
    })


    var recruitment = (recruitments => {
        recruitment_text.forEach((btn) => {
            btn.classList.remove('recruitment-right-bottom-top__text--active')
        })

        recruitment_img.forEach((slide) => {
            slide.classList.remove('recruitment-right-bottom-top__img--active')
        })
        
        recruitment_text[recruitments].classList.add("recruitment-right-bottom-top__text--active")
        recruitment_img[recruitments].classList.add("recruitment-right-bottom-top__img--active") 
    })

    recruitment_text.forEach((btn, i ) => {
        btn.addEventListener("click", () => {
            recruitment(i)
        })
    })


    //*************//

    
    var index = 0;

    // news_bottom_btn.forEach((btn, i ) => {
    //     btn.addEventListener("click", () => {
    //         newsBottom(i)
    //     })
    // })

    // next.forEach((btn, i) => {
    //     btn.addEventListener("click", () => {
    //         nextSlide(i)
    //     })
    // })
    
    next.addEventListener('click', () => {
        nextSlide()
    })

    // prev.forEach((btn, i) => {
    //     btn.addEventListener("click", () => {
    //         prevSlider(i)
    //     })
    // })
    
    prev.addEventListener('click', () => {
        prevSlider()
    })

    var sliderLength = slider.length

    function prevSlider() {
        if(index == 0) {
            index=sliderLength-1
        }else {
            index--
        }
        changeSlider()
    }

    function nextSlide() {
        if(index == sliderLength-1){
            index = 0
        }else {
            index++
        }
        changeSlider()  
    }
    
    function changeSlider() {
        for(let i = 0; i < sliderLength; i++){
            slider[i].classList.remove('video-slide--active')
            slider_btn[i].classList.remove("slider-navigation__btn--active") 
            comments[i].classList.remove("slider-comment--active") 
        }
        
        slider[index].classList.add('video-slide--active')
        slider_btn[index].classList.add("slider-navigation__btn--active") 
        comments[index].classList.add("slider-comment--active") 
        
    }


    function autoPlay() {
        nextSlide()
    }

    let timer = setInterval(autoPlay,5000)
    


