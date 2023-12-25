import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const CommentWrite = (props) => {
    const [comment, setComment] = useState("");
    const [isOverLimit, setIsOverLimit] = useState(false);

    const user = useSelector((state) => state.user);

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (user.accessToken === "") {
            alert("로그인을 해주세요.");
            return props.toggleModal();
        }

        if (!comment) {
            return alert("댓글을 작성해주세요.");
        }

        if (comment.length > 100) {
            return alert("댓글은 100자 이하로 작성해주세요.")
        }

        let body = {
            comment: comment,
            uid: user.uid,
        }

        axios
            .post("/api/comment/submit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("댓글 작성이 성공하였습니다.");
                    window.location.reload();
                } else {
                    alert("댓글 작성이 실패했습니다.")
                }
            })
    }

    const handleInputChange = (e) => {
        const text = e.currentTarget.value;
        setComment(text);

        if (text.length > 100) {
            setIsOverLimit(true);
        } else {
            setIsOverLimit(false);
        }
    }

    return (
        <div className="comment__form">
            <input
                placeholder="Leave a Comment"
                text="text"
                value={comment}
                onChange={(e) => { handleInputChange(e) }}
            />
            <p className={isOverLimit ? 'comment__length limit' : 'comment__length'}>
                <i>{comment.length}</i> / 100
            </p>
            <button
                onClick={(e) => {
                    SubmitHandler(e)
                }}
            >Write</button>
        </div>
    )
}

export default CommentWrite
