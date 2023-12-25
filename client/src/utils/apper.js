import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function appear() {
    // ScrollTrigger 플러그인을 등록하고 함수 정의
    gsap.registerPlugin(ScrollTrigger);

    const hide = (item) => {
        gsap.set(item, { autoAlpha: 0 });
    }

    const animate = (item) => {
        let delay = item.dataset.delay || 0; // delay 값이 없으면 0으로 설정

        gsap.fromTo(
            item,
            { autoAlpha: 0, x: 0, y: 50 },
            { autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 1.25, overwrite: "auto", ease: "expo" }
        )
    }

    const animate2 = (item) => {
        gsap.fromTo(item,
            { autoAlpha: 0, width: 0 },
            { autoAlpha: 1, width: 100 + "%", duration: 1.5 }
        )
    }

    const animate3 = (item) => {
        let delay = item.dataset.delay || 0; // delay 값이 없으면 0으로 설정

        gsap.fromTo(item,
            { autoAlpha: 0, x: 0, y: 50 },
            { autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 1.5, overwrite: "auto", ease: "expo" })
    }

    // title
    const secTitle = document.querySelectorAll(".secT");

    secTitle.forEach(item => {
        const imgElement = item.querySelectorAll("img");
        const h2Element = item.querySelectorAll("h2");
        const lineElement = item.querySelectorAll(".title__line");

        imgElement.forEach((el) => {
            el.classList.add("reveal");
        });

        h2Element.forEach((el) => {
            el.classList.add("reveal");
        });

        lineElement.forEach((el) => {
            el.classList.add("reveal__line");
        })
    })

    gsap.utils.toArray(".reveal").forEach(item => {
        hide(item);

        ScrollTrigger.create({
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            once: true,
            onEnter: () => { animate(item) }
        })
    })

    gsap.utils.toArray(".reveal__line").forEach(item => {
        hide(item);

        ScrollTrigger.create({
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            once: true,
            onEnter: () => { animate2(item) }
        })
    })

    // intro
    const introSection = document.querySelector("#intro");
    const introItems = gsap.utils.toArray(".gsap__intro");

    introItems.forEach((item, index) => {
        hide(item);

        ScrollTrigger.create({
            trigger: introSection,
            start: "top center",
            end: "bottom top",
            once: true,
            onEnter: () => {
                animate3(item);
            },
        });
    });

    // more
    const moreItems = gsap.utils.toArray(".more__line");

    moreItems.forEach((el) => {
        el.classList.add("reveal__line");
    })

    gsap.utils.toArray(".reveal__line").forEach(item => {
        hide(item);

        ScrollTrigger.create({
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            once: true,
            duration: 5,
            delay: 1,
            onEnter: () => { animate2(item) }
        })
    })

    // about
    const aboutSection = document.querySelector("#about");
    const aboutItems = document.querySelectorAll(".gsap__about");

    aboutItems.forEach((item, index) => {
        hide(item);

        ScrollTrigger.create({
            trigger: aboutSection,
            start: "top center",
            end: "bottom top",
            once: true,
            onEnter: () => {
                animate3(item);
            }
        })
    })

    // stack
    const stackIcons = document.querySelectorAll(".icon__img");

    function handleHover() {
        const descParagraph = this.parentElement.nextElementSibling.querySelector('.stack__desc > p');
        if (window.innerWidth >= 760) {
            descParagraph.style.opacity = '1';
        }
    }

    function handleMouseOut() {
        const descParagraph = this.parentElement.nextElementSibling.querySelector('.stack__desc > p');
        if (window.innerWidth >= 760) {
            descParagraph.style.opacity = '0';
        }
    }

    stackIcons.forEach((icon) => {
        icon.addEventListener("mouseover", handleHover);
        icon.addEventListener("mouseout", handleMouseOut);
    });
}

export function sliderAppar() {
    // intro - sliderTrack 만들기
    const sliderTrack1 = document.querySelector('#sliderTrack1');
    if (!sliderTrack1) {
        console.error("sliderTrack1이 존재하지 않습니다.");
        return;
    }

    const sliderTrackContents = sliderTrack1.innerHTML;

    const newSliderTrack = document.createElement('div');
    newSliderTrack.classList.add('slider__track');
    newSliderTrack.id = 'sliderTrack2';

    const sliderWrap = document.querySelector('.slider__wrap');
    sliderWrap.appendChild(newSliderTrack);

    const sliderTrack2 = document.querySelector('#sliderTrack2');
    if (sliderTrack2) {
        sliderTrack2.innerHTML = sliderTrackContents;
    } else {
        console.error("sliderTrack2가 존재하지 않습니다.");
    }
}