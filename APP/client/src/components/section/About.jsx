import React from 'react'
import { Link } from 'react-router-dom'
import { ImgCol } from '../../data/img'


const About = (props) => {
    return (
        <section id="about">
            <h2 className="blind">자기소개 섹션</h2>
            <div className="about__wrap containerH">
                <div className="about__title secT">
                    <img src={props.arrowImg} alt={props.arrowAlt} />
                    <h2>About</h2>
                    <div className="title__line"></div>
                </div>
                <div className="about__cont">
                    <div className="about__left">
                        <div className="about__intro gsap__about">
                            안녕하세요, 신입 프론트엔드 개발자 우주입니다!
                            코딩에 대해 관심이 있던 와중에 웹 개발에
                            관심이 생겨서 프론트엔드의 꿈을 가지게 되었습니다.
                            웹 개발을 통해 사람들의 삶을 더 편리하고 흥미롭게
                            만들 수 있는 기회를 찾고 있습니다.
                        </div>
                        <div className="about__link gsap__about">
                            <Link to="/">
                                <p>About me</p>
                                <img src={ImgCol.RightArrowImg} alt="오른쪽화살표" />
                            </Link>
                        </div>
                    </div>
                    <div className="about__right">
                        <figure>
                            <img src={ImgCol.noiseImg} alt="노이즈배경이미지" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
