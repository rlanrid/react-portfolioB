import React from 'react'
import { Link } from 'react-router-dom'
import { PortInfo } from '../../constants/index.js'

const Port = (props) => {
    return (
        <section id="port">
            <h2 className="blind">포트폴리오 섹션</h2>
            <div className="port__wrap containerH">
                <div className="port__title secT">
                    <img src={props.arrowImg} alt={props.arrowAlt} />
                    <h2>Select My PortFolio</h2>
                    <div className="title__line"></div>
                </div>
                <div className="port__cont">
                    {PortInfo.map((item, key) => (
                        <div className={`port__item p${key + 1}`} key={key}>
                            <div className="info">
                                <div className="date">{item.date}</div>
                                <div className="skill">{item.skill}</div>
                            </div>
                            <Link to={item.link} className="info2">
                                <div className="title">{item.title}</div>
                                <div className="link">
                                    <img src={item.linkImg} alt={item.linkAlt} />
                                </div>
                            </Link>
                            <figure>
                                <img src={item.src} alt={item.alt} />
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Port
