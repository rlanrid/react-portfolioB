import React, { useEffect } from 'react'
import { ImgCol } from '../../data/img'
import { moreInfo } from '../../constants'
import { Link } from 'react-router-dom'

const More = (props) => {
    useEffect(() => {
        props.mouse();
    }, [props])
    return (
        <section id="more">
            <h2 className="blind">더보기 섹션</h2>
            <div className="more__wrap containerH">
                <div className="more__title secT">
                    <img src={props.arrowImg} alt={props.arrowAlt} />
                    <h2>More Portfolio</h2>
                    <div className="title__line"></div>
                </div>
                <div className="more__cont">
                    {moreInfo.map((item, key) => (
                        <Link to={item.link} className={`more__item num${key + 1}`} key={key}>
                            <div className="title">{item.title}</div>
                            <div className="type">{item.type}</div>
                            <div className="stack">{item.stack}</div>
                            <div className="link">
                                <div className="linkImg__wrap">
                                    <img src={ImgCol.SmallLinkImg} alt="작은링크화살표" />
                                </div>
                            </div>
                            <div className="more__img__wrap">
                                <div className="more__img__inner">
                                    <img src={item.src} alt={item.alt} className="more__img" />
                                </div>
                            </div>
                            <div className="more__line"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default More
