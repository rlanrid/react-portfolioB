import React, { useEffect } from 'react'
import { sliderAppar } from '../../utils/apper';

const Intro = (props) => {
    useEffect(() => {
        props.appear();
        sliderAppar();
    }, [props])
    return (
        <section id="intro">
            <h2 className="blind">인트로 섹션</h2>
            <div className="intro__wrap containerH">
                <div className="intro__text gsap__intro" data-delay="0">
                    Creating user-centric<br />
                    development with a<br />
                    focus on usability.
                </div>
                <div className="intro__desc gsap__intro" data-delay="0.1">
                    '배움에는 끝이 없다' 라는 말이 있듯이 공부도 100% 라는 완벽한 수치는 없다고 생각합니다.<br />
                    그렇지만 100%에 근접할 수 있도록 틈틈이 비는 시간을 이용해 배웠던것도<br />
                    복습하고 새로운 것들을 공부하여 차근차근 프론트엔드 업무에<br />
                    대한 저만의 전문성과 경쟁력을 갖추겠습니다.
                </div>
                <div className="intro__stack gsap__intro" data-delay="0.2">
                    <div className="slider__wrap">
                        <div className="linear__effect"></div>
                        <div className="slider__track" id="sliderTrack1">
                            <div className="slider">
                                <div className="text tHtml">HTML</div>
                            </div>
                            <div className="slider">
                                <div className="text tCss">CSS3</div>
                            </div>
                            <div className="slider">
                                <div className="text tMongo">mongoDB</div>
                            </div>
                            <div className="slider">
                                <div className="text tJs">JavaScript</div>
                            </div>
                            <div className="slider">
                                <div className="text tReact">React</div>
                            </div>
                            <div className="slider">
                                <div className="text tSass">Sass</div>
                            </div>
                            <div className="slider">
                                <div className="text tJson">Json</div>
                            </div>
                            <div className="slider">
                                <div className="text tNode">Node.js</div>
                            </div>
                            <div className="slider">
                                <div className="text tJquery">Jquery</div>
                            </div>
                            <div className="slider">
                                <div className="text tPhp">PHP</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
