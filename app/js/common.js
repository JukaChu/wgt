var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();


// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target;
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }
                    el.classList.add('done');


                } else {
                    el.classList.remove('done');
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();

//


var burger = [...document.querySelectorAll('.burger')];
var burgerX = [...document.querySelectorAll('.burger-x')];
var header = document.querySelector('.header');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        });
        burgerX.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();


let motherSlider = [...document.querySelectorAll('.relevance-slides')];

function startMotherSlide() {
    if (!motherSlider.length) {

    } else {


        motherSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: true,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,
                freeMode: false,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,
                initialSlide: 4,
                navigation: false,
                autoplay: {
                    delay: 4200,
                },
                spaceBetween: 0,
                breakpoints: {
                    767: {
                        spaceBetween: 0,
                        slidesPerView: 3,
                    }
                }


            });


        })

    }
}

startMotherSlide();


let swiperModal = [...document.querySelectorAll('.modal-slider')];
let swiper3 = '';
function startModalSwiper() {
    if (!swiperModal.length) {

    } else {


        swiperModal.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');

            swiper3 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: true,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,
                freeMode: false,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,
                initialSlide: 2,
                navigation: false,
                autoplay: false,
                spaceBetween: 16,
                breakpoints: {
                    767: {
                        spaceBetween: 124,
                        slidesPerView: 1,
                    }
                }


            });


        })

    }
}

startModalSwiper();


let fixedMenus = [...document.querySelectorAll('.header-menu li a')];

function scrollFixedMenu() {
    if (fixedMenus.length) {
        fixedMenus.forEach((bt) => {
            let dataItem = bt.dataset.lnk;
            bt.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(`.${dataItem}`).offset().top
                }, 500);
            });

        })


    }
}

// scrollFixedMenu();



$('body').on('click','.relevance-slides .sld',function(){

    let nm = Number(this.dataset.number);
    let mod = this.dataset.mod;

    $(`.${mod}`).addClass('visible');
    $('body').addClass('no-scroll');

    swiper3.slideTo(nm);


});


$('body').on('click','.modal-close',function(){
    $('.modal-window').removeClass('visible');
    $('body').removeClass('no-scroll');

});
$('body').on('click','.backplate',function(){
    $('.modal-window').removeClass('visible');
    $('body').removeClass('no-scroll');

});




function ifHaveShips() {
    if (document.querySelector('.page-section')) {
        const sections = document.querySelectorAll(".page-section");
        const menuItems = document.querySelectorAll(".header-menu a");


        sections.forEach((sec, index) => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset - 100 && top < offset + height - 100) {
                const target = document.querySelector(`[href='#${id}']`);
                activeLink(target);
            } else {
            }
        });
        function onScroll2() {
            var scrollPos = $(document).scrollTop();

            window.onscroll = () => {
                sections.forEach((sec, index) => {
                    let top = window.scrollY;
                    let offset = sec.offsetTop;
                    let height = sec.offsetHeight;
                    let id = sec.getAttribute('id');

                    if (top >= offset - 100 && top < offset + height - 100) {
                        const target = document.querySelector(`[href='#${id}']`);
                        activeLink(target);
                    } else {
                    }
                })
            };
        }
        function activeLink(li) {
            menuItems.forEach((item) => item.classList.remove('active'));
            li.classList.add('active');
        }


        onScroll2();
        $(document).on("scroll", onScroll2);
// Get all sections that have an ID defined


// Add an event listener listening for scroll
        menuItems.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                let link = btn.getAttribute("href");


                document.body.classList.remove('no-scroll');
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(link).offset().top - $('.header').outerHeight(true)
                }, 600);
            })
        });
    }
}

ifHaveShips();


