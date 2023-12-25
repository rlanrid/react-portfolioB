import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { LuClipboardList } from "react-icons/lu";

import CommentWrite from '../comment/CommentWrite'
import CommentList from '../comment/CommentList'

const Comment = (props) => {
    const [isFilter, setIsFilter] = useState(false);
    const user = useSelector((state) => state.user);

    const filterHandler = (currentState) => {
        const state = !currentState;
        setIsFilter(state);

        console.log(isFilter)
    }

    return (
        <section id="comment">
            <h2 className="blind">코멘트 섹션</h2>
            <div className="comment__wrap containerH">
                <div className="comment__title secT">
                    <img src={props.arrowImg} alt={props.arrowAlt} />
                    <h2>Comment</h2>
                    {user.accessToken ? (
                        <div className="comment__filter">
                            <LuClipboardList onClick={() => { filterHandler(isFilter) }} />
                        </div>
                    ) : (
                        <></>
                    )}

                    <div className="title__line"></div>
                </div>
                <div className="comment__cont">
                    <CommentWrite toggleModal={props.toggleModal} />
                    <CommentList state={isFilter} />
                </div>
            </div>
        </section>
    )
}

export default Comment
