import React, { useEffect } from 'react'
import OpeningLine from '../contents/OpeningLine.jsx';
import { gsapEffect } from '../../utils/gsapEffect.js';

const Opening = () => {
    useEffect(() => {
        gsapEffect();
    }, [])

    return (
        <section id="opening">
            <h2 className="blind">메인사진 섹션</h2>
            <OpeningLine />
            <div className="noise__overlay"></div>
            <div className="open__contents containerH">
                <div className="open__text">
                    <div className="oText t1">
                        <div className="t split">CREATIVE</div>
                        <div className="text__gif g1"></div>
                        <div className="t__etc">
                            <p>portfolio2024</p>
                        </div>
                    </div>
                    <div className="oText t2">
                        <div className="text__gif g2"></div>
                        <div className="t split">FRONTEND</div>
                    </div>
                    <div className="oText t3">
                        <div className="t split">DEVELOPER</div>
                        <div className="text__gif g3"></div>
                    </div>
                </div>
                <div className="mini__text">
                    <div className="birth">&#123;2004&#125;</div>
                    <div className="advantage1">&#123;PASSIONATE&#125;</div>
                    <div className="advantage2">&#123;AVAILABLE&#125;</div>
                    <div className="advantage3">&#123;DELIGHT&#125;</div>
                    <div className="year">&#123;2024&#125;</div>
                </div>
            </div>
        </section>
    )
}

export default Opening
