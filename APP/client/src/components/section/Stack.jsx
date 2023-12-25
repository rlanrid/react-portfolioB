import React from 'react'
import { StackInfo } from '../../constants/index.js';

const Stack = (props) => {
    return (
        <section id='stack'>
            <h2 className='blind'>스택 섹션</h2>
            <div className='stack__wrap containerH'>
                <div className='stack__title secT'>
                    <img src={props.arrowImg} alt={props.arrowAlt} />
                    <h2>Stack</h2>
                    <div className='title__line'></div>
                </div>
                <div className='stack__cont'>
                    {StackInfo.map((item, key) => (
                        <div className={`stack__item num${key + 1}`} key={key}>
                            <div className='stack__icon'>
                                <img src={item.src} alt={item.alt} className={`icon__img ${item.peculiarity ? 'mongoImg' : ''}`} />
                                <img src={item.noise} alt={item.noiseAlt} className='noise' />
                            </div>
                            <div className='stack__desc'>
                                <div className='title'>{item.title}</div>
                                <div className='type'>{item.type}</div>
                                <p className='desc'>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stack
