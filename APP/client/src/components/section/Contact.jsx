import React from 'react'
import ContactLine from '../contents/ContactLine'

const Contact = (props) => {
    return (
        <section id="contact">
            <h2 className="blind">연락 섹션</h2>
            <ContactLine />
            <div className="contact__wrap containerH">
                <div className="contact__title secT">
                    <img src={props.arrowImg} alt={props.arrowAlt} />
                    <h2>Contact</h2>
                    <div className="title__line"></div>
                </div>
                <div className="contact__cont">
                    <div className="light"></div>
                    <div className="hello">Say Hello</div>
                    <div className="email">rladnrider77@gmail.com</div>
                </div>
            </div>
        </section>
    )
}

export default Contact
